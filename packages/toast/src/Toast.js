import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '@pismo/bolt-colors'
import typography from '@pismo/bolt-typography'
import { isFn } from './utils'

const ToastBubble = styled.div`
  z-index: 9999;
  position: fixed;
  width: 30rem;
  bottom: 1rem;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  padding: 1.25rem 2.25rem;
  font-weight: normal;
  border-radius: 4.5rem;
  color: white;
  font-size: ${typography.f6};
  cursor: ${props => props.isClickable ? 'pointer' : 'auto'};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  background-color: ${props => props.error ? colors.red : colors.gray800};
  opacity: ${props => props.isVisible ? '1' : '0'};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
  transition: opacity 600ms ease-in-out;
`

class Toast extends Component {
  static propTypes = {
    /** whether the toast is visible on the screen or not, animation is based on this flag */
    isVisible: PropTypes.bool,
    /** contents, e.g.: <FormattedMessage id="test" /> or simply "test" */
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.func,
    ]),
    /** if it should have a dangerous color scheme */
    error: PropTypes.bool,
    /** the actual ref prop from the inner <div /> */
    innerRef: PropTypes.func,
    /** user asked to dismiss the toast; clicked on it (click event) */
    onDismiss: PropTypes.func,
  }

  static defaultProps = {
    isVisible: false,
    error: false,
    innerRef: Function.prototype,
  }

  handleClick = event => {
    const { onDismiss } = this.props

    if (!isFn(onDismiss)) {
      return false
    }

    return onDismiss(event)
  }

  render() {
    const { isVisible, children, error, onDismiss, ...otherProps } = this.props
    const isClickable = isFn(onDismiss)

    return (
      <ToastBubble
        isVisible={isVisible}
        error={error}
        onClick={this.handleClick}
        isClickable={isClickable}
        {...otherProps}
      >
        {children}
      </ToastBubble>
    )
  }
}

export default Toast
