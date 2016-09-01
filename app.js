const express = require('express')
var session = require('express-session')
var hbs = require('express-hbs')//do we need to install this?
var bodyParser = require('body-parser') //do we need to install this?
var session = require('express-session')

const queries  = require('./database/queries')
const getTransactionsForAccount = queries.getTransactionsForAccount
const checkDatabaseForEmail = queries.checkDatabaseForEmail
const app = express()
const cors = require('cors')
app.use(cors());


//express sessions set up
app.use(session({
  secret: 'shhh',
  maxAge: 1000*60*2,
  resave: true,         // read about this option: https://www.npmjs.com/package/express-session#resave
  saveUninitialized: false
}))


// Set default node environment to development
// process.env.NODE_ENV = process.env.NODE_ENV || 'development'

//sweet if statement from exercise
// app.get('/api/v1/*', (req, res, next) => {

//   if (req.session.accountData) {
//     next()
//   } else {
//     res.redirect('/nope')
//   }

// })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/* GET home page. */
app.get('/', (req, res, next) => {
  res.redirect('/sign-in');
});

/* GET transactions page. */
app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  console.log("finding the page!")
  var id = Number(req.params.id)
  getTransactionsForAccount(id)
  .then((transactions) => {
    const data = {id: id, transactions: transactions}
      res.json(data)
    })
  .catch(logError)
})

/* GET sign-in page. */
app.get('/sign-in', function (req, res) {
  res.render('sign-in')
})

const authenticateAccount = (account, passwordToCheck) => {
  return account.password === passwordToCheck
}
//POST sign in data. Looking in the req.body for the data sent from the form
//query the user table to check if the email and / or password match the data
//call checkDatabaseForName function and return user ID
app.post('/sign-in', function (req, res) {
  const {email, password} = req.body

  checkDatabaseForEmail(email)//find account by email
  .then((account) => {
    if (authenticateAccount(account, password)) {
      // console.log("this is the cookie:", req.session)
      req.session.accountId = account.id
      // console.log(req.session.accounts)
      console.log('here')
      res.redirect('/api/v1/accounts/1/transactions')
    } else {
      res.redirect('/home')
    }
  })
})

const logError = (err) => {
  res.status(500).send('cant display data')
}

module.exports = app
