/* eslint-disable no-param-reassign */
const path = require('path');
const { argv } = require('yargs');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin').default;
const demoLoader = path.resolve('./packages/pattern-demo-loader/cjs/index.js');

const storiesPath = !argv._[0]
  ? path.resolve(__dirname, '../../packages/**/*.story.@(ts|tsx)').replace(/\\/g, '/')
  : path
      .resolve(
        __dirname,
        `../../packages/pattern-${argv._[0].replace('@pattern-ui/', '')}/**/*.story.@(ts|tsx)`
      )
      .replace(/\\/g, '/');

module.exports = {
  stories: [storiesPath],
  addons: [
    'storybook-addon-turbo-build',
    'storybook-dark-mode',
    'storybook-addon-outline',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    };

    config.resolve.alias['@pattern-ui/demos'] = path.resolve('../packages/pattern-demos/src');

    config.module.rules.push({
      test: /\.demo(\.[^.]+)?\.tsx$/,
      use: [
        {
          loader: demoLoader
        },
      ]
    },)

    // Turn off docgen plugin as it breaks bundle with displayName
    config.plugins.pop();

    return config;
  },
};
