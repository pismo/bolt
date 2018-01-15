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
**to** | string | same `to` prop of react-router-dom's Link, check their docs for the others as well | true | –
**size** | enum | 'small', 'medium', 'large' | false | 'medium'
**weight** | enum | 'normal' | false | 'normal'
**innerRef** | func | returns the actual `ref` of the inner `<a />` | false | Function.prototype
