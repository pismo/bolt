import React, { Component } from 'react'
import style from './component-input.style.scss'

class Input extends Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
		this.handleBlur = this.handleBlur.bind(this)
		this.validation = this.validation.bind(this)
		this.isAValidEmail = this.isAValidEmail.bind(this)
		this.state = {
			minLength: this.props.minLength,
			maxLength: this.props.maxLength,
			exactLength: this.props.exactLength,
			type: this.props.type,
			error: '',
			validField: !this.props.required,
			errorMessage: '',
		}
	}

	isAValidEmail(input) {
		const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return regex.test(input)
	}

	validation(input) {
		const { minLength, maxLength, exactLength } = this.state
		const value = input.length

		if (value <= (minLength - 1)) {
			this.updateErrorField(`Digite no minimo ${minLength} caracteres`, input)
		}

		if (value > maxLength) {
			this.updateErrorField(`Digite no máximo ${maxLength} caracteres`, input)
		}

		if (exactLength) {
			if (value !== exactLength) {
				this.updateErrorField(`Digite exatamente ${exactLength} caracteres`, input)
			} else {
				this.updateSuccessField(input)
			}
		}

		if (this.state.type === 'email') {
			if (!this.isAValidEmail(input)) {
				this.updateErrorField('Digite um e-mail válido', input)
			} else {
				this.updateSuccessField(input)
			}
		}

		if (value >= minLength && value <= maxLength) {
			this.updateSuccessField(input)
		}
	}

	handleChange(input) {
		this.validation(input.value)
	}

	handleFocus() {

	}

	handleBlur(input) {
		this.validation(input.value)
	}

	updateErrorField(message, value) {
		this.setState({ ...this.state, errorMessage: message, error: true, validField: false, fieldValue: value })
	}

	updateSuccessField(value) {
		this.setState({ ...this.state, errorMessage: '', error: false, validField: true, fieldValue: value })
	}

	render() {
		const { label, icon, placeholder, id, type, onChange, onBlur, onClick, onKeyPress, hintText, onFocus, disabled, successText, required, exactLength } = this.props
		const classes = `inputGroup ${this.state.error ? 'inputGroup-error' : ''}  ${icon ? 'inputGroup-w-icon' : ''}`
		return (
			<div className={classes}>
				<label htmlFor={id}>{label} { required && <span>*</span>}</label>
				<div className="input-holder">
					<i className={`zmdi zmdi-${icon}`} />
					<input
						onChange={(trigger) => {
							this.handleChange(trigger.target)
							onChange(this.state.validField, trigger)
						}}
						onClick={(trigger) => {
							onClick(this.state.validField, trigger)
						}}
						onBlur={(trigger) => {
							this.handleBlur(trigger.target)
							onBlur(this.state.validField, trigger)
						}}
						onKeyPress={trigger =>
							onKeyPress(this.state.validField, trigger)}
						onFocus={(trigger) => {
							this.handleFocus(trigger.target)
							onFocus(this.state.validField, trigger)
						}}
						id={id}
						disabled={disabled}
						name={id}
						type={type}
						placeholder={placeholder}
					/>
					<span className="input-bottom" />
				</div>

				{ this.state.error && <span className="input-message error-message"><i className="zmdi zmdi-alert-triangle" /> {this.state.errorMessage}</span> }

				{ this.state.success && <span className="input-message"><i className={'zmdi zmdi-check'} /> {successText} </span> }

				{ hintText && <span className="input-message r-10"><i className={'zmdi zmdi-check'} /> {hintText}</span> }

				{ exactLength && this.state.fieldValue && <span className="input-message r-10">{`${this.state.fieldValue.length}/${exactLength}`}</span> }
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
	exactLength: undefined,
	value: undefined,
	disabled: false,
	currency: false,
	validField: true,
	placeholder: '',
	onChange: () => undefined,
	onBlur: () => undefined,
	onFocus: () => undefined,
	onClick: () => undefined,
	onKeyPress: () => undefined,
}

export default Input
