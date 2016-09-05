var config = require('../knexfile').development
var knex = require('knex')(config)
var bcrypt = require('bcrypt')
var saltRounds = 10

const getTransactionsForAccount = (id) => {
  return knex('transactions').where('to_account_id', id).orWhere('from_account_id', id)
}

const checkDatabaseForEmail = (email) => {
  return knex('accounts')
    .where('email', email)
    .then((accounts) => {
      console.log("here is the sign in info: ", accounts)
      return accounts[0]
    })
}

var testPassword = "Ireland"

bcrypt.genSalt(saltRounds, function(err, salt) {
bcrypt.hash(testPassword, saltRounds, function(err, hash) {

    console.log('pass:', testPassword)
    console.log('hash:', hash)
    console.log('')

    // Store hash in your password DB.
  })
})

module.exports = {
    getTransactionsForAccount,
    checkDatabaseForEmail
}
