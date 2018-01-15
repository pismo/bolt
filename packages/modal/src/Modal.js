import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OuterContainer, Overlay, InnerContainer, Header, Body } from './components'
import { setDocumentOverflow } from './utils'

class Modal extends Component {
  static propTypes = {
    /** controls whether it's open or closed on the screen */
    isOpen: PropTypes.bool,
    /** callback fired if user tried to close modal somehow */
    onClose: PropTypes.func.isRequired,
    /** anything you want rendered inside */
    children: PropTypes.any.isRequired,
    /** should disable page scrolling when open? */
    controlOverflow: PropTypes.bool,
    /** custom icon that closes modal on click */
    closeIcon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
  }

  static defaultProps = {
    isOpen: false,
    controlOverflow: true,
    closeIcon: 'X',
  }

  componentDidUpdate(prevProps) {
    const { isOpen: wasOpen } = prevProps
    const { isOpen, controlOverflow } = this.props

    if (controlOverflow) {
      if (!wasOpen && isOpen) {
        setDocumentOverflow('hidden')
      }

      if (wasOpen && !isOpen) {
        setDocumentOverflow('auto')
      }
    }
  }

  render() {
    const { isOpen, closeIcon, onClose, children } = this.props

    return (
      <OuterContainer isOpen={isOpen}>
        <Overlay isOpen={isOpen} />

        <InnerContainer isOpen={isOpen}>
          <Header closeIcon={closeIcon} onClose={onClose}>Modal Title Test</Header>
          <Body>{children}</Body>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default Modal
