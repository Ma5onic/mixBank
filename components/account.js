import React, { Component } from 'react'
import initialState from '../state.js'

class Account extends Component {

  constructor (props) {
    super(props)
    this.state = initialState
  }

  render () {
    return (

    <div className="container">
        <h2>Transaction Information </h2>
        <p>This is the transaction information for account {this.state.account.id}</p>
        <table className="table table-bordered">
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Amount</th>
                <th>Description</th>
                <th>From-Account</th>
                <th>To-Account</th>
              </tr>
            </thead>
            <tbody>
              <tr className="danger">
                <td>{this.state.account.transactions[0].id}</td>
                <td>${this.state.account.transactions[0].amount}</td>
                <td>{this.state.account.transactions[0].description}</td>
                <td>{this.state.account.transactions[0].from_account_id}</td>
                <td>{this.state.account.transactions[0].to_account_id}</td>
              </tr>
              <tr className="success">
                <td>{this.state.account.transactions[1].id}</td>
                <td>${this.state.account.transactions[1].amount}</td>
                <td>{this.state.account.transactions[1].description}</td>
                <td>{this.state.account.transactions[1].from_account_id}</td>
                <td>{this.state.account.transactions[1].to_account_id}</td>
              </tr>
            </tbody>
        </table>
    </div>
    )
  }
}

export default Account

