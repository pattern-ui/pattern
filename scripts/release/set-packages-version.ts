import path from 'path';
import fs from 'fs-extra';

async function writeVersionToPackageJson(filePath: string, version: string) {
  const current = await fs.readJSON(filePath);
  current.version = version;

  if (current.peerDependencies) {
    Object.keys(current.peerDependencies).forEach((packageName) => {
      if (packageName.includes('@pattern/')) {
        current.peerDependencies[packageName] = version;
      }
    });
  }

  if (current.dependencies) {
    Object.keys(current.dependencies).forEach((packageName) => {
      if (packageName.includes('@pattern/')) {
        current.dependencies[packageName] = version;
      }
    });
  }

  await fs.writeJSON(filePath, current, { spaces: 2 });
}

export async function setPackagesVersion(version: string) {
  const pkg = path.join(__dirname, '../../packages');

  const folders = (await fs.readdir(pkg)).filter((folder) =>
    fs.pathExistsSync(path.join(pkg, folder, '/package.json'))
  );

  await Promise.all(
    folders.map((folder) =>
      writeVersionToPackageJson(path.join(pkg, folder, '/package.json'), version)
    )
  );

  await writeVersionToPackageJson(path.join(__dirname, '../../package.json'), version);
}
