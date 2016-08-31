function recieveTransactions (state = [], action) {
  switch (action.type) {
    case 'RETRIEVE_ACCOUNT_TRANSACTIONS':
      return [
        ...action.payload
      ]

      default:
        return state
  }
}

export default recieveTransactions
