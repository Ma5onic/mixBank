import React, { Component } from 'react'
import Account from '../containers/accounts'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
        <Account />
      </div>
    )
  }

}

export default App
