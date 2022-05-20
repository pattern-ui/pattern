module.exports = {
  extends: ['pattern', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'import/no-import-module-exports': 'off',
    'no-restricted-exports': 'warn',
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@pattern-ui/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'builtin'],
      },
    ],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
