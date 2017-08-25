/* global document */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import style from './style/default.scss'
import StyleGrid from './../node_modules/tachyons-sass/tachyons.scss'

ReactDOM.render(
	<App />,
	document.getElementById('root'))
