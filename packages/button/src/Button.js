import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nearWhite, nearBlack } from '@pismo/bolt-colors'

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
    const { children } = this.props

    return (
      <button
        onClick={this.handleClick}
        ref={this.handleRef}
      >
        {children}
      </button>
    )
  }
}

const StyledButton = styled(Button)`
  color: ${nearWhite};
  background-color: ${nearBlack};
`

export { Button }
export default StyledButton
