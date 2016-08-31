const express = require('express')
const queries  = require('./database/queries')
const getTransactionsForAccount = queries.getTransactionsForAccount
const app = express()
const cors = require('cors')
app.use(cors());

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)

  getTransactionsForAccount(id)
    .then((transactions) => {
      const data = {id: id, transactions: transactions}
      res.json(data)
    })
    .catch(logError)
})

const logError = (err) => {
  res.status(500).send('cant display data')
}

module.exports = app
