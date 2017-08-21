import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

const Pane = ({ children, theme, className }) => (
  <div className={`${theme.pane} ${className}`}>
    { children }
  </div>
);

Pane.defaultProps = {
  theme: defaultTheme,
  className: '',
};

Pane.propTypes = {
  theme: PropTypes.shape({
    pane: PropTypes.string,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Pane;
