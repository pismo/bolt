import React, { Component } from 'react'
import Button from '@pismo/bolt-button'

class App extends Component {
  handleClick = event => {
    console.log('Button click', event)
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        Playground
      </Button>
    )
  }
}

export default App
