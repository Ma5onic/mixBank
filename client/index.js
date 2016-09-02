import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'  // we'll def be using these in the future
import reducers from './reducers'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import App from './components/app'

let store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

render(
    <Provider store={store}>
      <App name ='Mix Bank'/>
    </Provider>,
    document.querySelector('main')
  )
