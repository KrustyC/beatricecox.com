import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './assets/scss/main.scss'


import App from './views/App'

// eslint-disable-next-line
render(<App />, document.getElementById('app'))