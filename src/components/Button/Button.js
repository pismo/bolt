import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Style from './button.style'

const button = ({text, icon, classes, disabled }) => {
  return(
    <a className={`btn 
      ${classes ? 'btn-theme' : ''}
      ${icon && !text ? 'btn-icon' : ''}
      ${disabled ? 'btn-disabled' : ''}`} href="#">

      {text && <span>{text}</span>}
      {icon && <i className={`zmdi zmdi-${icon} ${icon && text ? 'pad' : ''}`}></i>}
    </a>
  )
}

export default button;