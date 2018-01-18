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
