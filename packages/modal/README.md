# Bolt Modal

## Installation
```sh
> yarn add @pismo/bolt-modal
```

## Usage
```js
import Modal from '@pismo/bolt-modal'
```

### Props
Prop | Type | Description | Required | Default
--- | :---: | --- | :---: | :---:
**isOpen** | bool | controls whether it's open or closed on the screen | false | false
**onClose** | func | callback fired if user tried to close modal somehow | true | –
**children** | any | anything you want rendered inside | true | –
**controlOverflow** | bool | should disable page scrolling when open? | false | true
**closeIcon** | union | custom icon that closes modal on click | false | 'X'


