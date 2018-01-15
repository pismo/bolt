# Bolt Button
One button to rule them all.

---

## Installation
```sh
> yarn add @pismo/bolt-link
```

## Usage
```js
import Link from '@pismo/bolt-link'
```

### Props
Prop | Type | Description | Required | Default
--- | :---: | --- | :---: | :---:
**size** | enum | 'small', 'medium', 'large' | false | 'medium'
**block** | bool | block mode sets `display: block` and max width, useful for modal footers for example | false | false
**weight** | enum | 'normal' | false | 'normal'
**innerRef** | func | returns the actual `ref` of the inner `<a />` | false | Function.prototype
