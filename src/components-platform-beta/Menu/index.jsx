import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuList from './MenuList';
import defaultTheme from './style.css';
import Button from '../Button';

class Menu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: props.open,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.setButton = this.setButton.bind(this);
    this.setWrapper = this.setWrapper.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick);
  }

  setButton(btn) {
    this.button = btn;
  }

  setWrapper(el) {
    this.wrapper = el;
  }

  getWrapperClasses(theme) {
    let cls = theme.menu;

    if (this.state.open) {
      cls += ` ${theme.open}`;
    }

    return cls;
  }

  toggle() {
    this.setState({ open: !this.state.open });
  }

  handleClick({ target }) {
    // Let it for toggle to handle
    if (this.isButton(target)) {
      return;
    }

    // Closes if the click was outside the menu
    this.setState({
      open: this.wrapper.contains(target),
    });
  }

  isButton(el) {
    return (
      el.classList.contains(this.props.theme.toggle) ||
      el.classList.contains('material-icons')
    );
  }

  render() {
    const { theme, actions = [] } = this.props;

    return (
      <div className={this.getWrapperClasses(theme)} ref={this.setWrapper}>
        <Button
          className={theme.toggle}
          onClick={this.toggle}
          flat
          icon
        >
          <i className="material-icons">more_vert</i>
        </Button>
        {
          actions && <MenuList actions={actions} theme={theme} />
        }
      </div>
    );
  }
}

Menu.defaultProps = {
  theme: defaultTheme,
  open: false,
  actions: [],
};

Menu.propTypes = {
  open: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
  })),
  theme: PropTypes.shape({
    menu: PropTypes.string.isRequired,
    open: PropTypes.string.isRequired,
    toggle: PropTypes.string.isRequired,
    list: PropTypes.string.isRequired,
    listItem: PropTypes.string.isRequired,
  }),
};

export default Menu;
