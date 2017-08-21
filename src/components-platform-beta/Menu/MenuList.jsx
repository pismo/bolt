import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from './style.css';

const MenuList = ({ actions, theme }) => (
  <ul className={theme.list}>
    {
      actions
        .map(action => <li key={action.label} className={theme.listItem}>{ action.label }</li>)
    }
  </ul>
);

MenuList.defaultProps = {
  theme: defaultTheme,
  actions: [],
};

MenuList.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })),
  theme: PropTypes.shape({
    list: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired,
  }),
};

export default MenuList;
