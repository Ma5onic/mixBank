var config = require('../knexfile').development
var knex = require('knex')(config)
var bcrypt = require('bcrypt')
var saltRounds = 10

const getTransactionsForAccount = (id) => {
  return knex('transactions').where('to_account_id', id).orWhere('from_account_id', id)
}

const checkDatabaseForEmail = (name) => {
  return knex('accounts')
    .where('name', name)
    .then((accounts) => {
      console.log("here is the sign in info: ", accounts)
      return accounts[0]
    })
}

var myPassword = "Ireland"

bcrypt.genSalt(saltRounds, function(err, salt) {
bcrypt.hash(myPassword, saltRounds, function(err, hash) {

    console.log('pass:', myPassword)
    console.log('hash:', hash)
    console.log('')

    // Store hash in your password DB.
  })
})

module.exports = {
    getTransactionsForAccount,
    checkDatabaseForEmail
}
