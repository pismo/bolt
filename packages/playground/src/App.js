import React, { Component } from 'react'
import Modal from '@pismo/bolt-modal'
import Button from '@pismo/bolt-button'

class App extends Component {
  state = {
    isModalOpen: false,
  }

  handleClick = event => {
    console.log('Button click', event)

    this.setState({
      isModalOpen: true,
    })
  }

  handleRef = ref => {
    console.log('the ref is real', ref)
  }

  render() {
    const { isModalOpen } = this.state

    return (
      <div>
        <Button onClick={this.handleClick} innerRef={this.handleRef}>
          Open modal
        </Button>

        <Modal isOpen={isModalOpen}>
          Modal contents
        </Modal>
      </div>
    )
  }
}

export default App
