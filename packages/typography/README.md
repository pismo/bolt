# Bolt Typography

## Installation

```sh
> yarn add @pismo/bolt-typography
```

## Usage

### CSS-in-JS

If you are have a `sass-loader` prepared to import `.scss` files from your `node_modules` and want to apply the global stylesheet that this package offers, simply import it, once, directly inside your JavaScript and let your bundler do the work for you:

`MyApp/index.js`:
```js
import '@pismo/bolt-typography'
```

### Using the variables inside your own SCSS/SASS

In this case you just need to import the specific file that contains the variables you want to reuse in your `.scss`.

`MyApp/style.scss`:
```scss
@import '~@pismo/bolt-typography/font-sizes';

.my-class {
  font-size: $f1;
}
```

e.g.: We're using the `$f1` variable from the file `font-sizes.scss` of `@pismo/bolt-typography`.
