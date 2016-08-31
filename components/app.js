import React, { Component } from 'react'
import Account from './account'
import {fetchAccountInfo} from '../action-creator/actions'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAccountInfo: id => {
      console.log('dispatching')
      dispatch(fetchAccountInfo(id))
    }
  }
}

class App extends Component {

  constructor (props) {
    super(props)
  }

  componentDidMount() {
    console.log('componentDidMount')

    this.props.fetchAccountInfo(3)

  }

  render () {

  console.log(this.props, "these are props")

    return (
      <div>
        <h1>Welcome to {this.props.name}</h1>
      </div>
    )
  }

}

// export default App

export default connect((state) => state, mapDispatchToProps)(App)

// component loads ?
// user interaction


