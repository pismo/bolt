import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '@pismo/bolt-colors'

const {
  nearWhite,
  nearBlack,
} = colors

const StyledButton = styled.button`
  color: ${nearWhite};
  background-color: ${nearBlack};
  border: 0;
  border-radius: .2rem;
  font-size: .875rem;
  padding: .9rem;
`

class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    innerRef: PropTypes.func,
    children: PropTypes.any,
  }

  static defaultProps = {
    onClick: Function.prototype,
    innerRef: Function.prototype,
  }

  handleClick = event => {
    return this.props.onClick(event)
  }

  handleRef = ref => {
    return this.props.innerRef(ref)
  }

  render() {
    const { className, children } = this.props

    return (
      <StyledButton
        onClick={this.handleClick}
        ref={this.handleRef}
      >
        {children}
      </StyledButton>
    )
  }
}

export default Button
