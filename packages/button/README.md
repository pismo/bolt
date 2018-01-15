# Bolt Button
One button to rule them all.

---

## Installation
```sh
> yarn add @pismo/bolt-button
```

## Usage
```js
import Button from '@pismo/bolt-button'
```

### Props
Prop | Type | Description | Required | Default
--- | :---: | --- | :---: | :---:
**size** | enum | 'small', 'medium', 'large' | false | 'medium'
**block** | bool | block mode sets `display: block` and max width, useful for modal footers for example | false | false
**weight** | enum | 'normal', 'primary' | false | 'normal'
**innerRef** | func | returns the actual `ref` of the inner `<button />` | false | Function.prototype
