import React, { Component } from 'react';
import Input from './../../components/input/input';
import Select from './../../components/select/select'

export default class Form extends Component {
    render() {
        const opts = [
            {name: 'Opção 1', value: 1},
            {name: 'Opção 2', value: 2, disabled: true},
            {name: 'Opção 3', value: 3},
            {name: 'Opção 4', value: 4},
            {name: 'Opção 5', value: 5},
            {name: 'Opção 6', value: 6},
            {name: 'Opção 7', value: 7},
            {name: 'Opção 8', value: 8},
            {name: 'Opção 9', value: 9},
            {name: 'Opção 10', value: 10},
            {name: 'Opção 11', value: 11}
        ]

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
                        onChange={(state, value) => {} }
                        onBlur={(state, value) => {} }
                        onClick={(state, value) => {} }
                        onKeyPress={(state, value) => {} }
                        onFocus={(state, value) => {} }  />
            
                        <Input
                            label="E-mail"
                            placeholder="E-mail"
                            icon="email"
                            id="user_email"
                            type="email"
                            hintText="Dica para o input"
                            successText="Texto de sucesso"
                            disabled={false}
                            onChange={(state, value) => {} }
                            onBlur={(state, value) => {} }
                            onClick={(state, value) => {} }
                            onKeyPress={(state, value) => {} }
                            onFocus={(state, value) => {} }  />

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
                            onChange={(state, value) => {} }
                            onBlur={(state, value) => {} }
                            onClick={(state, value) => {} }
                            onKeyPress={(state, value) => {} }
                            onFocus={(state, value) => {} }  />

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
                            onChange={(state, value) => {} }
                            onBlur={(state, value) => {} }
                            onClick={(state, value) => {} }
                            onKeyPress={(state, value) => {} }
                            onFocus={(state, value) => {} }  />
                </form>


                <h2 className="doc-title">Form <span>| Dropdown</span></h2>
                <form>
                    <Select
                        options={opts}
                        label='name'
                        description='Categoria'
                        placeholder='Selecione uma categoria'
                        value='value'
                        mult
                        name='category'
                        disabled='disabled' />
                </form>
            </div>
        )
    }
}