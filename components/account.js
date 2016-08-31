import React from 'react'
import {connect} from 'react-redux'

class Account extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="container">
      <h2>Transaction Information </h2>
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
            {this.props.transactions.transactions && this.props.transactions.transactions.map( (transaction)=> {
              return (
                <tr className="success">
                <td>{transaction.id}</td>
                <td>${transaction.amount}</td>
                <td>{transaction.description}</td>
                <td>{transaction.from_account_id}</td>
                <td>{transaction.to_account_id}</td>
              </tr>

                )
            })}
          </tbody>
      </table>
  </div>
    )
  }

}

export default Account

