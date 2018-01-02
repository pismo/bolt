import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

export default Button
