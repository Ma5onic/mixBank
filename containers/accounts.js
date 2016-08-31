import {connect} from 'react-redux'
import Account from '../components/account'

//map state to props will get the latest state and take the specific piece of data that the component needs to render
const mapStateToProps = (state) => {
  return state.recieveTransactions
}


//call connect - pass it mapStateToProps, then call it the function it gets back and give it the account component
export default connect(mapStateToProps)(Account)
