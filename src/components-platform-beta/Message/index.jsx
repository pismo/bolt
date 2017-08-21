import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import theme from './style.css';
import { reset as actionReset } from '../../store/feedback/actions';

class Message extends Component {
  resetMessage() {
    const { reset } = this.props;
    setTimeout(() => {
      reset();
    }, 5000);
  }

  render() {
    const { success, error } = this.props;
    return (
      <div className={theme.message}>
        { success &&
          <div className={theme.success}>
            <p>Enviado com Sucesso!</p>
            { this.resetMessage() }
          </div> }
        { error &&
          <div className={theme.error}>
            <p>Erro!</p>
            { this.resetMessage() }
          </div> }
      </div>
    );
  }
}

Message.defaultProps = {
  error: false,
  success: false,
};

Message.propTypes = {
  reset: PropTypes.func.isRequired,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

const mapDispatchToProps = dispatch => (
  {
    reset() {
      dispatch(actionReset());
    },
  }
);

export default connect(null, mapDispatchToProps)(Message);
