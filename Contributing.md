**First off: thanks! Open source software (and thus all software) exists because of people like you. <3**

# Why another eslint-config?

There are plenty of good eslint configs out there, such as [Airbnb](npmjs.com/package/eslint-config-airbnb-base), [Google](npmjs.com/package/eslint-config-google) or [Algolia](npmjs.com/package/eslint-config-algolia). So why write another one? This came about because I wanted to learn about how ESLint works and all the different rules. Sure, you can use one of the predefined configs or the recommended one from eslint. They're all great and it's highly likely that's all you'll need! I've been using Airbnb's config myself and I rarely had to overwrite anything. But with every error or warning in my code, I was always ending up on the [eslint website](https://eslint.org/), reading about the error and figuring out if I should ignore it, or overwrite it, or fix it. By looking at all the available rules, I forced myself to understand each and make my own decision for whether it makes sense for me.

In the end, the only rule for an eslint-config is to pick one and stick to it. This is mine! :)

## Filing issues

Please [check the existing issues](https://github.com/tricinel/eslint-config-frontwerk/issues) to make sure your issue hasn't already been filed.

If you have a bug to report, please file it.

If you'd like to see a feature implemented, you can file an issue, but help is always appreciated.

If you'd like to contribute to the config, it's as simple as opening a pull request on GitHub for this repo. After that, I will code review your work and either ask you to fix any errors or merge the code into master. Here are a few tips to ensure the process goes smoothly:

- If you make substantial changes to the rules, consider adding a test case
- Do your work in a feature branch in order to keep things clean and easy
- Run `yarn lint` and `yarn test` before you commit
