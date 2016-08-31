 import request from 'superagent'

 const retrieveTransactions = function () {
  return {
    type: 'FETCHED_DATA',
    payload: payload
  }
}

const fetchAccountInfo = (id) => {
  return (dispatch) => {
    request.get('/api/v1/accounts/:id/transactions')
    .end( (err, res) => {
      if (err) {
        console.log("not working", err)
        return
      }
      dispatch(recieveTransactions(res.body))
    })
  }
}

export {
  recieveTransactions
  fetchAccountInfo
}
