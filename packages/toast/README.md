# Bolt Toast

## Installation
```sh
> yarn add @pismo/bolt-toast
```

## Usage
```js
import Toast from '@pismo/bolt-toast'
```

### Props
Prop | Type | Description | Required | Default
--- | :---: | --- | :---: | :---:
**isVisible** | bool | whether the toast is visible on the screen or not, animation is based on this flag | false | false
**children** | union | contents, e.g.: <FormattedMessage id="test" /> or simply "test" | false | –
**error** | bool | if it should have a dangerous color scheme | false | false
**innerRef** | func | the actual ref prop from the inner <div /> | false | Function.prototype
**onDismiss** | func | user asked to dismiss the toast; clicked on it (click event) | false | –
**customIcon** | union | – | false | –
