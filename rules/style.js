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

    // Enforce function declaration instead of function expressions
    // function foo() {} // ok
    // var foo = function() {} // not ok
    // const foo = () => {} // ok
    // https://github.com/eslint/eslint/blob/master/docs/rules/func-style.md
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],

    // Require consistent use of line breaks between arguments of a function call
    // https://github.com/eslint/eslint/blob/master/docs/rules/function-call-argument-newline.md
    'function-call-argument-newline': ['error', 'consistent'],

    // Require consistent line breaks inside parentheses of a function parameters/arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/function-paren-newline.md
    'function-paren-newline': ['error', 'consistent'],

    // Deny usage of certain identifiers, e.g. data, callback, error
    // Developers should handle this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/id-denylist.md
    'id-denylist': 'off',

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
    'multiline-ternary': ['error', 'always-multiline'],

    // Require constructor names to begin with a capital letter
    // https://github.com/eslint/eslint/blob/master/docs/rules/new-cap.md
    'new-cap': 'error',

    // Enforce the use of parentheses when invoking a constructor with no arguments
    // https://github.com/eslint/eslint/blob/master/docs/rules/new-parens.md
    'new-parens': 'error',

    // Require a new line after each call in a method chain
    // Allow 2 calls max, e.g. foo.map().filter()
    // https://github.com/eslint/eslint/blob/master/docs/rules/newline-per-chained-call.md
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],

    // Disallow Array constructors
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-array-constructor.md
    'no-array-constructor': 'error',

    // Disallow the use of bitwise operators
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-bitwise.md
    'no-bitwise': 'error',

    // Disallow the use of continue statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-continue.md
    'no-continue': 'error',

    // Allow the use of comments on the same line as code
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-inline-comments.md
    'no-inline-comments': 'off',

    // Disallow if statements as the only statement in else blocks
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-lonely-if.md
    'no-lonely-if': 'error',

    //
    'no-mixed-operators': [
      'error',
      {
        // The list of arthmetic groups disallows mixing "%" and "**" with other arithmetic operators
        // Taken from airbnb's styleguide (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js)
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||']
        ],
        allowSamePrecedence: false
      }
    ],

    // Disallow mixed spaces and tabs for indentation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-spaces-and-tabs.md
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

    // Disallow using multiple assignments within a single statement
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multi-assign.md
    'no-multi-assign': 'error',

    // Disallow multiple empty lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-multiple-empty-lines.md
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],

    // Warn against negated conditions in if statments with an else branch and ternary expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-negated-condition.md
    'no-negated-condition': 'warn',

    // Warn against using nested ternary expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-nested-ternary.md
    'no-nested-ternary': 'warn',

    // Disallow the use of the Object constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-object.md
    'no-new-object': 'error',

    // Disallow the use of unary operators (++ and --)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-plusplus.md
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    // Disallow Labels and With statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-syntax.md
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    // Disallow the use of the tab character, including indentation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-tabs.md
    'no-tabs': 'error',

    // Allow the use of ternary expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-ternary.md
    'no-ternary': 'off',

    // Disallow trailing whitespace at the end of lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-trailing-spaces.md
    'no-trailing-spaces': 'error',

    // Disallow dangling underscores in identifiers
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-underscore-dangle.md
    'no-underscore-dangle': 'error',

    // Disallow ternary operators when simpler alternatives exist
    // var foo = bar === 1 ? true : false; // not ok
    // var foo = bar === 1; // ok
    // https://github.com/eslint/eslint/tree/master/docs/rules/no-unneeded-ternary.md
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // Disallow whitespace around the dot or before the opening bracket before properties of objects if they are on the same line
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-whitespace-before-property.md
    'no-whitespace-before-property': 'error',

    // Enforce consistent location for single-line statements
    // This is off because the curly rule is on
    // https://github.com/eslint/eslint/blob/master/docs/rules/nonblock-statement-body-position.md
    'nonblock-statement-body-position': 'off',

    // Require line breaks inside curly braces
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-curly-newline.md
    'object-curly-newline': ['error', { consistent: true }],

    // Enforce consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-curly-spacing.md
    'object-curly-spacing': ['error', 'always'],

    // Ensure that property specifications appear on separate lines
    // https://github.com/eslint/eslint/blob/master/docs/rules/object-property-newline.md
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],

    // Require multiple variable declarations per scope for let and const
    // Allow multiple variable declarations per scope but requires consecutive variable declarations to be combined into a single declaration, only for var
    // https://github.com/eslint/eslint/blob/master/docs/rules/one-var.md
    'one-var': ['error', { var: 'consecutive', let: 'never', const: 'never' }],

    // Require a new line around variable declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/one-var-declaration-per-line.md
    'one-var-declaration-per-line': ['error', 'always'],

    // Require assignment operator shorthand where possible
    // https://github.com/eslint/eslint/blob/master/docs/rules/operator-assignment.md
    'operator-assignment': ['error', 'always'],

    // Require linebreaks to be placed before the operator, except for "="
    // foo = bar
    //      ? 2
    //      : 3;
    // https://github.com/eslint/eslint/blob/master/docs/rules/operator-linebreak.md
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // Disallow blank lines before and after block statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/padded-blocks.md
    'padded-blocks': ['error', 'never'],

    // Enforce a certain number of blank lines between 2 given kinds of statements
    // Developers need to configure this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/padding-line-between-statements.md
    'padding-line-between-statements': 'off',

    // Disallow the use of Math.pow in favor of the ** operator
    // Developers need to configure this if they want to
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-exponentiation-operator.md
    'prefer-exponentiation-operator': 'off',

    // Whenever possible, require object spread to Object.assign()
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-object-spread.md
    'prefer-object-spread': 'error',

    // Require quotes around object literal property names as needed
    // https://github.com/eslint/eslint/blob/master/docs/rules/quote-props.md
    'quote-props': ['error', 'as-needed'],

    // Enforce single quotes where needed
    // https://github.com/eslint/eslint/blob/master/docs/rules/quotes.md
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],

    // Require semicolons at the end of statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi.md
    semi: ['error', 'always'],

    // Require space after the semicolon and not before it
    // https://github.com/eslint/eslint/blob/master/docs/rules/semi-spacing.md
    'semi-spacing': ['error', { before: false, after: true }],

    // Enforce that semicolons are at the end of statements and not at the beginning
    // https://github.com/eslint/eslint/tree/master/docs/rules/semi-style.md
    'semi-style': ['error', 'last'],

    // Check that all property definitions for objects are sorted alphabetyically
    // No...why?!
    // https://github.com/eslint/eslint/tree/master/docs/rules/sort-keys.md
    'sort-keys': 'off',

    // Check that all variable declarations are sorted alphabetyically
    // No...why?!
    // https://github.com/eslint/eslint/blob/master/docs/rules/sort-vars.md
    'sort-vars': 'off',

    // Require that blocks always have at least one preceding space
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-blocks.md
    'space-before-blocks': ['error', 'always'],

    // Disallow a space before the function opening parenthesis, except for async functions
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-before-function-paren.md
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // Disallow spaces inside the parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-in-parens.md
    'space-in-parens': ['error', 'never'],

    // Require spaces around infix operators
    // foo+bar //not ok
    // foo + bar //ok
    // var foo = bar|0 // also ok
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-infix-ops.md
    'space-infix-ops': ['error', { int32Hint: true }],

    // Require spaces before and after unary operators, on a case by case basis
    // words are new, delete, typeof, void, yield
    // nonwords are -, +, --, ++, !, !!
    // https://github.com/eslint/eslint/blob/master/docs/rules/space-unary-ops.md
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false
      }
    ],

    // Require spaces at the beginning of the comments
    // https://github.com/eslint/eslint/blob/master/docs/rules/spaced-comment.md
    'spaced-comment': ['error', 'always'],

    // Require a space after colons in switch statements and no space before
    // https://github.com/eslint/eslint/blob/master/docs/rules/switch-colon-spacing.md
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Disallow spaces between a tag function and its template literal
    // https://github.com/eslint/eslint/blob/master/docs/rules/template-tag-spacing.md
    'template-tag-spacing': ['error', 'never'],

    // Require that files not begin with the Unicode BOM (U+FEFF)
    // https://github.com/eslint/eslint/blob/master/docs/rules/unicode-bom.md
    'unicode-bom': ['error', 'never'],

    // Require to wrap the regex to disambiguate the slash operator and facilitates more readable code
    // https://github.com/eslint/eslint/blob/master/docs/rules/wrap-regex.md
    'wrap-regex': 'error'
  }
};
