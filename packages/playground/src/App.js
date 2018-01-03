import React, { Component } from 'react'
import Button from '@pismo/bolt-button'

class App extends Component {
  handleClick = event => {
    console.log('Button click', event)
  }

  handleRef = ref => {
    console.log('the ref is real', ref)
  }

  render() {
    return (
      <Button onClick={this.handleClick} innerRef={this.handleRef}>
        Playground
      </Button>
    )
  }
}

export default App
