module.exports = {
  extends: [
    './rules/errors',
    './rules/best-practices',
    './rules/strict',
    './rules/variables',
    './rules/node',
    './rules/style',
    './rules/es6',
    './plugins/import'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {}
};
