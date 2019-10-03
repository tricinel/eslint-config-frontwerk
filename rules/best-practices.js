module.exports = {
  rules: {
    // Enforce both getter and setter for an Object property
    // https://github.com/eslint/eslint/blob/master/docs/rules/accessor-pairs.md
    'accessor-pairs': 'error',

    // Enforce having a return in Array methods like filter, map, reduce, etc.
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-callback-return.md
    'array-callback-return': ['error', { allowImplicit: true }],

    // Only allow variables to be used in the scope they are defined
    // https://github.com/eslint/eslint/blob/master/docs/rules/block-scoped-var.md
    'block-scoped-var': 'error',

    // Class methods should use "this" or be turned into a static function
    // https://github.com/eslint/eslint/blob/master/docs/rules/class-methods-use-this.md
    'class-methods-use-this': 'error',

    // Enforce a level of cyclomatic complexity (how many independent paths through source code)
    // I honestly just picked a reasonable number
    // https://github.com/eslint/eslint/blob/master/docs/rules/complexity.md
    complexity: ['error', 10],

    // Either always or never specify a return value in a function
    // https://github.com/eslint/eslint/blob/master/docs/rules/consistent-return.md
    'consistent-return': 'error',

    // Block statments should always be wrapped in curly braces
    // https://github.com/eslint/eslint/blob/master/docs/rules/curly.md
    curly: 'error',

    // Enforce having a default case in switch statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/default-case.md
    'default-case': ['error', { commentPattern: '^no default$' }],

    // Enforce default parameters to be the last parameters in the function definition
    // https://github.com/eslint/eslint/blob/master/docs/rules/default-param-last.md
    'default-param-last': 'error',

    // Enforce consistency of where the dot in a member expression sits
    // https://github.com/eslint/eslint/blob/master/docs/rules/dot-location.md
    'dot-location': 'error',

    // Prefer the use of the dot notation style whenever possible (e.g. foo.bar vs foo['bar'])
    // https://github.com/eslint/eslint/blob/master/docs/rules/dot-notation.md
    'dot-notation': ['error', { allowKeywords: true }],

    // Prefer the use the type-safe equality operators === instead of their regular counterparts
    // https://github.com/eslint/eslint/blob/master/docs/rules/eqeqeq.md
    eqeqeq: ['error', 'smart'],

    // Disallow not filtering the results in a "for in" loop, e.g. with hasOwnProperty
    // https://github.com/eslint/eslint/blob/master/docs/rules/guard-for-in.md
    'guard-for-in': 'error',

    // Allow defining multiple classes per file, because why not?
    // We need to trust people to be sensible
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-classes-per-file.md
    'max-classes-per-file': 'off',

    // Warn against using alert, prompt and confirm
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-alert.md
    'no-alert': 'warn',

    // Disallow use of arguments.caller or arguments.callee
    // https://github.com/eslint/eslint/tree/master/docs/rules/no-caller.md
    'no-caller': 'error',

    // Disallow lexical declarations (let, const, function and class) in case/default clauses
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-case-declarations.md
    'no-case-declarations': 'error',

    // Require regex literals to escape division operators
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-div-regex.md
    'no-div-regex': 'error',

    // Warn against an unnecessary block of code following an if containing a return statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-else-return.md
    'no-else-return': 'warn',

    // Disallow empty functions, it should at least have a comment
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-function.md
    'no-empty-function': ['error', { allow: ['arrowFunctions'] }],

    // Disallow any empty patterns in destructured objects and arrays, e.g. var {} = foo;
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-pattern.md
    'no-empty-pattern': 'error',

    // Disallow == when comparing to null to ensure that comparisons to null only match null, and not also undefined
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-eq-null.md
    'no-eq-null': 'error',

    // Disallow using eval(), because it's evil :)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-eval.md
    'no-eval': 'error',

    // Disallow extending of builtin objects
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extend-native.md
    'no-extend-native': 'error',

    // Disallow unnecessary use of bind(), e.g. when the function doesn't have an appropriate "this"
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-bind.md
    'no-extra-bind': 'error',

    // If a loop contains no nested loops or switches, labeling the loop is unnecessary
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-label.md
    'no-extra-label': 'error',

    // Eliminate unintentional fallthrough of one case to the other in a switch statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-fallthrough.md
    'no-fallthrough': ['error', { commentPattern: 'break[\\s\\w]*omitted' }],

    // Disallow whenever a numeric value has a decimal point but is missing a number either before or after it
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-floating-decimal.md
    'no-floating-decimal': 'error',

    // Disallow modifications to read-only global variables, e.g. window
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-global-assign.md
    'no-global-assign': 'error',

    // Warn against shorter notations for the type conversion, e.g. !!foo vs Boolean(foo)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-implicit-coercion.md
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: false,
        string: true
      }
    ],

    // Disallow variable and function declarations at the top level scope
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-implicit-globals.md
    'no-implicit-globals': 'off',

    // Always use a function for the first argument of setTimeout() and setInterval() (and avoid execScript())
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-implied-eval.md
    'no-implied-eval': 'error',

    // Disallow the usage of this keywords outside of classes or class-like objects
    // This rule applies only in strict mode
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-invalid-this.md
    'no-invalid-this': 'error',

    // Disallow the usage of __iterator__, and use ES6 iterators and generators instead
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-iterator.md
    'no-iterator': 'error',

    // Disallow the usage of labeled statements for loops
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-labels.md
    'no-labels': 'error',

    // Disallow the use of standalone code blocks (when not using let and const)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-lone-blocks.md
    'no-lone-blocks': 'error',

    // Disallow writing functions within loops
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-loop-func.md
    'no-loop-func': 'error',

    // "Magic numbers" are numbers that occur multiple times in code without an explicit meaning
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-magic-numbers.md
    'no-magic-numbers': [
      'off',
      {
        ignore: [1],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],

    // Disallow the usage of multiple spaces in a row, when not used for indentation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-spaces.md
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],

    // Disallow using the slash before a new line in a string
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-str.md
    'no-multi-str': 'error'
  }
};
