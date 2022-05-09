const path = require('path')
const demoLoader = path.resolve('../packages/pattern-demo-loader/cjs/index.js');

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig()

  config.resolve.alias['@pattern-ui/core'] = path.resolve('../packages/pattern-core/src')
  config.resolve.alias['@pattern-ui/demos'] = path.resolve('../packages/pattern-demos/src')

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
