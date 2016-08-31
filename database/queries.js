var config = require('../knexfile').development
var knex = require('knex')(config)
var bcrypt = require('bcrypt')
var saltRounds = 10

const getTransactionsForAccount = (id) => {
  return knex('transactions').where('to_account_id', id).orWhere('from_account_id', id)
}

const authenticatePassword = (id, name, password) => {
  return knex('accounts')
    .where('email', email)
    .then( logInData => {
      console.log("here is the sign in info: ", ...logInData)
      // if (password === logInData.account_password)
      return
        //if/else
        logInData
    })
}

// var myPassword = "securePASSWORD"

// bcrypt.genSalt(saltRounds, function(err, salt) {
//   bcrypt.hash(myPassword, salt, function(err, hash) {

//     console.log('pass:', myPassword)
//     console.log('hash:', hash)
//     console.log('')

//     // Store hash in your password DB.
//   })
// })

module.exports = {
    getTransactionsForAccount
    authenticatePassword
}
