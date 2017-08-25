import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Style from './select.style'

export default class Select extends  Component {
	constructor(props) {
		super(props)
		this.state = {
			showMenu: false
		}
	}

	componentDidMount () {
		document.addEventListener('click', event => {
			const area = ReactDOM.findDOMNode(this.refs.area)
			if (!area.contains(event.target) && this.state.showMenu === true) {
				this.enableSelectOptions()
			}
		})
	}

	componentWillUnmount () {
		document.removeEventListener('click', event => {
			const area = ReactDOM.findDOMNode(this.refs.area)
			if (!area.contains(event.target) && this.state.showMenu === true) {
				this.enableSelectOptions()
			}
		})
	}

	selectOption(item, value) {
		this.setState({...this.state, itemSelected: item, itemValue: value})
		this.props.handleChange(item)
	}

	clearSelected() {
		this.setState({...this.state, itemSelected: null, itemValue: null, multOptions: []})
		this.props.handleChange(null)
	}

	isNearToBottom() {
		const
			area = ReactDOM.findDOMNode(this.refs.area).getBoundingClientRect().bottom,
			windowHeight = window.outerHeight,
			distance = windowHeight - area
		if(distance < 400) {
			this.setState({moveSelectToTop: true})
		} else {
			this.setState({moveSelectToTop: false})
		}
	}

	enableSelectOptions() {
		this.setState({showMenu: !this.state.showMenu})
	}

	renderList(opts, label, value, disabled) {
		return opts.map((e, index) => (
			<li className={`
                ${e[disabled] ? 'disabled' : ''}
                ${this.state.itemSelected ? e[value] === this.state.itemValue ? 'selected' : '' : ''}`}
			onClick={() => this.selectOption(e, e[value])}
			key={index}>{e[label]}
			</li>
		))
	}

	render() {
		const
			{ options, label, value, disabledItem, disabled, placeholder, description, mult } = this.props,
			{ itemSelected } = this.state

		return(
			<div ref='area' className='inputGroup'>
				<label>{description}</label>
				<div
					onClick={() => { this.enableSelectOptions(), this.isNearToBottom()}}
					className={`select-form ${this.state.showMenu ? 'active-menu' :  '' } ${disabled ? 'disabled' :  '' }`}>
					<span>{itemSelected ? itemSelected[label] : placeholder}
						<i className="zmdi zmdi-chevron-down"></i>
					</span>
					<ul  className={`${this.state.moveSelectToTop ? 'move-select-to-top' :  '' }`}>
						{itemSelected && <li onClick={() => this.clearSelected()}>{placeholder}</li>}
						{this.renderList(options, label, value, disabledItem, mult)}
					</ul>
				</div>
			</div>
		)
	}
}

Select.protoType = {
	options: PropTypes.array.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
}
