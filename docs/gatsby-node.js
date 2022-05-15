const fs = require('fs')
const path = require('path')
const demoLoader = path.resolve('../packages/pattern-demo-loader/cjs/index.js');

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + '/' + file).isDirectory();
  });
}

const PACKAGES_PATH = path.resolve('../packages');

const packages = getDirectories(PACKAGES_PATH).map(it => {
  return {
    path: path.resolve(PACKAGES_PATH, it),
    data: require(path.resolve(PACKAGES_PATH, it, 'package.json')),
  }
});

exports.onCreateWebpackConfig = ({actions, loaders, getConfig}) => {
  const config = getConfig();

  packages.forEach(pkg => {
    config.resolve.alias[pkg.data.name + '/src'] = path.resolve(`${pkg.path}`, 'src')
    config.resolve.alias[pkg.data.name] = path.resolve(`${pkg.path}`, 'src')
  })

  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.demo(\.[^.]+)?\.tsx$/,
      use: [
        {
          loader: demoLoader
        },
      ]
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}
