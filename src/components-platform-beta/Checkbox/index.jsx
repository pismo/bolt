import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import defaultTheme from './style';

const Checkbox = ({ name, checked, label, onChange, theme }) => (
  // eslint-disable-next-line
  <label className={theme.checkWrapper}>
    <input
      type="checkbox"
      name={name}
      onChange={onChange}
      checked={checked}
    />
    <div className={classnames(theme.check, { [theme.checked]: checked })} />
    <span>{label}</span>
  </label>
);

Checkbox.defaultProps = {
  theme: defaultTheme,
  label: '',
  disabled: false,
  name: '',
  checked: false,
  onChange: () => null,
};

Checkbox.propTypes = {
  theme: PropTypes.shape({
    checkWrapper: PropTypes.string.isRequired,
    check: PropTypes.string.isRequired,
    checked: PropTypes.string.isRequired,
  }),
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default Checkbox;
