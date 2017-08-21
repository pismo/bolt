import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.css';
import withDefaultTheme from '../helpers/withDefaultTheme';
import BoxHeader from './BoxHeader';

const Box = ({ className, theme, children }) => (
  <div className={`${theme.box} ${className}`}>
    { children }
  </div>
);

Box.defaultProps = {
  className: '',
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.shape({
    box: PropTypes.string,
  }).isRequired,
};

export default withDefaultTheme(styles, Box);

export { BoxHeader };
