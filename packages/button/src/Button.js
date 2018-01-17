import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as sizeStyles from './sizes'
import * as weightStyles from './weights'
import * as stateStyles from './states'

const supportedSizes = Object.keys(sizeStyles)
const supportedWeights = Object.keys(weightStyles)

const StyledButton = styled.button`
  width: ${props => props.block ? '100%' : 'auto'};
  box-sizing: border-box;
  cursor: pointer;
  ${props => sizeStyles[props.size]}
  ${props => weightStyles[props.weight]}
  ${props => props.disabled ? stateStyles['disabled'] : ''}
`

/**
 * One button to rule them all.
 */
class Button extends Component {
  static propTypes = {
    /** 'small', 'medium', 'large' */
    size: PropTypes.oneOf(supportedSizes),
    /** block mode sets `display: block` and max width, useful for modal footers for example */
    block: PropTypes.bool,
    /** 'normal', 'primary' */
    weight: PropTypes.oneOf(supportedWeights),
    /** returns the actual `ref` of the inner `<button />` */
    innerRef: PropTypes.func,
  }

  static defaultProps = {
    size: 'medium',
    block: false,
    weight: 'normal',
    innerRef: Function.prototype,
  }

  render() {
    const { children, ...otherProps } = this.props

    return (
      <StyledButton {...otherProps}>
        {children}
      </StyledButton>
    )
  }
}

export default Button
