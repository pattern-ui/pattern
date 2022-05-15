/* eslint-disable no-await-in-loop, no-restricted-syntax */

import chalk from 'chalk/index';
import { buildPackage, BuildOptions } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';
import { Logger } from './Logger';

const logger = new Logger('build-package');

export async function buildAllPackages(options?: BuildOptions) {
  const packages = await getPackagesBuildOrder();

  // eslint-disable-next-line no-param-reassign
  options = options || {
    analyze: false,
    sourcemap: true,
    minify: false,
    formats: ['es', 'cjs'],
  };

  for (const item of packages) {
    await buildPackage(item.packageJson.name, options);
    console.log('-'.repeat(100));
  }

  return packages;
}
