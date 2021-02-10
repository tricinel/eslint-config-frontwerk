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

    // Enforce default cases in switch statements to be last
    // https://github.com/eslint/eslint/blob/master/docs/rules/default-case-last.md
    'default-case-last': 'error',

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

    // Prefer accessoir pairs in object literals and classes to be defined adjacent to each other
    // The getter should come first, followed by the setter, if both are declared
    // https://github.com/eslint/eslint/blob/master/docs/rules/grouped-accessor-pairs.md
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],

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

    // Disallow returning a value in the constructor
    // You can still use return for flow control
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-constructor-return.md
    'no-constructor-return': 'error',

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
    'no-multi-str': 'error',

    // Disallow constructor calls using the "new" keyword that do not assign the resulting object to a variable
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new.md
    'no-new': 'error',

    // Disallow creating functions using the Function constructor, e.g. new Function(...)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-func.md
    'no-new-func': 'error',

    // Disallow the use of String, Number, and Boolean with the new operator, e.g. new String('foo') or new Number(42)
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-wrappers.md
    'no-new-wrappers': 'error',

    // Disallow \8 and \9 escape sequences in string literals
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-nonoctal-decimal-escape.md
    'no-nonoctal-decimal-escape': 'error',

    // Disallow the use of octal literals
    // Octal literals are numerals that begin with a leading zero, such as let x = 071; // 57
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-octal.md
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals, because they are deprecated
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-octal-escape.md
    'no-octal-escape': 'error',

    // Disallow modifying or reassigning function parameters
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-param-reassign.md
    'no-param-reassign': ['error', { props: true }],

    // Disallow accessing and/or changing the __proto__ property (deprecated)
    // Use Object.getPrototypeOf or Object.setPrototypeOf instead
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-proto.md
    'no-proto': 'error',

    // Disallow variables that have multiple declarations in the same scope
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-redeclare.md
    'no-redeclare': 'error',

    // Disallow certain properties on objects
    // I will trust Airbnb's guide here (https://eslint.org/docs/rules/no-restricted-properties)
    // https://eslint.org/docs/rules/no-restricted-properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],

    // Disallow assignments in a return statement, e.g. return foo = bar + 1;
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-return-assign.md
    'no-return-assign': ['error', 'always'],

    // Disallow returning await; e.g. return await foo();
    'no-return-await': 'error',

    // Disallow javascript in hrefs, e.g. location.href = 'javascript:void(0)';
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-script-url.md
    'no-script-url': 'error',

    // No need to assign a variable to itself, e.g. foo = foo;
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-self-assign.md
    'no-self-assign': 'error',

    // No need to compare a variable with itself, e.g. if (foo === foo) {}
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-self-compare.md
    'no-self-compare': 'error',

    // Disallow the use of the comma operator, e.g. foo = bar, baz;
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-sequences.md
    'no-sequences': 'error',

    // Disallow throwing literals and other expressions which are not an Error object
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-throw-literal.md
    'no-throw-literal': 'error',

    // Warn against variables not being modified in a loop
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unmodified-loop-condition.md
    'no-unmodified-loop-condition': 'warn',

    // Disallow an unused expression which has no effect on the state of the program
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-expressions.md
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true, // For example a && b()
        allowTernary: true, // For example  a ? b() : c(),
        allowTaggedTemplates: true // For example  tag`some string`
      }
    ],

    // Disallow unused labels
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-labels.md
    'no-unused-labels': 'error',

    // Disallow usage of Function.prototype.call() and Function.prototype.apply() that can be replaced with the normal function invocation
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-call.md
    'no-useless-call': 'error',

    // Disallow catch clauses that only throw the caught error
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-catch.md
    'no-useless-catch': 'error',

    // Disallow the concatenation of 2 literals when they could be combined into a single literal
    // e.g. var foo = 'some' + ' string'; could just be var foo = 'some string';
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-concat.md
    'no-useless-concat': 'error',

    // Disallow escapes that can be safely removed without changing behavior
    // e.g. let foo = 'hol\a'; // foo = 'hola'
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-escape.md
    'no-useless-escape': 'error',

    // Disallow redundant return statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-useless-return.md
    'no-useless-return': 'error',

    // Don't use the void operator
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-void.md
    'no-void': 'error',

    // Warn against comments that include any of the predefined terms
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-warning-comments.md
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme'], location: 'start' }
    ],

    // Disallow with statements
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-with.md
    'no-with': 'error',

    // Disallow using numbered capture groups instead of named capture groups in regular expressions
    // I would leave this in, because why not?
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-named-capture-group.md
    'prefer-named-capture-group': 'off',

    // Ensure that Promises are only rejected with Error objects
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-promise-reject-errors.md
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // Disallow the use of RegExp constructor functions with string literals as its args
    // Does not disallow the usage for dynamically generated regular expressions
    // e.g. new RegExp("abc"); // not ok
    // e.g. new RegExp(pattern); // ok
    // https://github.com/eslint/eslint/blob/master/docs/rules/prefer-regex-literals.md
    'prefer-regex-literals': 'error',

    // Always require the sometimes redundant radix (10) argument
    // https://github.com/eslint/eslint/blob/master/docs/rules/radix.md
    radix: 'error',

    // Disallow declaring an async function without using await inside it
    // We want to be able to create async functions designed to work with promises
    // https://github.com/eslint/eslint/blob/master/docs/rules/require-await.md
    'require-await': 'off',

    // Enforce the use of u flag on regular expressions
    // https://github.com/eslint/eslint/blob/master/docs/rules/require-unicode-regexp.md
    'require-unicode-regexp': 'off',

    // Enforce keeping variable declarations at the top
    // https://github.com/eslint/eslint/blob/master/docs/rules/vars-on-top.md
    'vars-on-top': 'error',

    // Require all immediately-invoked function expressions to be wrapped in parentheses
    // https://github.com/eslint/eslint/blob/master/docs/rules/wrap-iife.md
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // Compare a literal to a variable you must not
    // https://github.com/eslint/eslint/blob/master/docs/rules/yoda.md
    yoda: 'error'
  }
};
