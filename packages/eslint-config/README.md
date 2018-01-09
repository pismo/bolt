# Pismo Bolt eslint config
Pismo Bolt's eslint shareable configuration.

## Installation

```sh
> yarn add @pismo/eslint-config-bolt --dev
```

Then, in your `.eslintrc`:

```json
{
  "extends": "@pismo/eslint-config-bolt"
}
```

## Auto linting

You can use [husky](https://github.com/typicode/husky) along with [lint-staged](https://github.com/okonet/lint-staged) and [eslint](https://github.com/eslint/eslint) to set up a `precommit` hook that runs eslint to automatically fix all linting-related issues.

```sh
> yarn add husky lint-staged eslint --dev
```

`package.json` file:
```json
  "scripts": {
    "lint": "node_modules/.bin/eslint --fix",
    "precommit": "lint-staged"
  }
```

`.lintstagedrc` file:
```json
{
  "*.js": ["yarn lint", "git add"]
}
```

That's it. It should automatically format all .js files you `git add` and try to `git commit`, then add them back for you.
