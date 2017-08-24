import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Style from './select.style'

export default class Select extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            selected: {name: 'Opção 4', value: 4},
            multOptions: []
        }
    }

    selectOption(item, value) {
        this.setState({...this.state, itemSelected: item, itemValue: value})
    }

    selectMultOption(item, value) {
        const multOptions = this.state.multOptions.concat(value)
        this.setState({...this.state, multOptions: multOptions})
    }

    clearSelected() {
        this.setState({...this.state, itemSelected: null, itemValue: null, multOptions: []})
    }
    
    renderList(opts, label, value, disabled, mult) {
        return opts.map((e, index) => (
            <li className={`
                ${e[disabled] ? 'disabled' : ''} 
                ${this.state.itemSelected ? e[value] === this.state.itemValue ? 'selected' : '' : ''}`} onClick={() => mult ?  this.selectMultOption(e, e[value]) : this.selectOption(e, e[value])} key={index}>{e[label]}</li>
        ));
    }

    render() {
        const
            { options, label, value, disabled, placeholder, name, description, mult } = this.props,
            { itemSelected, itemValue, multOptions } = this.state;

        return(
            <div className='inputGroup'>
            {multOptions}
                <label>{description}</label>
                <div 
                    onClick={() => this.setState({showMenu: !this.state.showMenu})} 
                    className={`select-form ${this.state.showMenu ? 'active-menu' :  '' }`}>
                    <span>{multOptions.length > 0 ? multOptions : itemSelected ? itemSelected[label] : placeholder} <i className="zmdi zmdi-chevron-down"></i></span>
                        <ul>
                            {itemSelected || multOptions.length > 0 && <li onClick={() => this.clearSelected()}>{placeholder}</li>}
                            {this.renderList(options, label, value, disabled, mult)}
                        </ul>
                </div>
                <input
                    type="hidden"
                    value={`${mult ? multOptions : itemSelected ? itemValue[value] : null}`}
                    name={name}
                    id={name} />
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