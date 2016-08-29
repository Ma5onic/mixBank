import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'  // we'll def be using these in the future

render(<App name='Mix Bank' />, document.querySelector('main'))
console.log('welcome to mixBank')

