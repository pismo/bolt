import React from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import Item from './Item';
import style from './style.css';

const Menu = ({ list, theme }) => (
  <ul className={theme.group}>
    { list.map(item => (
      <li key={item.label} className={theme.item}>
        { item.submenu && <SubMenu item={item} />}
        {
          !item.submenu &&
          <Item
            onClick={item.onClick}
            label={item.label}
            icon={item.icon}
            link={item.url}
          />
        }
      </li>
    )) }
  </ul>
);

Menu.defaultProps = {
  theme: style,
  list: [],
};

Menu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })),
  theme: PropTypes.shape({
    group: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
  }),
};

export default Menu;
