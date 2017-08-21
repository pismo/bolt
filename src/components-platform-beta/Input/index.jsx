import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Masker from 'vanilla-masker';
import defaultTheme from './style.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false,
    };
    this.handleLabelOnClick = this.handleLabelOnClick.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
  }

  componentDidMount() {
    if (this.props.currency) {
      Masker(this.inputEl).maskMoney({
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
        zeroCents: true,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.currency &&
        this.inputEl &&
        Number(this.inputEl.value) === Number(prevProps.value)) {
      Masker(this.inputEl).maskMoney({
        precision: 2,
        separator: ',',
        delimiter: '.',
        unit: 'R$',
        zeroCents: true,
      });
    }
  }

  handleLabelOnClick() {
    this.setState({ focus: true });
    this.inputEl.focus();
  }

  handleOnBlur() {
    this.setState({ focus: false });
  }

  render() {
    const { theme, type, error, hint, disabled, maxLength,
      value, placeholder, name, label, onChange, onBlur, onClick, onKeyPress } = this.props;
    return (
      <div className={theme.inputWrapper}>
        <input
          ref={(input) => { this.inputEl = input; }}
          className={classnames(
            theme.input,
            { [theme.filled]: value || placeholder || this.state.focus },
            { [theme.invalid]: error },
          )}
          maxLength={maxLength}
          name={name}
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          onClick={(e) => {
            onClick(e);
            this.handleLabelOnClick();
          }}
          onBlur={(e) => {
            onBlur(e);
            this.handleOnBlur();
          }}
        />
        { // eslint-disable-next-line
        }<label
          className={theme.label}
          htmlFor={name}
          onClick={this.handleLabelOnClick}
        >{label}</label>

        { error && <div className={theme.inputError}>{error}</div> }
        { hint && <div className={theme.inputHint}>{hint}</div> }
      </div>
    );
  }
}


Input.defaultProps = {
  theme: defaultTheme,
  type: 'text',
  error: '',
  hint: '',
  maxLength: '',
  value: undefined,
  disabled: false,
  currency: false,
  placeholder: '',
  onChange: () => undefined,
  onBlur: () => undefined,
  onClick: () => undefined,
  onKeyPress: () => undefined,
};

Input.propTypes = {
  theme: PropTypes.shape({
    inputError: PropTypes.string.isRequired,
    inputHint: PropTypes.string.isRequired,
    inputWrapper: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }),
  name: PropTypes.string.isRequired,
  maxLength: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  currency: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onKeyPress: PropTypes.func,
  onClick: PropTypes.func,
};

export default Input;
