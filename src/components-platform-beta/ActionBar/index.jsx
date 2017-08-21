import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import ActionButton from '../../components/ActionButton';

const ActionBar = ({ action }) => (
  <div className={style.actionBar}>
    <div className={style.infos}>
      <ul className={style.list}>
        <li>
          <p className={style.title}> 21.030 </p>
          <p className={style.subtitle}> Contas Impactadas </p>
        </li>
        <li>
          <p className={style.title}> 2 / 6 </p>
          <p className={style.subtitle}> Grupos Cobertos </p>
        </li>
      </ul>
    </div>
    { action && <div className={style.actions}>
      <ActionButton label="confirmar" />
    </div> }
  </div>
);

ActionBar.defaultProps = {
  action: false,
};

ActionBar.propTypes = {
  action: PropTypes.bool,
};

export default ActionBar;
