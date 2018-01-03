import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Overlay, Container } from './components'

class Modal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.any.isRequired,
  }

  static defaultProps = {
    isOpen: false,
  }

  render() {
    const { isOpen, children } = this.props

    return (
      <Overlay isOpen={isOpen}>
        <Container isOpen={isOpen}>
          {children}
        </Container>
      </Overlay>
    )
  }
}

export default Modal
