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
        {/* Typography mixed with colors examples */}
        <h1>Heading h1</h1>
        <p>
          Body text <small>small</small> and <span className="tiny">tiny</span>.
          I can also be <span style={blueStyle}>blue</span>.
        </p>

        {/* Button examples */}
        <h2>Buttons</h2>
        <Button onClick={this.handleClick} innerRef={this.handleRef} weight="primary">
          Open modal
        </Button>&nbsp;&nbsp;
        <Button>Default</Button>&nbsp;&nbsp;
        <Button disabled>Disabled</Button>&nbsp;&nbsp;
        <Button size="large">Large</Button>&nbsp;&nbsp;
        <Button size="small">Small</Button>&nbsp;&nbsp;
        <br /><br />
        <Button block>Block</Button>
        <br /><br />
        <button>Regular button tag</button>&nbsp;&nbsp;
        <button className="disabled">Disabled regular button</button>

        {/* Link examples */}
        <h2>Links</h2>
        <Link to="/not-found">Link to a route</Link>&nbsp;&nbsp;
        <Link to="/not-found" disabled>Disabled</Link>&nbsp;&nbsp;
        <Link to="/not-found" size="large">Large</Link>&nbsp;&nbsp;
        <Link to="/not-found" size="small">Small</Link>&nbsp;&nbsp;
        <br /><br />
        <a>Regular anchor tag</a>
        <a className="disabled">Disabled anchor tag</a>

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
