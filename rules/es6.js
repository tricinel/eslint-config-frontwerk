module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    // No need for curly braces around certain arrow functions body
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-body-style.md
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],

    // Enforce parentheses around arrow function parameters regardless of arity
    // parentheses around arrow function parameters regardless of arity
    'arrow-parens': 'error',

    // Enforce spaces before and after an arrow function's arrow
    // https://github.com/eslint/eslint/blob/master/docs/rules/arrow-spacing.md
    'arrow-spacing': 'error',

    // Make sure constructors correctly call super() only if they are part of derived classes
    // https://github.com/eslint/eslint/blob/master/docs/rules/constructor-super.md
    'constructor-super': 'error',

    // Make sure generator functions have a space between the star and the name of the function, and no star between the keyword function and the star
    // e.g. function* foo()
    // https://github.com/eslint/eslint/blob/master/docs/rules/generator-star-spacing.md
    'generator-star-spacing': ['error', { before: false, after: true }],

    // Disallow modifying variables of class declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-class-assign.md
    'no-class-assign': 'error',

    // Warn against using the arrow function syntax in places where it could be confused with a comparison operator
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-confusing-arrow.md
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // Disallow modifying variables that are declared using const keyword
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-const-assign.md
    'no-const-assign': 'error',

    // Disallow the use of duplicate names in class members
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-dupe-class-members.md
    'no-dupe-class-members': 'error',

    // Require that all imports from a single module exists in a single import statement
    // This is disabled because it's handled with eslint-plugin-import (https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-duplicate-imports.md
    'no-duplicate-imports': 'off',

    // Disallow calling Symbol with the new operator
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-symbol.md
    'no-new-symbol': 'error',

    // Disallow importing certain modules
    // We need to leave this for each developer to decide
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-imports.md
    'no-restricted-imports': 'off',

    // Don't use the "this" keyword before calling super() in a constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-this-before-super.md
    'no-this-before-super': 'error',

    // Disallow unnecessary usage of computed property keys
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-computed-key.md
    'no-useless-computed-key': 'error',

    // Disallow class constructors that can be safely removed without changing how the class works
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'error',

    // Disallows the renaming of import, export, and destructured assignments to the same name
    // e.g. import { foo as foo } from 'foo';
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-rename.md
    'no-useless-rename': 'error',

    // Disallow the use of var instead of const or let
    // This really is a matter of preference, if you understand how scoping works
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-var.md
    'no-var': 'warn',

    // Enforce the use of the shorthand syntax when defining object literal methods and properties
    // e.g. let foo = { x: x } is the same as let foo = { x }
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-shorthand.md
    'object-shorthand': [
      'error',
      'always',
      { avoidQuotes: true, avoidExplicitReturnArrows: true }
    ],

    // Encourage usage of arrow functions for function expressions used as callbacks or function arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-arrow-callback.md
    'prefer-arrow-callback': 'error',

    // Flag variables that are declared using let keyword, but never reassigned after the initial assignment
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-const.md
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    // Enforce destructuring from arrays and objects
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-destructuring.md
    'prefer-destructuring': 'error',

    // Disallow parseInt() in favor of binary, octal, and hexadecimal literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-numeric-literals.md
    'prefer-numeric-literals': 'error',

    // Disallow the usage of the "arguments" variables in favor of destructuring
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-rest-params.md
    'prefer-rest-params': 'error',

    // Disallow the usage of Function.prototype.apply() in favor of the spread syntax
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-spread.md
    'prefer-spread': 'error',

    // Disallow the usage of "+" operators with strings in favor of template literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-template.md
    'prefer-template': 'error',

    // Disallow using generator functions that do not have the yield keyword
    // https://github.com/eslint/eslint/blob/master/docs/rules/require-yield.md
    'require-yield': 'error',

    // Make sure rest and spread operators have no space between them and their expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/rest-spread-spacing.md
    'rest-spread-spacing': ['error', 'never'],

    // Check all import declarations and sort them properly
    // Let's not worry about how imports are ordered, ok?
    // https://github.com/eslint/eslint/blob/master/docs/rules/sort-imports.md
    'sort-imports': 'off',

    // Require a description when creating symbols
    // https://github.com/eslint/eslint/blob/master/docs/rules/symbol-description.md
    'symbol-description': 'error',

    // Disallow spacing inside of template literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/template-curly-spacing.md
    'template-curly-spacing': ['error', 'never'],

    // Make sure yields have a space between the star and the argument, and not between the star and the keyword yield
    // e.g. yield* foo();
    // https://github.com/eslint/eslint/blob/master/docs/rules/yield-star-spacing.md
    'yield-star-spacing': ['error', 'after']
  }
};
