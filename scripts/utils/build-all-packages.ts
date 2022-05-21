/* eslint-disable no-await-in-loop, no-restricted-syntax */
import chalk from 'chalk';
import { buildPackage, BuildOptions } from './build-package';
import { buildPackages, getPackagesBuildOrder } from './get-packages-build-order';

//  lower  level
//    *     *
//   /  \  / \
//  *    *    *
//   \  /  \ /
//    *     *
//  higher level
export async function buildAllPackages(options?: BuildOptions) {
  const startTime = Date.now();

  const packages = await getPackagesBuildOrder();

  // eslint-disable-next-line no-param-reassign
  options = options || {
    analyze: false,
    sourcemap: true,
    minify: false,
    formats: ['es', 'cjs'],
    from: null,
  };

  await buildPackages(
    packages.map((it) => ({
      name: it.packageJson.name,
      dependencies: new Set([
        ...Object.keys(it.packageJson.dependencies ?? {}),
        ...Object.keys(it.packageJson.devDependencies ?? {}),
        ...Object.keys(it.packageJson.peerDependencies ?? {}),
      ]),
    })),
    (it) => it.startsWith('@pattern-ui/'),
    async (it) => buildPackage(it, options)
  );

  console.info(
    `All packages was built in ${chalk.green(`${((Date.now() - startTime) / 1000).toFixed(2)}s`)}`
  );

  return packages;
}
