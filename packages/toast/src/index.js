import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '@pismo/bolt-colors'

const ToastBubble = styled.div`
  opacity: ${props => props.isVisible ? '1' : '0'};
  border-radius: 100%;
  background-color: ${colors.darkBlue};
  transition: opacity 600ms ease-in-out;
`

class Toast extends Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.string,
  }

  static defaultProps = {
    isVisible: false,
  }

  constructor(props) {
    super(props)
    this.timeout = null
  }

  startCountdown = () => {
    this.timeout = window.setTimeout(this.hide)
  }

  componentDidUpdate(prevProps) {
    const { isVisible: wasVisible, children: previousMessage } = prevProps
    const { isVisible, children: currentMessage } = this.props

    /* Became visible */
    if (!wasVisible && isVisible) {
      this.startCountdown()
    }

    /* Updated but still visible */
    if (wasVisible && isVisible && (previousMessage !== currentMessage)) {
      this.renewCountdown()
    }

    /* Became hidden */
    // if (wasOpen && !isOpen) {
    // }
  }

  render() {
    const { isVisible, children } = this.props

    return (
      <ToastBubble>
        {children}
      </ToastBubble>
    )
  }
}

export default Toast
