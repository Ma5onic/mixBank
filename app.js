const express = require('express')
var session = require('express-session')
var hbs = require('express-hbs')//do we need to install this?
var bodyParser = require('body-parser') //do we need to install this?
const queries  = require('./database/queries')
const getTransactionsForAccount = queries.getTransactionsForAccount
const app = express()
const cors = require('cors')
app.use(cors());
var bcrypt = require('bcrypt')
var saltRounds = 10

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  var id = Number(req.params.id)

  getTransactionsForAccount(id)
    .then((transactions) => {
      const data = {id: id, transactions: transactions}
      res.json(data)
    })
    .catch(logError)
})

//route for
//app.get(/home)

//new route for signing in
app.get('/sign-in', function (req, res) {
  res.render('sign-in')
})

//posting sign in data. Looking in the req.body for the data sent from the form
app.post('/sign-in', function (req, res) {
  //query the user table to check if the email and hashed password match the data
  //authenicate user function
  //return user id
  req.session.userId = 7
  res.redirect('/home')
})

const logError = (err) => {
  res.status(500).send('cant display data')
}

module.exports = app
