# eslint-config-frontwerk

![Node Version][node-version-badge] ![Npm version][npm-version-badge]
[![Npm downloads][npm-downloads-badge]][npm-downloads-badge] ![License][license-badge]

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

## Related

- If you're a TypeScript user, you might want to check out [eslint-config-frontwerk-typescript][eslint-config-frontwerk-typescript].

## Contributing

- Run tests with `npm run test` or `yarn test`.
- Run the lint with `npm run lint` or `yarn lint`.

For details, check out the [Contributing][contributing] guide.

# LICENSE

MIT

[eslint]: https://eslint.org/
[frontwerkorg]: https://frontwerk.org
[license]: https://github.com/tricinel/eslint-config-frontwerk/blob/master/LICENSE
[node-version-badge]: https://img.shields.io/node/v/eslint-config-frontwerk.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/eslint-config-frontwerk.svg?style=flat-square
[npm-version-badge]: https://img.shields.io/npm/v/eslint-config-frontwerk.svg?style=flat-square
[npm-downloads-badge]: https://img.shields.io/npm/dt/eslint-config-frontwerk.svg?style=flat-square
[contributing]: ./Contributing.md
[eslint-config-frontwerk-typescript]: https://github.com/tricinel/eslint-config-frontwerk-typescript
