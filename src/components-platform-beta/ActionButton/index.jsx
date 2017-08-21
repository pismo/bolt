import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import defaultTheme from './style.css';
import Button from '../Button';

function getClasses(initialClass = '', props) {
  return Classnames(
    { [defaultTheme.cancel]: props.iconName === '' },
    defaultTheme.actionButton,
    initialClass,
  );
}

const ActionButton = ({
    ...props,
    label,
    iconName,
    initialClass,
    onClick,
}) => (
  <Button
    className={getClasses(initialClass, props)}
    type="submit"
    onClick={onClick}
    {...props}
  >
    <p>{label}</p>
    {iconName !== '' && <i className="material-icons">{iconName}</i>}
  </Button>
);

ActionButton.defaultProps = {
  label: '',
  iconName: '',
  initialClass: '',
  onClick: () => null,
};

ActionButton.propTypes = {
  label: PropTypes.string,
  iconName: PropTypes.string,
  initialClass: PropTypes.string,
  onClick: PropTypes.func,
};

export default ActionButton;
