# Bolt
Pismo's styleguide and design system with it's React components that compose most of the platform UI.

---

This is a monorepo using [lerna](https://lernajs.io/). Each package inside `/packages` is a completely decoupled project that should export a single component and have it's own bundle configuration and documentation scripts. They are individually published to [npm](https://www.npmjs.com/org/pismo).

You should keep in mind that they must be able to be imported both from the source file and compiled and minified build file. e.g.:

_a component's package.json_:
```json
 {
    "main": "./src/index.js",
    "publishConfig": {
      "access": "public"
    },
    "devDependencies": {
      "@pismo/eslint-config-bolt": "^X.Y.Z"
    }
 }
```

_a component's directory structure_:
```
dist/
  - index.min.js
src/
  - Component.js
  - index.js
.babelrc
package.json
README.md
```

So, by default, we are pointing to our source file but there's also the build file installed if needed.

Things that are common between all components packages:
 - .eslintrc (extends from `@pismo/eslint-config-bolt` package)
 - most scripts of each `package.json` "scripts" declaration (e.g.: `npm run doc` for documentation, we need this so we can execute a common command of each package from within the root directory using lerna exec/run)

## Usage

Each package has its own `README.md` with installation and usage guides, along with whatever information you might need to make use of them in your project.

We strongly recommend adding [normalize.css](https://necolas.github.io/normalize.css) to your project before any of the Bolt packages.

```sh
> yarn add normalize.css
```

At the top of your `index.js` file, or anywhere else that comes before importing `@pismo/bolt-{package}`.
```js
import 'normalize.css'
```

### Core

It's easier to just add the [core](https://github.com/pismo/bolt/tree/master/packages/core) package to your app so most of the common style gets set right away, then you extend your code as needed.

```sh
> yarn add @pismo/bolt-core
```

```js
import 'normalize.css'
import '@pismo/bolt-core'

import 'my-own-styles.scss'
```

## Playground (development)

Install global dependencies:

```sh
> yarn global add parcel-bundler lerna
```

Install local dependencies:

```sh
> yarn
```

Run the sandbox:

```sh
> yarn play
```

This should exec the command `npm run playground` of the `playground` package from the root directory.


## Documentation

We're using [react-docgen](https://github.com/reactjs/react-docgen) to extract all the information from the components source codes, and then generating friendly markdown from it.

To update the docs files simply run:

```sh
> yarn doc:all
```

Check the `/docs` folder for the updated `.json` and `.md` files (WIP).

**Keep in mind that this command is automatically executed along with the linting task on every commit so you don't need to constantly worry about keeping the docs up to date as you develop any package.**


## Distribution

First, make sure you are signed in to npm and is a team member of `@pismo:developers`.

```sh
> npm login
```

Then, simply run:

```sh
> lerna publish
```

Follow the steps, choose the proper version to be published and lerna will publish every package for you.
