import React, { Component } from 'react'
//import Bank from './account'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
        <div>
            <h1>Welcome to {this.props.name}</h1>
        </div>
    )
  }

}

export default App
