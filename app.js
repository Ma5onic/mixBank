process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const express = require('express')
const session = require('express-session')
const hbs = require('express-hbs')
const bodyParser = require('body-parser')

const queries  = require('./database/queries')
const getTransactionsForAccount = queries.getTransactionsForAccount
const checkDatabaseForEmail = queries.checkDatabaseForEmail

var bcrypt = require('bcrypt')
var saltRounds = 10

const app = express()

app.use(express.static('public'));

//express sessions set up
app.use(session({
  secret: 'shhh',
  maxAge: 1000*60*2,
  resave: true,         // read about this option: https://www.npmjs.com/package/express-session#resave
  saveUninitialized: false
}))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/* GET home page. */
app.get('/', (req, res, next) => {
  res.redirect('/sign-in');
});

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
  var email = req.body.email
  var password = req.body.password
  var name = req.body.name

  checkDatabaseForEmail(email)//find account by email
  .then((account) => {
    const hash = account.password
    const myPassword = req.body.password

    req.session.dog = 'toto'
    var id = account.id

    bcrypt.compare(myPassword, hash, function(err, result){
      if (result) {
        req.session.name = name
        req.session.id = id

        res.redirect('/app')
      }
      else {
        res.redirect('/sign-in')
      }
    })
  })
})

app.get('/sign-out', (req, res) => {
console.log("signinout");
  req.session.destroy()
  res.redirect('/sign-in')
})

//sweet if statement from exercise
app.get('/api/v1/*', (req, res, next) => {

  if (req.session.id) {
    next()
  } else {
    console.log('you got rejected trying to do GET to /api/v1/*',
      'check yo req.session', req.session)
    res.redirect('/sign-in')
  }

})


app.get('/app', (req, res) => {
  console.log('app session check', req.session)
  res.render('app')
})

/* GET transactions api */
//NOTE take out :id - it's not used any more
app.get('/api/v1/accounts/:id/transactions', (req, res) => {
  console.log('api/v1/account/transactions GET')

  var id = req.session.id
  getTransactionsForAccount(id)
  .then((transactions) => {
    const data = {id: id, transactions: transactions}
      res.json(data)
    })
  .catch(logError(res))
})


const logError = (res) => {
  return (err) => {
    res.status(500).send('cant display data')
  }
}

module.exports = app
