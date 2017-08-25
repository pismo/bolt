import React from 'react'
import Style from './button.style'

const button = ({ text, icon, classes, disabled }) => (
	<a
		className={`btn
      ${classes ? 'btn-theme' : ''}
      ${icon && !text ? 'btn-icon' : ''}
      ${disabled ? 'btn-disabled' : ''}`}
		href="#"
	>

		{text && <span>{text}</span>}
		{icon && <i className={`zmdi zmdi-${icon} ${icon && text ? 'pad' : ''}`} />}
	</a>
)

export default button
