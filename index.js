import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'  // we'll def be using these in the future
import reducers from './reducers'

const store = createStore(reducers)


import App from './components/app'


render(
    <Provider store={store}>
      <App name ='Mix Bank'/>
    </Provider>,
    document.querySelector('main')
  )
