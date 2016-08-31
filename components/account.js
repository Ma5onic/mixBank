import React from 'react'

// class Account extends Component {

//   constructor (props) {
//     super(props)
//     props = initialState
//   }

  // calculateBalance(transactions) {
  // //calculate balance function needs to go here
  // }

function Account (props) {
  console.log(props, 'these are the props')
  return (
  //this code needs to be refactored
  <div className="container">
      <h2>Transaction Information </h2>
      <p>This is the transaction information for account {props.account.id}</p>
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
              <td>{props.account.transactions[0].id}</td>
              <td>${props.account.transactions[0].amount}</td>
              <td>{props.account.transactions[0].description}</td>
              <td>{props.account.transactions[0].from_account_id}</td>
              <td>{props.account.transactions[0].to_account_id}</td>
            </tr>
            <tr className="success">
              <td>{props.account.transactions[1].id}</td>
              <td>${props.account.transactions[1].amount}</td>
              <td>{props.account.transactions[1].description}</td>
              <td>{props.account.transactions[1].from_account_id}</td>
              <td>{props.account.transactions[1].to_account_id}</td>
            </tr>
          </tbody>
      </table>
  </div>
  )
}

export default Account

