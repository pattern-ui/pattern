const fs = require('fs');

// get all package names
const packages = fs
  .readdirSync('./packages')
  // eslint-disable-next-line global-require,import/no-dynamic-require
  .map((it) => it.replace(/^pattern-/, ''));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['commitlint-plugin-function-rules'],
  rules: {
    'function-rules/scope-enum': [
      2, // level error
      'always',
      (parsed) => {
        const allowedScopes = ['*', ...packages];
        if (!parsed.scope || allowedScopes.includes(parsed.scope)) {
          return [true];
        }

        return [false, 'scope must be one of *, <package-short-name>, eg: button'];
      },
    ],
  },
};
