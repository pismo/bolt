import 'normalize.css'

import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import core from '@pismo/bolt-core'
import Modal from '@pismo/bolt-modal'
import Button from '@pismo/bolt-button'
import Label from '@pismo/bolt-label'
import Toast from '@pismo/bolt-toast'

import './App.scss'

const TOAST_DURATION = 5000
const { typography, colors } = core

const pageContainerStyle = {
  padding: '0 2rem',
}

class App extends Component {
  timeout = null

  state = {
    isModalOpen: false,
    isToastVisible: false,
  }

  handleOpenModalClick = event => {
    console.log('Button click', event)

    this.setState({
      isModalOpen: true,
    })
  }

  handleShowToastClick = () => {
    this.setState({
      isToastVisible: true,
      toastMessage: 'Congratulations! This is a Toast example.',
    })

    this.timeout = window.setTimeout(() => {
      this.setState({
        isToastVisible: false,
      })
    }, TOAST_DURATION)
  }

  handleRef = ref => {
    console.log('the ref is real', ref)
  }

  handleModalClose = event => {
    console.log('the modal close is real', event)

    this.setState({
      isModalOpen: false,
    })
  }

  handleToastDismiss = event => {
    console.log('the toast dismiss event is real', event)

    window.clearTimeout(this.timeout)
    this.timeout = null

    this.setState({
      isToastVisible: false,
    })
  }

  render() {
    const { isModalOpen, isToastVisible, toastMessage } = this.state

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
          Check App.js.
        </p>

        <p className="custom-error-label">
          Custom error label styled directly in .scss using variables from the core submodules.
          Check App.scss.
        </p>

        {/* Button examples */}
        <section>
          <h2>Buttons</h2>
          <Button onClick={this.handleOpenModalClick} innerRef={this.handleRef} weight="primary">
            Open modal
          </Button>&nbsp;&nbsp;
          <Button onClick={this.handleShowToastClick}>
            Show toast
          </Button>&nbsp;&nbsp;
          <Button disabled>Disabled</Button>&nbsp;&nbsp;
          <Button size="large">Large</Button>&nbsp;&nbsp;
          <Button size="small">Small</Button>&nbsp;&nbsp;
          <br /><br />
          <Button block>Block</Button>
          <br /><br />
          <button>Regular button tag</button>&nbsp;&nbsp;
          <button className="disabled">Disabled regular button</button>
        </section>

        {/* Link examples */}
        <section>
          <h2>Links</h2>
          <a>Regular anchor tag</a>
          <a className="disabled">Disabled anchor tag</a>
        </section>

        {/* Label examples */}
        <section>
          <h2>Labels</h2>
          <Label>default</Label>&nbsp;&nbsp;
          <Label weight="primary">primary</Label>&nbsp;&nbsp;
          <Label size="large">large</Label>&nbsp;&nbsp;
          <Label size="small">small</Label>&nbsp;&nbsp;
          <Label size="tiny">tiny</Label>&nbsp;&nbsp;
        </section>

        <Modal isOpen={isModalOpen} onClose={this.handleModalClose}>
          Modal contents
        </Modal>

        <Toast isVisible={isToastVisible} onDismiss={this.handleToastDismiss}>
          {toastMessage}
        </Toast>
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
