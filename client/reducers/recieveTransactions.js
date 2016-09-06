// import initialState from '../state'

const INITIAL_STATE = {
  receiveTransactions: []
}

function recieveTransactions (state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'FETCHED_DATA':
      console.log('action', action, state)
      return Object.assign({}, action.payload)

    default:
      return state
  }

}

export default recieveTransactions
