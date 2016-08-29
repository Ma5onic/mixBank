import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

render(<App name='mixBank' />, document.querySelector('main'))
console.log('welcome to mixBank')

