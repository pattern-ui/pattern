const path = require('path')
const demoLoader = path.resolve('./demo-loader.js');

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.resolve.alias['@pattern/demos'] = path.resolve('../packages/pattern-demos/src')

  config.module.rules = [
    ...config.module.rules,
    // Recreate it with custom exclude filter
    {
      // ...rest,
      test: /\.demo(\.[^.]+)?\.tsx$/,
      use: [
        {
          loader: demoLoader
        },
      ],
      exclude: it => {
        if (it.includes('.demo.')) {
          return false;
        }
        return true;
      },
    },
  ]

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config)
}
