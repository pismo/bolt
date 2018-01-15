import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OuterContainer, Overlay, InnerContainer } from './components'
import { setDocumentOverflow } from './utils'

class Modal extends Component {
  static propTypes = {
    /** controls whether it's open or closed on the screen */
    isOpen: PropTypes.bool,
    /** anything you want rendered inside */
    children: PropTypes.any.isRequired,
    /** should disable page scrolling when open? */
    controlOverflow: PropTypes.bool,
  }

  static defaultProps = {
    isOpen: false,
    controlOverflow: true,
  }

  componentDidUpdate(prevProps) {
    const { isOpen: wasOpen } = prevProps
    const { isOpen } = this.props

    if (!wasOpen && isOpen) {
      setDocumentOverflow('hidden')
    }

    if (wasOpen && !isOpen) {
      setDocumentOverflow('auto')
    }
  }

  render() {
    const { isOpen, children } = this.props

    return (
      <OuterContainer isOpen={isOpen}>
        <Overlay isOpen={isOpen} />

        <InnerContainer isOpen={isOpen}>
          {children}
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default Modal
