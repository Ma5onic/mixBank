const express = require('express')
const { getTransactionsForAccount } = require('./database/queries')

const app = express()

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)

  getTransactionsForAccount(id)
    .then((transactions) => {
      const data = {id: id, transactions: transactions}
      res.json(data)
    })
    .catch(logError)
})

// is logError the best name for this?
// res will not be in scope so this function won't work!
const logError = (err) => {
  res.status(500).send('cant display data')
}

module.exports = app
