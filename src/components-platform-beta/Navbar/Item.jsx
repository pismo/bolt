import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './style.css';

const Item = ({ label, icon, link, submenu, theme, onClick, open }) => (
  <Link to={link} className={theme.link} onClick={onClick}>
    { icon && <i className={`${theme.icon} material-icons`}>{ icon }</i>}
    { !icon && <i className={`${theme.icon} material-icons`}>done</i>}
    <span className={theme.label}>{ label }</span>

    { submenu && !open && <i className={`${theme.iconRight} material-icons`}>keyboard_arrow_down</i>}
    { submenu && open && <i className={`${theme.iconRight} material-icons`}>keyboard_arrow_up</i>}
  </Link>
);

Item.defaultProps = {
  theme: style,
  label: '',
  link: '/',
  icon: '',
  submenu: false,
  onClick: () => {},
  open: false,
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  submenu: PropTypes.bool,
  onClick: PropTypes.func,
  open: PropTypes.bool,
  theme: PropTypes.shape({
    link: PropTypes.string.isRequired,
  }),
};

export default Item;
