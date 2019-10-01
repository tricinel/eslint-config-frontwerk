const confusingBrowserGlobals = require('confusing-browser-globals');

module.exports = {
  rules: {
    // Variables don't need to be initialised at definition
    // https://github.com/eslint/eslint/blob/master/docs/rules/init-declarations.md
    'init-declarations': 'off',

    // Disallow the use of the delete operator on variables
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-delete-var.md
    'no-delete-var': 'error',

    // Disallow the creation of a label that shares a name with a variable that is in scope
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-label-var.md
    'no-label-var': 'error',

    // Disallow specific global variables likely used without intent, such as "event"
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-globals.md
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals)
  }
};
