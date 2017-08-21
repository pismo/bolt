import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import { Link } from 'react-router-dom';
import defaultTheme from './style.css';
import Menu from './Menu';
import items from './items';
import Box from '../Box';
import BoxHeader from '../Box/BoxHeader';
import logo from '../../images/logo.svg';

class Navbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: props.open,
    };

    this.handleClick = this.handleClick.bind(this);
    this.close = this.close.bind(this);
    this.setWrapper = this.setWrapper.bind(this);
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClick);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ open: nextProps.open });
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClick);
  }

  setWrapper(el) {
    this.wrapper = el;
  }

  close() {
    this.setState({ open: false });
  }

  handleClick({ target }) {
    // Closes if the click was outside the menu
    this.setState({
      open: this.wrapper.contains(target),
    });
  }

  render() {
    const { theme } = this.props;

    return (
      <div
        ref={this.setWrapper}
        className={Classnames({ [theme.open]: this.state.open }, theme.wrapperBox)}
      >
        <Box
          className={Classnames(theme.navbar)}
        >
          <BoxHeader className={theme.boxHeader}>
            <Link to="/" className={theme.boxHeaderLogo}>
              <img src={logo} alt="" className={theme.logo} />
            </Link>
            <button
              type="button"
              className={`${theme.iconRight} material-icons`}
              onClick={this.close}
            >
              close
            </button>
          </BoxHeader>
          {
            items.map(item => (
              <Menu key={items.indexOf(item)} list={item.menu} className={theme.menu} />
            ))
          }
        </Box>
      </div>
    );
  }
}

Navbar.defaultProps = {
  theme: defaultTheme,
  open: false,
};

Navbar.propTypes = {
  open: PropTypes.bool,
  theme: PropTypes.shape({
    navbar: PropTypes.string.isRequired,
  }),
};

export default Navbar;
