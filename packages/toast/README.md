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


## Example

To quickly make our Toast last for only 5 seconds:

`MyComponent.js`:
```js
import React, { Component } from 'react'
import Toast from '@pismo/bolt-toast'

const TOAST_DURATION = 5000

class MyComponent extends Component {
  state = {
    isToastVisible: false,
  }

  handleShowToast = event => {
    this.setState({
      isToastVisible: true,
    })

    window.setTimeout(() => {
      this.setState({
        isToastVisible: false,
      })
    }, TOAST_DURATION)
  }

  render() {
    const { isToastVisible } = this.state

    return (
      <div>
        <Toast isVisible={isToastVisible}>
          I will only last for {TOAST_DURATION / 1000} seconds.
        </Toast>
      </div>
    )
  }
}
```
