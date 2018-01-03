import React, { Component } from 'react'
import Modal from '@pismo/bolt-modal'
import Button from '@pismo/bolt-button'

class App extends Component {
  state = {
    isModalOpen: false,
  }

  handleClick = event => {
    console.log('Button click', event)
  }

  handleRef = ref => {
    console.log('the ref is real', ref)
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        isModalOpen: true,
      })
    }, 1000)

    window.setInterval(() => {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      })
    }, 6000)
  }

  render() {
    const { isModalOpen } = this.state

    return (
      <Modal isOpen={isModalOpen}>
        <Button onClick={this.handleClick} innerRef={this.handleRef}>
          Playground
        </Button>
      </Modal>
    )
  }
}

export default App
