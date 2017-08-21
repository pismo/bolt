import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Pane from '../Pane';
import Title from '../Title';

const today = new Date();
const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const Header = ({ theme, parentClass }) => (
  <div className={`${theme.header} ${parentClass.header}`}>
    <Pane className={parentClass.pane} >
      <Title className={theme.paneTitle}>
        <span className={theme.panePretext}>2017</span>
        Hoje, { today.getDate() } { months[today.getMonth()] }
      </Title>
    </Pane>
  </div>
);

Header.defaultProps = {
  theme: style,
  parentClass: '',
};

Header.propTypes = {
  parentClass: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
  ]),
  theme: PropTypes.shape({
    header: PropTypes.shape(),
    paneTitle: PropTypes.shape(),
    panePretext: PropTypes.shape(),
  }),
};

export default Header;
