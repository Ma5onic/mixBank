import initialState from '../state'
function recieveTransactions (state = initialState, action) {

  switch (action.type) {
    case 'FETCHED_DATA':
      console.log('action', action, state)
      return action.payload

    default:
      return state
  }

}

export default recieveTransactions
