module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },
  rules: {
    // Ensure an imported module can be resolved to a module on the local filesystem, as defined by standard Node require.resolve behavior
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // Verify that all named imports are part of the set of named exports in the referenced module
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    'import/named': 'error',

    // Report if there is no default export in the imported module, when one is requested
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    'import/default': 'error',

    // Report at the import declaration if there are no exported names found
    // e.g. import * as foo from './foo'; foo.bar(); will report if bar is not exported by ./foo
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/namespace': 'error',

    // Restrict which files can be imported in a given folder
    // Developers need to be able to configure this as needed
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // Disallow import of modules using absolute paths
    // import foo from '/foo'; // not ok
    // import foo from './foo'; // ok
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // Allow require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'off',

    // Allow importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',

    // Disallow Webpack loader syntax in import statements
    // e.g. require("my-loader!./my-awesome-module");
    // Should be done in a Webpack configuration file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // Disallow a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    'import/no-self-import': 'error',

    // Disallow cyclical dependencies between modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // Forbit unnecessary path segments in import and require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],

    // Allow imports to folders in relative parent paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    'import/no-relative-parent-imports': 'off',

    // Disallow modules without any exports, or with unused exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    'import/no-unused-modules': ['error', { unusedExports: true }],

    // Disallow repeated exports of names or defaults
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/export': 'error',

    // Disallow a default import name to match a named export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'error',

    // Disallow the use of an exported name as a property on the default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'error',

    // Warn against the use of a deprecated name as indidicated by a JSDoc block with a @deprecated tag
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-deprecated': 'warn',

    // Disallow the import of external modules that are not declared in package.json
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'spec/**', // Mocha, rspec-like pattern
          '**/__tests__/**', // Jest pattern
          '**/__mocks__/**', // Jest pattern
          'test.{js,jsx}', // Repos with a single test file
          'test-*.{js,jsx}', // Repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // Tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // Jest config
          '**/jest.setup.js', // Jest setup
          '**/vue.config.js', // Vue-cli config
          '**/webpack.config.js', // Webpack config
          '**/webpack.config.*.js', // Webpack config
          '**/rollup.config.js', // Rollup config
          '**/rollup.config.*.js', // Rollup config
          '**/gulpfile.js', // Gulp config
          '**/gulpfile.*.js' // Gulp config
        ],
        optionalDependencies: false
      }
    ],

    // Disallow the use of mutable exports with var or let
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar
    // This is off for now, as it's just a proposal with TC39
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // Allow calls to require()
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // Disallow require([array], ...) and define([array], ...) function calls
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-amd': 'error',

    // Allow the use of Node.js builtin modules, e.g. fs, path
    // We enable this and projects that run Node.js should disable it
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'error',

    // Disallow any imports that come after non-import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/first': 'error',

    // Allow exports to be declared wherever, not just at the bottom of the file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    'import/exports-last': 'off',

    // Disallow resolved paths being imported more than once
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // Disallow namespace imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/no-namespace': 'error',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never'
      }
    ],

    // Ensure absolute imports are above relative imports and that unassigned imports are ignored
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      { groups: [['builtin', 'external', 'internal']] }
    ],

    // Require one new line after the last top-level import statement or require
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/newline-after-import': ['error', { count: 1 }],

    // Require modules with a single export to use a default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // Allow as many dependencies as needed
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',

    // Allow unassiged imports (useful for side-effects)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // Disallow importing the default as if it were named
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // Allow default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    'import/no-default-export': 'off',

    // Allow named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    'import/no-named-export': 'off',

    // Disallow anonymous default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'error',

    // Allow group exports to happen from anywhere in the file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    'import/group-exports': 'off',

    // Allow dynamic imports without a webpackChunkName specified in a leading block comment
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    'import/dynamic-import-chunkname': 'off'
  }
};
