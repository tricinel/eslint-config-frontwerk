module.exports = {
  env: {
    node: true
  },
  rules: {
    // Allow calling the callback multiple times without returning
    // https://github.com/eslint/eslint/blob/master/docs/rules/callback-return.md
    'callback-return': 'off',

    // Require all calls to require() to be at the top level of the module
    // https://github.com/eslint/eslint/blob/master/docs/rules/global-require.md
    'global-require': 'error',

    // Disallow using the callback pattern without handling the error
    // https://github.com/eslint/eslint/blob/master/docs/rules/handle-callback-err.md
    'handle-callback-err': ['error', '^.*(e|E)rr'],

    // Disallows calling and constructing the Buffer() constructor
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-buffer-constructor.md
    'no-buffer-constructor': 'error',

    // Disallow mixing regular variable and require declarations
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-mixed-requires.md
    'no-mixed-requires': 'off',

    // Disallow use of new operator with the require function
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-new-require.md
    'no-new-require': 'error',

    // Disallow string concatenation for creating paths, use path.join or path.resolve instead
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-path-concat.md
    'no-path-concat': 'error',

    // Warn against using process.env to avoid global dependencies
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-process-env.md
    'no-process-env': 'warn',

    // Allow usage of process.exit()
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-process-exit.md
    'no-process-exit': 'off',

    // Disallow using specific modules
    // We should leave this to the individual applications
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-restricted-modules.md
    'no-restricted-modules': 'off',

    // In some contexts, using synchronous operations is okay
    // We should leave this to the individual applications
    // https://github.com/eslint/eslint/blob/master/docs/rules/no-sync.md
    'no-sync': 'off'
  }
};
