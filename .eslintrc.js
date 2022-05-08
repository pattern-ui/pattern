module.exports = {
  extends: ['pattern', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'import/no-import-module-exports': 'off',
    'no-restricted-exports': 'warn',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
