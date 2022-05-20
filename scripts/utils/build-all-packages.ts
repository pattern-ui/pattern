/* eslint-disable no-await-in-loop, no-restricted-syntax */
import { buildPackage, BuildOptions } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';

export async function buildAllPackages(options?: BuildOptions) {
  const packages = await getPackagesBuildOrder();

  // eslint-disable-next-line no-param-reassign
  options = options || {
    analyze: false,
    sourcemap: true,
    minify: false,
    formats: ['es', 'cjs'],
    from: null,
  };

  const fromIndex = packages.findIndex((it) => it.packageJson.name === options.from);
  let i = 0;
  for (const item of packages) {
    if (options.from && i < fromIndex) {
      // eslint-disable-next-line no-continue
      console.log('skip:', item.packageJson.name, i);
    } else {
      await buildPackage(item.packageJson.name, options);
      console.log('-'.repeat(100));
    }
    i += 1;
  }

  return packages;
}
