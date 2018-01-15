import 'normalize.css'

import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Modal from '@pismo/bolt-modal'
import Button from '@pismo/bolt-button'
import Link from '@pismo/bolt-link'
import colors from '@pismo/bolt-colors/index.js'
import typography from '@pismo/bolt-typography'

import '@pismo/bolt-typography/index.scss'

const pageContainerStyle = {
  padding: '0 2rem',
}

class App extends Component {
  state = {
    isModalOpen: false,
  }

  handleClick = event => {
    console.log('Button click', event)

    this.setState({
      isModalOpen: true,
    })
  }

  handleRef = ref => {
    console.log('the ref is real', ref)
  }

  render() {
    const { isModalOpen } = this.state

    const blueStyle = {
      color: colors.blue,
      fontSize: typography.f4,
    }

    return (
      <div style={pageContainerStyle}>
        <h1>Heading h1</h1>
        <p>
          Body text <small>small</small> and <span className="tiny">tiny</span>.
          I can also be <span style={blueStyle}>blue</span>.
        </p>

        <h2>Buttons</h2>

        <Button onClick={this.handleClick} innerRef={this.handleRef} weight="primary">
          Open modal
        </Button>

        &nbsp;&nbsp;

        <Button onClick={this.handleClick} innerRef={this.handleRef}>
          Open modal
        </Button>

        &nbsp;&nbsp;

        <Button disabled>
          Open modal
        </Button>

        <br /><br />

        <h2>Links</h2>

        <Link to="/not-found">Link to a route</Link>
        &nbsp;&nbsp;
        <Link to="/not-found" disabled>Link to a route</Link>

        <Modal isOpen={isModalOpen}>
          Modal contents
        </Modal>
      </div>
    )
  }
}

const NotFoundPage = () => (
  <div style={pageContainerStyle}>
    <h1>Not found page</h1>
    <Link to="/">Go back</Link>
  </div>
)

const RoutedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/not-found" component={NotFoundPage} />
    </Switch>
  </Router>
)

export default RoutedApp
