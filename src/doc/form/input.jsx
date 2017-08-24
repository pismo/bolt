import React, { Component } from 'react';
import Input from './../../components/input/input';

export default class Form extends Component {
    render() {
        return(
            <div>
                <h2 className="doc-title">Form <span>| Input with symbol</span></h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="Nome"
                        placeholder="Nome"
                        id="Nome"
                        required
                        minLength={3}
                        maxLength={15}
                        type="text"
                        hintText="Dica para o input"
                        successIcon="check"
                        successText="Texto de sucesso"
                        disabled={false}
                        onChange={(state, e) => this.onChange(state, e.target.value)}
                        onBlur={(e) => {}}
                        onClick={(e) => {}}
                        onKeyPress={(e) => {}}
                        onFocus={(e) => {}}  />
            
                        <Input
                            label="E-mail"
                            placeholder="E-mail"
                            icon="email"
                            id="user_email"
                            required
                            minLength={3}
                            maxLength={15}
                            type="email"
                            hintText="Dica para o input"
                            successText="Texto de sucesso"
                            disabled={false}
                            onChange={(e) => {}}
                            onBlur={(e) => {}}
                            onClick={(e) => {}}
                            onKeyPress={(e) => {}}
                            onFocus={(e) => {}}  />

                        <Input
                            label="Cidade"
                            placeholder="Cidade"
                            icon="city-alt"
                            id="user_city"
                            required
                            minLength={3}
                            maxLength={5}
                            type="text"
                            hintText="Dica para o input"
                            successText="Texto de sucesso"
                            disabled={false}
                            onChange={(e) => {}}
                            onBlur={(e) => {}}
                            onClick={(e) => {}}
                            onKeyPress={(e) => {}}
                            onFocus={(e) => {}}  />

                        <Input
                            label="Estado"
                            placeholder="Estado"
                            icon="city-alt"
                            id="user_city"
                            required
                            minLength={3}
                            maxLength={5}
                            type="text"
                            hintText="Dica para o input"
                            successText="Texto de sucesso"
                            disabled={false}
                            onChange={(e) => {}}
                            onBlur={(e) => {}}
                            onClick={(e) => {}}
                            onKeyPress={(e) => {}}
                            onFocus={(e) => {}}  />
                </form>

            </div>
        )
    }
}