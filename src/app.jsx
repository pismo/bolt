import React, { Component } from 'react';
import Input from './components/input/input'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
    }

    onChange(states, value) {
        this.setState({...this.state, disable: states})
    }
    
    render() {
        return (  
            <div className="container"> 
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

export default App;