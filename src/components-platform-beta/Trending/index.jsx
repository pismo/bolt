import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

function getIconClass(props, theme) {
  return ['up', 'down'].reduce((cls, value) => {
    if (props[value]) {
      return `${cls} ${theme[value]}`;
    }

    return cls;
  }, '');
}

const Trending = ({ ...props, className, theme, value, up, down, flat }) => (
  <div className={`${theme.trending} ${className} ${getIconClass(props, theme)}`}>
    <i className={`material-icons ${theme.icon}`}>
      { up && 'trending_up' }
      { down && 'trending_down' }
      { flat && 'trending_flat' }
    </i>
    { value } %
  </div>
);

Trending.defaultProps = {
  theme: defaultTheme,
  value: '0',
  className: '',
  up: false,
  down: false,
  flat: false,
};

Trending.propTypes = {
  theme: PropTypes.shape({
    trending: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }),
  value: PropTypes.string,
  className: PropTypes.string,
  up: PropTypes.bool,
  down: PropTypes.bool,
  flat: PropTypes.bool,
};

export default Trending;
