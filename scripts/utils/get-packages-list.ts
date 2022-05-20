/* eslint-disable no-restricted-syntax, no-await-in-loop */
import path from 'path';
import fs from 'fs-extra';

interface PackageJson {
  readonly name: string;
  readonly version: string;
  readonly private: boolean;
  readonly main: string;
  readonly license: string;
  readonly types?: string;
  readonly author: string;
  readonly sideEffects?: boolean;
  readonly scripts?: Record<string, string>;
  readonly peerDependencies?: Record<string, string>;
  readonly dependencies?: Record<string, string>;
  readonly devDependencies?: Record<string, string>;
}

export interface Package {
  path: string;
  packageJsonPath: string;
  packageJson: PackageJson;
}

export interface Edge {
  source: string;
  target: string;
}

export async function getPackagesList(): Promise<Package[]> {
  const basePath = path.join(__dirname, '../../packages');
  const packagePaths = await fs.readdir(basePath);
  const packages: Package[] = [];

  for (const packagePath of packagePaths) {
    const packageJsonPath = path.join(basePath, packagePath, 'package.json');
    if (await fs.pathExists(packageJsonPath)) {
      packages.push({
        path: path.join(basePath, packagePath),
        packageJsonPath,
        packageJson: await fs.readJSON(packageJsonPath),
      });
    }
  }

  return packages;
}
