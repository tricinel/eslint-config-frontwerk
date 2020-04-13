module.exports = {
  rules: {
    // Enforce "for" loop update clause moving the counter in the right direction
    // https://github.com/eslint/eslint/blob/master/docs/rules/for-direction.md
    'for-direction': 'error',

    // Property getters need to return something
    // https://github.com/eslint/eslint/blob/master/docs/rules/getter-return.md
    'getter-return': ['error', { allowImplicit: true }],

    // Disallow creating a new Promise with an async function as the executor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-async-promise-executor.md
    'no-async-promise-executor': 'error',

    // Disallow the use of await inside of loops (use Promise.all instead)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-await-in-loop.md
    'no-await-in-loop': 'error',

    // Don't compare things to negative 0
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-compare-neg-zero.md
    'no-compare-neg-zero': 'error',

    // Be careful using = instead of == or === inside of conditional statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-cond-assign.md
    'no-cond-assign': ['error', 'always'],

    // Warn against calls to methods on the console, except console.warn and console.error
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-console.md
    'no-console': ['warn', { allow: ['warn', 'error'] }],

    // Warn against using a constant expression as a test condition
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-constant-condition.md
    'no-constant-condition': ['warn', { checkLoops: false }],

    // Disallow the use of control characters in regular expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-control-regex.md
    'no-control-regex': 'error',

    // Disallow the use of debugger
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-debugger.md
    'no-debugger': 'error',

    // Disallow the use of duplicate parameter names in function declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-args.md
    'no-dupe-args': 'error',

    // Disallow two identical test conditions in the same chain
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-else-if.md
    'no-dupe-else-if': 'error',

    // Disallow the use of duplicate keys in object literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-keys.md
    'no-dupe-keys': 'error',

    // Disallow the use of duplicate test expressions in switch clauses
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-duplicate-case.md
    'no-duplicate-case': 'error',

    // Disallow empty block statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty.md
    'no-empty': 'error',

    // Disallow empty character classes in regular expressions because they do not match anything
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-empty-character-class.md
    'no-empty-character-class': 'error',

    // Disallow reassigning the exception parameter in a catch clause
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-ex-assign.md
    'no-ex-assign': 'error',

    // Disallow unnecessary boolean casts, e.g. Boolean(!!foo)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-boolean-cast.md
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-parens.md
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'multi-line',
        enforceForArrowConditionals: false
      }
    ],

    // Disallow unnecessary semicolons
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-extra-semi.md
    'no-extra-semi': 'error',

    // Disallow overwriting/reassigning a function written as a FunctionDeclaration
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-func-assign.md
    'no-func-assign': 'error',

    // Disallow re-assignments of imported bindings
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-import-assign.md
    'no-import-assign': 'error',

    // Disallow function or variable declarations inside expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-inner-declarations.md
    'no-inner-declarations': 'error',

    // Invalid strings inside RegExp constructions are only visible when the code is executed
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-invalid-regexp.md
    'no-invalid-regexp': ['error', { allowConstructorFlags: ['u', 'y'] }],

    // Disallow invalid whitespace outside of strings, comments, regexps and template literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-irregular-whitespace.md
    'no-irregular-whitespace': 'error',

    // Disallow the use of multiple code point characters in character class syntax
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-misleading-character-class.md
    'no-misleading-character-class': 'error',

    // Disallow trying to execute some global objects as functions, i.e. Math() or JSON()
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-obj-calls.md
    'no-obj-calls': 'error',

    // Disallow the direct use of Object.prototypes builtins, e.g. foo.hasOwnProperty('bar')
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-prototype-builtins.md
    'no-prototype-builtins': 'error',

    // Disallow use of multiple spaces in a regular expression
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-regex-spaces.md
    'no-regex-spaces': 'error',

    // Property setters shouldn't return anything
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-setter-return.md
    'no-setter-return': 'error',

    // Disallow sparse array literals which have "holes", e.g. [1,,2]
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-sparse-arrays.md
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-template-curly-in-string.md
    'no-template-curly-in-string': 'error',

    // Disallow confusing multiline expressions where a newline looks like it is ending a statement, but is not.
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unexpected-multiline.md
    'no-unexpected-multiline': 'error',

    // Disallow unreachable statements after a return, throw, continue, or break statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unreachable.md
    'no-unreachable': 'error',

    // Disallow the use of return, throw, break, or continue is used in finally blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-finally.md
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of Relational Operators (i.e. "in" and "instanceof")
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unsafe-negation.md
    'no-unsafe-negation': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://github.com/eslint/eslint/blob/master/docs/rules/require-atomic-updates.md
    'require-atomic-updates': 'error',

    // Disallow comparisons to "NaN", use isNaN(foo) instead
    // https://github.com/eslint/eslint/blob/master/docs/rules/use-isnan.md
    'use-isnan': ['error', { enforceForSwitchCase: true }],

    // Disallow comparing the result of a typeof operator to other string literals except "undefined", "object", "boolean", "number", "string", "function", "symbol", and "bigint"
    // https://github.com/eslint/eslint/blob/master/docs/rules/valid-typeof.md
    'valid-typeof': ['error', { requireStringLiterals: true }]
  }
};
