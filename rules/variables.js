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
    'no-restricted-globals': ['error'].concat(confusingBrowserGlobals),

    // Eliminate shadowed variable declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow.md
    'no-shadow': ['error', { builtinGlobals: true }],

    // Don't redefine restricted names like NaN, Infinity or undefined to mean something else
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-shadow-restricted-names.md
    'no-shadow-restricted-names': 'error',

    // Disallow the use of undeclared variables, unless mentioned in a /* global */ block
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undef.md
    'no-undef': 'error',

    // Variables that are declared and not initialized automatically gets the value of undefined
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undef-init.md
    'no-undef-init': 'error',

    // Don't overwrite the value of undefined
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-undefined.md
    // No need to have this rule on, since we have 'no-shadow-restricted-names' on
    'no-undefined': 'off',

    // Disallow the use of variables that are declared and not used anywhere in the code
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-vars.md
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_'
      }
    ],

    // Disallow the use of variables before they are defined
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-use-before-define.md
    'no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true }
    ]
  }
};
