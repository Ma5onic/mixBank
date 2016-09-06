import React, { Component } from 'react'
import Account from './account'
import {fetchAccountInfo} from '../action-creator/actions'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccountInfo:() => {
      console.log('dispatching')
      dispatch(fetchAccountInfo())
    }
  }
}

class App extends Component {


componentDidMount() {
  console.log("i got here")
  this.props.fetchAccountInfo()
}


render () {
  const accounts = { transactions: []}
  return (
    <div>
      <h1 className="text-center">Welcome to {this.props.name}</h1>
      <Account  transactions={this.props.transactions}/>
      <a type="submit"  href="/sign-out"> Sign-out</a>
    </div>
    )
  }

}


export default connect((state) => state, mapDispatchToProps)(App)
