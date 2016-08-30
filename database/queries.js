var config = require('../knexfile').development
var knex = require('knex')(config)

const getTransactionsForAccount = (id) => {
  // you're hard coding the id here! 
  return knex('transactions').where('to_account_id', 1).orWhere('from_account_id', 1)
}

module.exports = {getTransactionsForAccount}
