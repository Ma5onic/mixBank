import React, { Component } from 'react'
import initialState from '../state.js'

class Account extends Component {

  constructor (props) {
    super(props)
    this.state = initialState
  }

  // displayInformation (account) {
  //   return account.map(function(item){
  //       return
  //       <p>{item}</p>
  //   })
  // }

  render () {
    console.log("initial state!", initialState)
    return (
        <div>
            <h2>This is the account id 1</h2>
            <p>{this.state.account.transactions[0].id}</p>
            <p>{this.state.account.transactions[0].amount}</p>
            <p>{this.state.account.transactions[0].description}</p>
        </div>
    )
  }
}

export default Account