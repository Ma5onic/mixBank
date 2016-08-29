const express = require('express')
const { getTransactionsForAccount } = require('./database/queries')


const app = express()

app.get('/api/v1/accounts/:id/transactions', (req,res) => {
  var id = Number(req.params.id)
  var data = getTransactionsForAccount(id)

  res.json(data)
})


module.exports = app
