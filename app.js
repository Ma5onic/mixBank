const express = require('express')
const { getTransactionsForAccount } = require('./database/queries')


const app = express()


app.get('/api/v1/accounts/:id/transactions', (req,res) => {
  var id = Number(req.params.id)
  getTransactionsForAccount(id)

    .then((transactions)=> {
        const data = {id:id, transactions:transactions}
        console.log(transactions)
        res.json(data)
    })

    .catch(logError)
})

 const logError = (err) => {

    res.status(500).send('cant display data')
}

module.exports = app

