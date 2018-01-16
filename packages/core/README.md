# Bolt Core
This is meant to make it easy to import all styles that are core to the Bolt system.

## Installation

```sh
yarn add @pismo/bolt-core
```

## Usage

This loads every module style (colors, typography, etc) for you and make them available globally to the document, along with a few core styles from this very package:

```js
import 'normalize.css'
import '@pismo/bolt-core'
```

You can also name the import if you need to access variables from them:

```js
import styleguide from '@pismo/bolt-core'

const styleExample = {
  fontSize: styleguide.typography.f1,
  color: styleguide.colors.blue,
}
```

Or just the ones you need at the moment:

```js
import { colors, typography } from '@pismo/bolt-core'

const styleExample = {
  fontSize: typography.f1,
  color: colors.blue,
}
```

## Dependencies

Every module exported by this package is actually a separate package of `bolt` and can be found published to `npm`, as well as present in the `packages` folder of the Bolt multi-package monorepo.

They're all listed as `dependencies` in package.json.
