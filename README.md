# Bolt
Pismo's styleguide and design system with it's React components that compose most of the platform UI.

---

This is a monorepo using [lerna](https://lernajs.io/). Each package inside `/packages` is a completely decoupled project that should export a single component and have it's own bundle configuration and documentation scripts. They are individually published to [npm](https://www.npmjs.com/org/pismo).

You should keep in mind that they must be able to be imported both from the source file and compiled and minified build file. e.g.:

_a component's package.json_:
```json
 {
   "main": "./src/index.js"
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
.eslintrc
package.json
README.md
```

So, by the default, we are pointing to our source file but there's also the distribution files installed if needed.

Things that are common between all components packages:
 - .babelrc
 - .eslintrc
 - most scripts of each `package.json` "scripts" declaration (e.g.: `npm run doc` for documentation)


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
> yarn doc
```

Check the `/docs` folder for the updated `.json` and `.md` files (WIP).
