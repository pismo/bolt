# Bolt Core
This is meant to make it easy to import all styles that are core to the Bolt system.

## Installation

```sh
yarn add @pismo/bolt-core
```

## Usage

### In JS
This loads every module style (colors, typography, etc) for you and make them available globally to the document, along with a few core styles from this very package:

```js
import '@pismo/bolt-core'
```

You can also name the import _if you need to_ access variables from them:

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

### In SCSS
Just import the sub-package you need inside your sass and use the variables as you want:

```scss
import '~@pismo/bolt-core/typography.scss';
import '~@pismo/bolt-core/colors.scss';

.my-custom-error-label {
  font-size: $f7;
  color: $red;
}
```

This loads everything into your .scss file as well, making all variables and styles available to be used in scss. But we strongly recommend importing each submodule independently as you need them, so you only get the variables to be reused inside scss instead of repeating styles everywhere, since you probably have already imported the core main js in your app js.

```scss
import '~@pismo/bolt-core/index.scss'
```

## Dependencies

Every module exported by this package is actually a separate package of `bolt` and can be found published to `npm`, as well as present in the `packages` folder of the Bolt multi-package monorepo.

They're all listed as `dependencies` in package.json.
