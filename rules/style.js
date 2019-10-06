module.exports = {
  rules: {
    // Require consistent usage of linebreaks for each pair of brackets
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-newline.md
    'array-bracket-newline': ['error', 'consistent'],

    // Disallow spaces inside array brackets
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-bracket-spacing.md
    'array-bracket-spacing': ['error', 'never'],

    // Require consistent usage of new lines inside array elements
    // https://github.com/eslint/eslint/blob/master/docs/rules/array-element-newline.md
    'array-element-newline': ['error', 'consistent'],

    // Enforce consistent spacing inside an open block token and the next token on the same line
    // https://github.com/eslint/eslint/blob/master/docs/rules/block-spacing.md
    'block-spacing': 'error',

    // Enforce the one true brace style (1tbs)
    // https://github.com/eslint/eslint/blob/master/docs/rules/brace-style.md
    'brace-style': ['error', '1tbs'],

    // Enforce naming of variables and properties to be camelCased
    // https://github.com/eslint/eslint/blob/master/docs/rules/camelcase.md
    camelcase: 'error',

    // Enforce consistent style of comments by requiring a capitalized letter on the first word of the first comment
    // https://github.com/eslint/eslint/blob/master/docs/rules/capitalized-comments.md
    'capitalized-comments': [
      'warn',
      'always',
      {
        ignorePattern: 'pragma',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      }
    ],

    // Require traling commas when the last element or property is on a different line than the closing bracket or curly
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-dangle.md
    'comma-dangle': ['error', 'always-multiline'],

    // Require a space after a comma and not before it, in variable declarations, array/object literals, function parameters, etc.
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-spacing.md
    'comma-spacing': ['error', { before: false, after: true }],

    // Require a comma after and on the same line as an array element, object property or variable declaration
    // https://github.com/eslint/eslint/blob/master/docs/rules/comma-style.md
    'comma-style': ['error', 'last'],

    // Disallow spacing inside computed property brackets
    // e.g. foo[ bar ] vs foo[bar]
    // https://github.com/eslint/eslint/blob/master/docs/rules/computed-property-spacing.md
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent use of this, e.g. var that = this;
    // We need to leave this to the developers to figure out, plus it doesn't work with any nested context
    // https://github.com/eslint/eslint/blob/master/docs/rules/consistent-this.md
    'consistent-this': 'off',

    // Require exactly one new line at the end of the file
    // https://github.com/eslint/eslint/blob/master/docs/rules/eol-last.md
    'eol-last': ['error', 'always'],

    // Disallow whitespace between the function's name and the parentheses that invoke it
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-call-spacing.md
    'func-call-spacing': ['error', 'never'],

    // Require function names to match the name of the variable or property to which they are assigned
    // e.g. var foo = function bar() vs var foo = function foo()
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-name-matching.md
    'func-name-matching': 'error',

    // Require named function expressions to aid in the stack trace
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-names.md
    'func-names': ['error', 'as-needed'],

    // Enforce function expressions instead of function declarations
    // function foo() {} // not ok
    // var foo = function() {} // ok
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-style.md
    'func-style': ['error', 'expression'],

    // Require consistent use of line breaks between arguments of a function call
    // https://github.com/eslint/eslint/blob/master/docs/rules/function-call-argument-newline.md
    'function-call-argument-newline': ['error', 'consistent'],

    // Require consistent line breaks inside parentheses of a function parameters/arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/function-paren-newline.md
    'function-paren-newline': ['error', 'consistent'],

    // Blacklist certain identifiers, e.g. data, callback, error
    // Developers should handle this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/id-blacklist.md
    'id-blacklist': 'off',

    // Enforce a minimum and/or maximum identifier length convention
    // Developers should handle this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/id-length.md
    'id-length': 'off',

    // Require identifiers in assignments and function definitions to match a specified regular expression
    // Developers should handle this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/id-match.md
    'id-match': 'off',

    // Enforce placing the arrow function containing an implicit return
    // https://github.com/eslint/eslint/blob/master/docs/rules/implicit-arrow-linebreak.md
    'implicit-arrow-linebreak': ['error', 'beside'],

    // Set a specific tab width
    // Prettier will do a better job at enforcing this
    // https://github.com/eslint/eslint/blob/master/docs/rules/indent.md
    indent: ['error', 2],

    // Prefer double quotes in JSX attributes
    // https://github.com/eslint/eslint/blob/master/docs/rules/jsx-quotes.md
    'jsx-quotes': ['error', 'prefer-double'],

    // Enforce spacing after and not before the colon in object literal properties
    // https://github.com/eslint/eslint/blob/master/docs/rules/key-spacing.md
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // Enforce consistent spacing around keywords and keyword-like tokens
    // https://github.com/eslint/eslint/blob/master/docs/rules/keyword-spacing.md
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],

    // Enforce the position of line comments
    // Don't particularly care where they are, so let's ignore
    // https://github.com/eslint/eslint/blob/master/docs/rules/line-comment-position.md
    'line-comment-position': 'off',

    // Disallow mixed "LF" and "CRLF" as line breaks
    // https://github.com/eslint/eslint/blob/master/docs/rules/linebreak-style.md
    'linebreak-style': ['error', 'unix'],

    // Enforce empty lines around comments
    // Don't particularly care about this, so let's ignore it
    // https://github.com/eslint/eslint/blob/master/docs/rules/lines-around-comment.md
    'lines-around-comment': 'off',

    // Always require an empty line between class members
    // https://github.com/eslint/eslint/blob/master/docs/rules/lines-between-class-members.md
    'lines-between-class-members': ['error', 'always'],

    // Warn against nested code blocks above 4 levels deep
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-depth.md
    'max-depth': ['warn', 4],

    // Specify the maximum line length
    // Prettier will overwrite this
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-len.md
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    // Enforce a maximum number of lines per file
    // Uhm, no
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-lines.md
    'max-lines': 'off',

    // Enforce a maximum number of lines per function
    // Uhm, no
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-lines-per-function.md
    'max-lines-per-function': 'off',

    // Warn against nested callback blocks above 4 levels deep
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-nested-callbacks.md
    'max-nested-callbacks': ['warn', 4],

    // Warn against functions that use more than 4 parameters, use an object instead
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-params.md
    'max-params': ['warn', 4],

    // Enforce a maximum number of statements in a function block
    // Uhm, no...why?
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-statements.md
    'max-statements': 'off',

    // Warn when the number of statements per line goes above the maximum
    // https://github.com/eslint/eslint/blob/master/docs/rules/max-statements-per-line.md
    'max-statements-per-line': ['warn', { max: 3 }],

    // Enforce a particular style for multiline comments
    // https://github.com/eslint/eslint/blob/master/docs/rules/multiline-comment-style.md
    'multiline-comment-style': 'off',

    // Enforce newlines between the operands of a ternary expression only if the expression spans multiple lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/multiline-ternary.md
    'multiline-ternary': ['error', 'always-multiline']
  }
};
