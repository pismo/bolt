import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';
import Box, { BoxHeader } from '../Box';
import Title from '../Title';
import style from './style.css';

const GraphicBox = ({
  title,
  icon,
  className,
  theme,
  description = {},
}) => (
  <Box className={Classnames(theme.box, className)}>
    <BoxHeader
      icon={icon}
      title={title}
    />
    <p>Exibir gráfico</p>
    <Title
      theme={theme}
      prevTitle={description.title}
      text={description.text}
    />
  </Box>
);

GraphicBox.defaultProps = {
  className: '',
  title: '',
  icon: '',
  theme: style,
};

GraphicBox.propTypes = {
  description: PropTypes.shape().isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  theme: PropTypes.shape({
    title: PropTypes.string,
    prevTitle: PropTypes.string,
  }),
};

export default GraphicBox;
