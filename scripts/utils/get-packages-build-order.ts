/* eslint-disable no-param-reassign, no-restricted-syntax, no-continue, no-await-in-loop */
import { getPackagesList, Package } from './get-packages-list';

export async function getPackageBuildOrder(
  packages: Package[],
  pkg: Package,
  order: Record<string, number> = {}
) {
  const depSelf = Object.keys(pkg.packageJson.dependencies).find(
    (it) => it === pkg.packageJson.name
  );

  if (depSelf) {
    throw new Error(`package ${pkg.packageJson.name} depends on itself`);
  }

  const { name } = pkg.packageJson;

  if (name in order) return;
  if (pkg.packageJson.private) {
    order[name] = -1;
    return;
  }

  packages = packages || [];

  const dependencies = Object.keys({
    ...pkg.packageJson.peerDependencies,
    ...pkg.packageJson.dependencies,
  })
    .filter((dependency) => dependency.includes('@pattern-ui/'))
    .map((dependency) => packages.find((pkgItem) => pkgItem.packageJson.name === dependency));

  if (dependencies.length === 0) {
    order[name] = 0;
    return;
  }

  await Promise.all(
    dependencies.map((dependency) => getPackageBuildOrder(packages, dependency, order))
  );

  order[name] =
    1 + Math.max(...dependencies.map((dependency) => order[dependency.packageJson.name]));
}

const excludes = ['eslint-config-pattern', 'eslint-demo-loader'];

export async function getPackagesBuildOrder(
  packages?: Package[],
  order: Record<string, number> = {}
) {
  packages = packages || (await getPackagesList());
  packages = packages.filter((it) => !excludes.includes(it.packageJson.name));

  for (const pkg of packages) {
    await getPackageBuildOrder(packages, pkg, order);
  }

  return Object.keys(order)
    .filter((p) => order[p] !== -1)
    .sort((a, b) => order[a] - order[b])
    .map((p) => packages.find((dataItem) => dataItem.packageJson.name === p));
}

interface ReverseDependPackage {
  name: string;
  dependBys: Set<string>;
}

interface DependPackage {
  name: string;
  dependencies: Set<string>;
}

export function getDependPackagesFromPackages(packages: Package[]): DependPackage[] {
  return packages.map((it) => ({
    name: it.packageJson.name,
    dependencies: new Set(Object.keys(it.packageJson.dependencies)),
  }));
}

export function getRevertDepPackages(packages: DependPackage[]): ReverseDependPackage[] {
  const map = packages.reduce((acc, current) => {
    current.dependencies.forEach((pkg) => {
      if (!acc.has(pkg)) {
        acc.set(pkg, {
          name: pkg,
          dependBys: new Set<string>(),
        });
      }
      acc.get(pkg).dependBys.add(current.name);
    });
    return acc;
  }, new Map<string, ReverseDependPackage>());

  return Object.values(map);
}

export async function buildPackages(
  packages: DependPackage[],
  filter: (name: string) => boolean,
  build: (name: string) => Promise<void>
) {
  const pkgMap = packages.reduce<
    Record<
      string,
      {
        package: DependPackage;
        promise: Promise<void> | null;
      }
    >
  >((acc, current) => {
    acc[current.name] = {
      package: current,
      promise: null,
    };
    return acc;
  }, {});

  const buildPackage = async (pkg: DependPackage) => {
    if (!filter(pkg.name)) {
      return;
    }

    // build dependencies
    await Promise.all(
      [...pkg.dependencies].filter(filter).map((it) => buildPackage(pkgMap[it].package))
    );

    // build package itself
    const pkgData = pkgMap[pkg.name];

    if (!pkgData.promise) {
      pkgData.promise = build(pkg.name);
    } else {
      await pkgData.promise;
    }
  };

  return Promise.all(packages.map(buildPackage));
}
