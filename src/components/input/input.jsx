import React, { Component } from 'react';
import style from './component-input.style.scss';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.validation = this.validation.bind(this);
        this.isAValidEmail = this.isAValidEmail.bind(this);
        this.state = {
            minLength: this.props.minLength,
            maxLength: this.props.maxLength,
            type: this.props.type,
            error: '',
            validForm: this.props.required ? false : true,
            errorMessage: ''
        }
    }

    isAValidEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input); 
    }

    validation(input) {
        const { minLength, maxLength } = this.state, value = input.length;
        if (value <= (minLength - 1)) {
            this.setState({...this.state, errorMessage: `Digite no minimo ${minLength} caracteres`, error: true, validForm: false})
            return
        }

        if (value > maxLength) {
            this.setState({...this.state, errorMessage: `Digite no máximo ${maxLength} caracteres`, error: true, validForm: false})
            return
        } 

        if(this.state.type === 'email') {
             if(!this.isAValidEmail(input)) {
                 this.setState({...this.state, errorMessage: `Digite um e-mail válido`, error: true, validForm: false})
                 return
            }
        }

        if(value >= minLength && value <= maxLength) {
            this.setState({...this.state, errorMessage: '', error: false, validForm: true})
            return
        }
    }

    handleChange(input) {
        this.validation(input.value);
    }

    handleFocus(input) {
    }

    handleBlur(input) {
        this.validation(input.value);
    }

    render() {
        const { label, icon, placeholder, id, type, onChange, onBlur, onClick, onKeyPress, hintText, onFocus, disabled, successText, required, minLength, maxLength } = this.props;
        const classes = `inputGroup ${this.state.error ? 'inputGroup-error' : '' }  ${icon ? 'inputGroup-w-icon' : '' }`;
        return ( 
            <div className={classes}>
            <label htmlFor={id}>{label} { required && <span>*</span>}</label>
                <div className="input-holder">
                    <i className={`zmdi zmdi-${icon}`}></i>
                    <input 
                        onChange={(trigger) => {
                            this.handleChange(trigger.target)
                            onChange(this.state.validForm, trigger)
                        }} 
                        onClick={(trigger) => {
                            onClick(this.state.validForm, trigger)
                        }}
                        onBlur={(trigger) => {
                            this.handleBlur(trigger.target)
                            onBlur(this.state.validForm, trigger)
                        }}
                        onKeyPress={(trigger) => 
                            onKeyPress(this.state.validForm, trigger)} 
                        onFocus={(trigger) => {
                            this.handleFocus(trigger.target)
                            onFocus(this.state.validForm, trigger)
                        }}
                        id={id} 
                        disabled={disabled}
                        name={id} 
                        type={type}
                        placeholder={ placeholder} />
                    <span className="input-bottom"></span>
                </div>
               
                { this.state.error && <span className="input-message error-message"><i className="zmdi zmdi-alert-triangle"></i> {this.state.errorMessage}</span> }
                { this.state.success && <span className="input-message"><i className={`zmdi zmdi-check`}></i> {successText} </span> }
                { hintText && <span className="input-message r-10"><i className={`zmdi zmdi-check`}></i> {hintText}</span> }
            </div>
        )
    }
}

Input.defaultProps = {
    type: 'text',
    error: '',
    hintText: '',
    maxLength: undefined,
    minLength: undefined,
    value: undefined,
    disabled: false,
    currency: false,
    validForm: true,
    placeholder: '',
    onChange: () => undefined,
    onBlur: () => undefined,
    onFocus: () => undefined,
    onClick: () => undefined,
    onKeyPress: () => undefined,
  };

export default Input;