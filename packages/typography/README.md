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
import '@pismo/bolt-typography/index.scss'
```

You can name the import to make use of the same variables declared in the SCSS files, but in your JS:

`MyButton.js`:
```js
import typography from '@pismo/bolt-typography'

const btnStyle = {
  fontSize: typography.f1,
  lineHeight: typography.baseLineHeight,
}

const MyButton = () => (
  <Button style={btnStyle}>Too big!</Button>
)
```

### Using the variables inside your own SCSS/SASS

In this case you just need to import the specific file that contains the variables you want to reuse in your `.scss`.

`MyApp/style.scss`:
```scss
@import '~@pismo/bolt-typography/_font-sizes';

.my-class {
  font-size: $f1;
}
```

Or import them all, I don't care

```MyApp/style.scss`:
```scss
@import '~@pismo/bolt-typography/index.scss';

.my-class {
  line-height: $baseLineHeight;
}
```

e.g.: We're using the `$f1` variable from the file `_font-sizes.scss` of `@pismo/bolt-typography`.

### Development

Edit the `.scss` files. All the JS files are generated automatically upon commit.
