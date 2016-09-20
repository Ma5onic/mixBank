import React from 'react'
import {connect} from 'react-redux'

class Account extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {

    return (
      <div className="container">
      <h2 className="text-center">Transaction Information </h2>
      <br></br>
      <table className="table table-bordered">
          <thead>
            <tr className="danger">
              <th className="text-center">Transaction Id</th>
              <th className="text-center">Amount</th>
              <th className="text-center">Description</th>
              <th className="text-center">From-Account</th>
              <th className="text-center">To-Account</th>
            </tr>
          </thead>
          <tbody>
            {this.props.transactions.transactions && this.props.transactions.transactions.map( (transaction)=> {
              return (
                <tr className="warning">
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
