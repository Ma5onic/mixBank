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
        return console.log("not working", err, id)
      }
      console.log('res', res)
      dispatch(recieveTransactions(JSON.parse(res.text)))
    })
  }
}


export {
  recieveTransactions,
  fetchAccountInfo
}
