import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Classnames from 'classnames';
import Box, { BoxHeader } from '../Box';
import DonutChart from '../DonutChart';
import Title from '../Title';
import style from './style.css';
import withDefaultTheme from '../helpers/withDefaultTheme';

const DonutBox = ({
  config,
  title,
  icon,
  className,
  theme,
  path,
  description = {},
}) => (
  <Link to={path} >
    <Box className={Classnames(theme.box, className)}>
      <BoxHeader
        icon={icon}
        title={title}
      />
      <DonutChart config={config} theme={theme} />
      <Title
        theme={theme}
        prevTitle={description.title}
        text={description.text}
      />
    </Box>
  </Link>
);

DonutBox.defaultProps = {
  className: '',
  title: '',
  icon: '',
  theme: style,
  path: '',
  onClick: () => null,
};

DonutBox.propTypes = {
  config: PropTypes.shape().isRequired,
  description: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  path: PropTypes.string,
  theme: PropTypes.shape({
    title: PropTypes.string,
    prevTitle: PropTypes.string,
  }),
};

export default withDefaultTheme(style, DonutBox);
