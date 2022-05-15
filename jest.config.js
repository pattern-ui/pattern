module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./config/jest/jsdom.mocks.js'],
  moduleNameMapper: {
    '@pattern-ui/([^/]+)/src/(.*)$': '<rootDir>/packages/pattern-$1/src/$2',
    '@pattern-ui/(.*)$': '<rootDir>/packages/pattern-$1/src',
  },
  testTimeout: 20000,
};
