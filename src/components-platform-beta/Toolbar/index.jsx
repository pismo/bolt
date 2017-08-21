import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Navbar from '../Navbar';
import styles from './style.css';

class Toolbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: props.open,
    };

    this.clickOpen = this.clickOpen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  clickOpen() {
    this.setState({ open: true });
  }

  render() {
    const { title, menu, theme, children } = this.props;

    return (
      <div className={theme.toolbar}>
        {
          menu &&
            <Button
              icon
              flat
              className={theme.toolbarMenu}
              onClick={this.clickOpen}
            >
              <img src="/logo.svg" alt="" className={theme.logo} />
            </Button>
        }

        <Navbar open={this.state.open} />

        { children || (title && <div className={theme.toolbarTitle}>{ title }</div>) }
      </div>
    );
  }
}

Toolbar.defaultProps = {
  theme: styles,
  title: '',
  menu: false,
  children: '',
  open: false,
};

Toolbar.propTypes = {
  open: PropTypes.bool,
  theme: PropTypes.shape({
    toolbar: PropTypes.string.isRequired,
    toolbarMenu: PropTypes.string.isRequired,
    toolbarTitle: PropTypes.string.isRequired,
  }),
  title: PropTypes.string,
  children: PropTypes.node,
  menu: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
};

export default Toolbar;
