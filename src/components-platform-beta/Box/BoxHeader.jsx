import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

const BoxHeader = ({ className = '', title, icon, menu, children, theme }) => (
  <div className={`${theme.header} ${className}`}>
    { icon && !children && <i className={`material-icons ${theme.headerIcon}`}>{ icon }</i> }

    <div className={theme.headerTitle}>
      { children || title }
    </div>

    {
      menu && !children && <div className={theme.headerMenu}>
        { menu }
      </div>
    }
  </div>
);

BoxHeader.defaultProps = {
  theme: defaultTheme,
  icon: '',
  className: '',
  menu: false,
  children: null,
  title: '',
};

BoxHeader.propTypes = {
  theme: PropTypes.shape({
    header: PropTypes.string,
    headerTitle: PropTypes.string,
    headerMenu: PropTypes.string,
  }),
  menu: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default BoxHeader;
