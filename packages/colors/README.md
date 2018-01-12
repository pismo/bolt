# Bolt Colors

## Installation

```sh
> yarn add @pismo/bolt-colors
```

## Usage

### CSS-in-JS

If you are have a `sass-loader` prepared to import `.scss` files from your `node_modules` and want to apply the global stylesheet that this package offers, simply import it, once, directly inside your JavaScript and let your bundler do the work for you:

`MyApp/index.js`:
```js
import '@pismo/bolt-colors'
```

You can name the import to make use of the same variables declared in the SCSS files, but in your JS:

`MyButton.js`:
```js
import colors from '@pismo/bolt-colors'

const btnStyle = {
  backgroundColor: colors.blue,
}

const MyButton = () => (
  <Button style={btnStyle}>I'm bolt blue!</Button>
)
```

### Using the variables inside your own SCSS/SASS

In this case you just need to import the specific file that contains the variables you want to reuse in your `.scss`.

`MyApp/style.scss`:
```scss
@import '~@pismo/bolt-colors';

.my-class {
  color: $blue;
  border-color: $dark-blue;
  background-color: $near-white;
}
```

e.g.: We're using the `$blue`, `$dark-blue` and `$near-white` variables of `@pismo/bolt-colors`.
Pro-tip: You can import specific color palettes, like so:

```scss
@import '~@pismo/bolt-colors/_red'
```
