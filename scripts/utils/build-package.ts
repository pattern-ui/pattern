/* eslint-disable no-await-in-loop, no-restricted-syntax */
import chalk from 'chalk';
import createPackageConfig from '../../config/rollup/create-package-config';
import locatePackage from './locate-package';
import compile from './compile';
import generateDts from './generate-dts';
import { Logger } from './Logger';

const logger = new Logger('build-package');

export interface BuildOptions {
  analyze: boolean;
  sourcemap: boolean;
  minify: boolean;
  formats: string[];
  from: string;
}

export async function buildPackage(packageName: string, options?: BuildOptions) {
  const packagePath = await locatePackage(packageName || '');

  const logPrefix = `${chalk.cyan(packageName)} ${chalk.cyan('→')}`;

  if (!packagePath) {
    logger.error(`${logPrefix} package does not exist`);
    process.exit(1);
  }

  logger.info(`${logPrefix} building...`);

  const allStartTime = Date.now();

  try {
    await Promise.all([
      (async () => {
        const startTime = Date.now();
        await generateDts(packagePath);
        logger.info(
          `${logPrefix} ${chalk.cyan('types')} was built in ${chalk.green(
            `${((Date.now() - startTime) / 1000).toFixed(2)}s`
          )}`
        );
      })(),
      ...(options?.formats ?? []).map((format) =>
        (async () => {
          const startTime = Date.now();

          const config = await createPackageConfig({
            ...options,
            basePath: packagePath,
            format,
          });

          logger.info(`${logPrefix} building to ${chalk.cyan(format)} format...`);
          await compile(config);

          logger.info(
            `${logPrefix} ${chalk.cyan(format)} was built in ${chalk.green(
              `${((Date.now() - startTime) / 1000).toFixed(2)}s`
            )}`
          );
        })()
      ),
    ]);

    logger.info(
      `${logPrefix} was built in ${chalk.green(
        `${((Date.now() - allStartTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err) {
    logger.error(`${logPrefix} failed to compile package`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}
