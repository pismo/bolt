import React from 'react';
import PropTypes from 'prop-types';
import withDefaultTheme from '../helpers/withDefaultTheme';
import styles from './style.css';

const Title = ({ className, subTitle, prevTitle, children, text, theme }) => (
  <div>
    { prevTitle && <span className={theme.prevTitle}>{ prevTitle }</span> }
    <h3 className={`${theme.title} ${className}`}>
      {children || text}
    </h3>
    { subTitle && <span className={theme.subTitle}>{ subTitle }</span> }
  </div>
);

Title.defaultProps = {
  text: '',
  prevTitle: '',
  subTitle: '',
  children: '',
  className: '',
};

Title.propTypes = {
  text: PropTypes.string,
  prevTitle: PropTypes.string,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    title: PropTypes.shape(),
    subTitle: PropTypes.shape(),
    prevTitle: PropTypes.shape(),
  })
};

export default withDefaultTheme(styles, Title);
