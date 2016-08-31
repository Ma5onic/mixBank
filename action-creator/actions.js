import request from 'superagent'

const recieveTransactions = function (payload) {
  return {
    type: 'FETCHED_DATA',
    payload: payload
  }
}

const fetchAccountInfo = (id) => {
  return (dispatch) => {
    request.get('http://localhost:3000/api/v1/accounts/1/transactions')
    .end( (err, res) => {
      console.log('fetched data')
      if (err) {
        console.log("not working", err, id)
        return
      }
      console.log('res', res)
      dispatch(recieveTransactions(res.body))
    })
  }
}

export {
  recieveTransactions,
  fetchAccountInfo
}
