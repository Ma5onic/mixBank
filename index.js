import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
    account:
      {
        id: 1,
        transactions: [
            {id: 503,
            amount: 456,
            desctiption: 'purhcase bk',
            from_account_id:1,
            to_account_id:2
            },
            {id: 504,
            amount: 56700,
            desctiption: 'weekly pay from burger king',
            from_account_id:2,
            to_account_id:1
            },
        ]
    }
}

const reducer = function (state = initialState , action) {
  return state
}

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App name='mixBank' />
  </Provider>,
  document.querySelector('main')
)

