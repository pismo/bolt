import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '@pismo/bolt-colors'
import typography from '@pismo/bolt-typography'
import MdCheckCircle from 'react-icons/lib/md/check-circle'
import MdError from 'react-icons/lib/md/error'
import { isFn } from './utils'

const bubbleHeight = 5.25

const ToastBubble = styled.div`
  z-index: 9999;
  position: fixed;
  display: flex;
  align-items: center;
  width: 30rem;
  height: ${bubbleHeight}rem;
  bottom: ${props => props.isVisible ? '1' : '-2'}rem;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
  font-weight: normal;
  border-radius: 4.5rem;
  cursor: ${props => props.isClickable ? 'pointer' : 'auto'};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  background-color: ${props => props.error ? colors.red : colors.gray800};
  opacity: ${props => props.isVisible ? '1' : '0'};
  box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.25);
  transition: all 200ms ease-in-out;
`
const symbolWidth = parseInt(typography.f2.replace(/\s/g, '')) + (1.25 * 2)
const rightPadding = 1.25 * 4

const ToastSymbol = styled.span`
  font-size: ${typography.f1};
  color: white;
  padding: 0 2.5rem 0 1rem;
  margin-top: -${typography.f7};
`

const ToastMessage = styled.span`
  font-size: ${typography.f6};
  max-width: ${30 - symbolWidth - rightPadding}rem;
  max-height: ${bubbleHeight - 1.25}rem;
  color: white;
  overflow: hidden;
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
    customIcon: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func,
    ]),
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
    const { isVisible, customIcon, error, onDismiss, children, ...otherProps } = this.props
    const isClickable = isFn(onDismiss)

    return (
      <ToastBubble
        isVisible={isVisible}
        error={error}
        onClick={this.handleClick}
        isClickable={isClickable}
        {...otherProps}
      >
        <ToastSymbol>{customIcon || error ? <MdError /> : <MdCheckCircle />}</ToastSymbol>
        <ToastMessage>{children}</ToastMessage>
      </ToastBubble>
    )
  }
}

export default Toast
