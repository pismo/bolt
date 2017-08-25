import React, { Component } from 'react'
import Button from './../../components/Button/Button'

export default class BtnPage extends Component {
    render() {
        return(
            <div>
                <h2 className="doc-title">Button <span>| with symbol</span></h2>
                <div>
                    <Button
                        text="normal" />

                    <Button
                        text="normal"
                        icon="check" />

                    <Button
                        text="disabled"
                        icon="check"
                        disabled />

                    <Button
                        icon="comment-text-alt" />
                </div>

                <div>
                    <Button
                        text="normal"
                        classes="theme" />

                    <Button
                        text="normal"
                        icon="check"
                        classes="theme" />

                    <Button
                        text="disabled"
                        icon="check"
                        classes="theme"
                        disabled />

                    <Button
                        icon="plus-square"
                        classes="theme" />
                </div>
            </div>
        )
    }
}