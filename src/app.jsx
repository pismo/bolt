import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import Nav from './components/nav/nav'

import Form from './doc/form/input'
import Button from './doc/Button/button'

const Home = () => <p>Home</p>
const Grid = () => <p>Grid</p>
const Tabelas = () => <p>Tabelas</p>
const Lista = () => <p>Lista</p>

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (  
            <Router>
                <div className="grid full-height">
                    <Nav />
                    <div className="w-80 pa2"> 
                            <div>
                                <Route exact path="/" component={Home} />
                                <Route path="/form" component={Form} />
                                <Route path="/botoes" component={Button} />
                                <Route path="/grid" component={Grid} />
                                <Route path="/tabelas" component={Tabelas} />
                                <Route path="/lista" component={Lista} />
                            </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;