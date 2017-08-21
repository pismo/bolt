import React from 'react';
import PropTypes from 'prop-types';
import theme from './style.css';

const Divider = ({ className }) => (
  <div className={`${theme.divider} ${className}`} />
);

Divider.defaultProps = {
  className: '',
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default Divider;

