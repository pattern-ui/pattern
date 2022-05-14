const coreFolder = './packages/pattern-core/src/components';
const fs = require('fs');
const path = require('path');

const dashCase = (camel) => {
  return camel.replace(/[A-Z]/g, (match, offset) => (offset > 0 ? '-' : '') + match.toLowerCase())
};

const packageTemplate = fs.readFileSync('./.local/package.json').toString();
const readmeTemplate = fs.readFileSync('./.local/README.md').toString();
const tsconfigTemplate = fs.readFileSync('./.local/tsconfig.json').toString();
const tsconfigBuildTemplate = fs.readFileSync('./.local/tsconfig.build.json').toString();
const npmignoreTemplate = fs.readFileSync('./.local/.npmignore').toString();

// console.log('[packageTemplate]', packageTemplate);

function copyFileSync( source, target ) {

  var targetFile = target;

  // If target is a directory, a new file with the same name will be created
  if ( fs.existsSync( target ) ) {
    if ( fs.lstatSync( target ).isDirectory() ) {
      targetFile = path.join( target, path.basename( source ) );
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync( source, target ) {
  var files = [];

  // Check if folder needs to be created or integrated
  var targetFolder = path.join( target, path.basename( source ) );
  if ( !fs.existsSync( targetFolder ) ) {
    fs.mkdirSync( targetFolder );
  }

  // Copy
  if ( fs.lstatSync( source ).isDirectory() ) {
    files = fs.readdirSync( source );
    files.forEach( function ( file ) {
      var curSource = path.join( source, file );
      if ( fs.lstatSync( curSource ).isDirectory() ) {
        copyFolderRecursiveSync( curSource, targetFolder );
      } else {
        copyFileSync( curSource, targetFolder );
      }
    } );
  }
}

fs.readdir(coreFolder, (err, files) => {
  const items = files.map(file => {
    // console.log(file);
    const dashName = dashCase(file);
    return {
      name: file,
      dashName: dashName,
      source: path.resolve(coreFolder, file),
      packageFolderName: 'pattern-' + dashName,
      targetDir: path.resolve('./packages/pattern-' + dashName),
    }
  });

  // console.log('[items]', items);

  // return;

  items.some(item => {
    console.log('[fs.existsSync(item.targetDir)]', item.targetDir, fs.existsSync(item.targetDir));
    fs.rmSync(item.targetDir, { recursive: true, force: true});
    fs.mkdirSync(path.resolve(item.targetDir, 'src/components'), {recursive: true});
    copyFolderRecursiveSync(item.source, path.resolve(item.targetDir, 'src/components'));
    const packageContent = packageTemplate.replace(/<name>/g, item.dashName).replace(/<camel_name>/g, item.name);
    const readmeContent = readmeTemplate.replace(/<name>/g, item.dashName).replace(/<camel_name>/g, item.name);
    fs.writeFileSync(path.resolve(item.targetDir, 'package.json'), packageContent);
    fs.writeFileSync(path.resolve(item.targetDir, 'README.md'), readmeContent);
    fs.writeFileSync(path.resolve(item.targetDir, 'tsconfig.json'), tsconfigTemplate);
    fs.writeFileSync(path.resolve(item.targetDir, 'tsconfig.build.json'), tsconfigBuildTemplate);
    fs.writeFileSync(path.resolve(item.targetDir, '.npmignore'), npmignoreTemplate);
    fs.writeFileSync(path.resolve(item.targetDir, 'src/index.ts'), `export * from './components/${item.name}';`);
    // return true;
  })
});
