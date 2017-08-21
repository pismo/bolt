import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Classnames from 'classnames';
import defaultTheme from './style.css';

function getClasses(props, theme, className) {
  return Classnames(
    theme.button,
    className,
  );
}

const Button = ({
    ...props,
    children,
    label,
    theme,
    disabled,
    type,
    className,
    onClick,
    to,
}) => {
  if (to) {
    return (
      <Link
        className={getClasses(props, theme, className)}
        disabled={disabled}
        onClick={onClick}
        to={to}
      >
        { children || label }
      </Link>
    );
  }

  return (
    <button
      className={getClasses(props, theme, className)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      { children || label }
    </button>
  );
};

Button.defaultProps = {
  theme: defaultTheme,
  label: '',
  type: 'button',
  className: 'button',
  disabled: false,
  children: null,
  secondary: false,
  warn: false,
  tertiary: false,
  alert: false,
  flat: false,
  outline: false,
  big: false,
  icon: false,
  onClick: () => null,
  to: undefined,
};

Button.propTypes = {
  theme: PropTypes.shape({
    button: PropTypes.string,
  }),
  label: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  warn: PropTypes.bool,
  tertiary: PropTypes.bool,
  alert: PropTypes.bool,
  flat: PropTypes.bool,
  outline: PropTypes.bool,
  big: PropTypes.bool,
  icon: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
