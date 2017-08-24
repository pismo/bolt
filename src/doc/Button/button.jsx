import React, { Component } from 'react'
import Button from './../../components/Button/Button'

export default class BtnPage extends Component {
    render() {
        return(
            <div>
                <h2 className="doc-title">Button <span>| with symbol</span></h2>
                <Button />
            </div>
        )
    }
}