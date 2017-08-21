import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Item from './Item';
import style from './style.css';


class SubItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
    return false;
  }

  render() {
    const { item, theme } = this.props;

    return (
      <div className={Classnames(theme.submenu, { [theme.submenuOpen]: this.state.open })}>
        <Item
          label={item.label}
          icon={item.icon}
          link={item.url}
          submenu
          onClick={this.handleClick}
          disabled
          open={this.state.open}
        />

        <ul className={theme.submenuList}>
          {
            item.submenu.map(subitem => (
              <li key={subitem.label} className={theme.item}>
                <Item label={subitem.label} icon={subitem.icon} link={subitem.url} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

SubItem.defaultProps = {
  theme: style,
  item: {},
  open: false,
};

SubItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
  }),
  theme: PropTypes.shape({
    submenu: PropTypes.string.isRequired,
    submenuList: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
  }),
  open: PropTypes.bool,
};

export default SubItem;
