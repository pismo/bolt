/* Libs */
import React from 'react'
import PropTypes from 'prop-types'
// import { Loader, } from 'onda'

/* Assets */
// import checkWhiteIconSVG from '../../../assets/ic_check_white_24px.svg'
// import closeDarkblueIconSVG from '../../../assets/ic_close_darkblue_24px.svg'

/* Render */
const Button = ({
  className,
  style,
  weight,
  size,
  block,
  onClick,
  children,
  disabled,
  loading,
  type,
  hideIcon,
  customIcon,
  iconMeaning,
}) => {
  if (customIcon && !iconMeaning) {
    console.warn(
      'Pismo Button: Pass "iconMeaning" prop in order to enable the icon image.'
    )
  }

  let buttonClasses = 'button-reset bn ma0 f7 f6-ns fw5 ttu pv2 pv1-ns v-mid'
  const buttonStyle = {
    ...style,
  }

  const iconClasses = 'v-mid pl2 dn dib-ns'
  let iconStyle = {}
  let icon = customIcon

  switch (size) {
    case 'small':
      buttonClasses += ' ph2 f7'
      iconStyle = {
        ...iconStyle,
        transform: 'scale(0.7)',
      }

      break
    case 'big':
      buttonClasses += ' ph3 f5'
      iconStyle = {
        ...iconStyle,
        transform: 'scale(1.2)',
      }

      break
    default:
      buttonClasses += ' ph3 min-h37'
      iconStyle = {
        ...iconStyle,
        transform: 'scale(0.9)',
      }
  }

  switch (weight) {
    case 'primary':
      buttonClasses +=
        ' bg-pismo-orange hover-bg-pismo-mid-orange active-bg-pismo-dark-orange white'
      icon = icon || checkWhiteIconSVG
      break
    case 'secondary':
      buttonClasses += ' bg-pismo-light-yellow white'
      icon = icon || checkWhiteIconSVG
      break
    case 'quiet':
      buttonClasses +=
        ' bg-pismo-near-white hover-bg-pismo-light-gray active-bg-pismo-dark-gray pismo-dark-blue'
      icon = icon || closeDarkblueIconSVG
      break
    case 'default':
    default:
      hideIcon = true
      buttonClasses += ''
  }

  if (block) {
    buttonClasses += ' w-100 h-100 br0'
  } else {
    buttonClasses += ' br2'
  }

  if (!disabled) {
    buttonClasses += ' pointer'
  } else {
    buttonClasses += ' o-50 noclick'
  }

  if (loading) {
    buttonClasses += ' tc noclick'
  }

  buttonClasses += ` ${className}`

  const loaderSize = size === 'big' ? size : 'small'
  const loaderInvert = ['primary', 'secondary', ].includes(weight)

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      style={buttonStyle}
    >
      {loading
        ? <Loader size={loaderSize} invert={loaderInvert} />
        : <span>
            {children}
          </span>}

      {!hideIcon &&
        !loading &&
        <img
          src={icon}
          className={iconClasses}
          style={iconStyle}
          alt={iconMeaning}
        />}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  weight: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  type: PropTypes.string,
  hideIcon: PropTypes.bool,
  customIcon: PropTypes.string,
  iconMeaning: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  style: {},
  weight: 'default',
  size: 'normal',
  block: false,
  type: 'button',
  disabled: false,
  loading: false,
  hideIcon: false,
  iconMeaning: 'Button',
}

export default Button
