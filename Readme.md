# eslint-config-frontwerk

![Npm version][npm-version-badge] ![Node Version][node-version-badge]
[![Npm downloads][npm-downloads-badge]][npm-downloads] ![License][license-badge]

This package provides [Frontwerk][frontwerkorg]'s JavaScript .eslintrc (without React or Typescript) as an extensible shared [ESLint][eslint] config.

## Usage

1. Install the correct versions of each package:

```sh
npm install --dev eslint-config-frontwerk eslint-plugin-import
```

Or with **yarn**:

```sh
yarn add --dev eslint-config-frontwerk eslint-plugin-import
```

2. Add `"extends": "frontwerk"` to your `.eslintrc`.

## Contributing

- Run tests with `npm run test` or `yarn test`.
- Run the lint with `npm run lint` or `yarn lint`.

# LICENSE

MIT

[eslint]: https://eslint.org/
[frontwerkorg]: https://frontwerk.org
[license]: https://github.com/tricinel/eslint-config-frontwerk/blob/master/LICENSE
[node-version-badge]: https://img.shields.io/node/v/eslint-config-frontwerk.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/eslint-config-frontwerk.svg?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-frontwerk.svg?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/eslint-config-frontwerk.svg?style=flat-square
