import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../Toolbar';
import style from './style.css';
import logo from '../../images/logo.svg';

const AppBar = ({ title, user }) => (
  <div>
    <Toolbar menu={user}>
      {user && <h3 className={style.title}> {title || 'Bem vindo!'}</h3>}
      {!user && <div className={style.logo_center}><img src={logo} alt="" /></div>}
    </Toolbar>
  </div>
);

AppBar.defaultProps = {
  title: '',
  user: {},
};

AppBar.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  user: PropTypes.shape(),
};

const mapStateToProps = state => ({
  title: state.appBar.title,
  user: state.appBar.user,
});

export default connect(mapStateToProps, null)(AppBar);
