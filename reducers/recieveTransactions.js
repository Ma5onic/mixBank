// import initialState from '../state'

function recieveTransactions (state = {}, action) {

  switch (action.type) {
    case 'FETCHED_DATA':
      console.log('action', action, state)
      return Object.assign({}, action.payload)

    default:
      return state
  }

}

export default recieveTransactions
