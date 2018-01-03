import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import * as sizeStyles from './sizes'
import * as weightStyles from './weights'
import * as stateStyles from './states'

const supportedSizes = Object.keys(sizeStyles)
const supportedWeights = Object.keys(weightStyles)

const StyledButton = styled.button`
  width: ${props => props.block ? '100%' : 'auto'};
  box-sizing: border-box;
  ${props => sizeStyles[props.size]}
  ${props => weightStyles[props.weight]}
  ${props => props.disabled ? stateStyles['disabled'] : ''}
`

class Button extends Component {
  static propTypes = {
    size: PropTypes.oneOf(supportedSizes),
    block: PropTypes.bool,
    weight: PropTypes.oneOf(supportedWeights),
    onClick: PropTypes.func,
    children: PropTypes.any,
    innerRef: PropTypes.func,
  }

  static defaultProps = {
    size: 'medium',
    block: false,
    weight: 'normal',
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
