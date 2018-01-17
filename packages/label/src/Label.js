import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import * as sizeStyles from './sizes'
import * as weightStyles from './weights'

const supportedSizes = Object.keys(sizeStyles)
const supportedWeights = Object.keys(weightStyles)

const StyledLabel = styled.span`
  box-sizing: border-box;
  ${props => sizeStyles[props.size]}
  ${props => weightStyles[props.weight]}
`

/**
 * One label to rule them all.
 */
class Label extends Component {
  static propTypes = {
    /** 'small', 'medium', 'large' */
    size: PropTypes.oneOf(supportedSizes),
    /** 'normal', 'primary' */
    weight: PropTypes.oneOf(supportedWeights),
    /** returns the actual `ref` of the inner `<span />` */
    innerRef: PropTypes.func,
  }

  static defaultProps = {
    size: 'medium',
    weight: 'normal',
    innerRef: Function.prototype,
  }

  render() {
    const { children, ...otherProps } = this.props

    return (
      <StyledLabel {...otherProps}>
        {children}
      </StyledLabel>
    )
  }
}

export default Label
