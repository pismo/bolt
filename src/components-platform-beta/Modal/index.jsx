import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const Modal = ({ children, show }) => (
  <div className={classnames(style.modal, { [style.open]: show })} >
    <div className={style.bg} />
    <div className={style.wrapper}>
      { children }
    </div>
  </div>
);

Modal.defaultProps = {
  className: '',
  show: false,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
};

export default Modal;
