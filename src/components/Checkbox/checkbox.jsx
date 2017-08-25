import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Style from './checkbox.style'

export default class Select extends  Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <div className='inputGroup'>
                <label htmlFor="check">Checkbox</label>
                <label> <input type="checkbox" id="check" name="check" /></label>
               
            </div>
        )
    }
}
