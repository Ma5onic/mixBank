var config = require('../knexfile').development
var knex = require('knex')(config)

const getTransactionsForAccount = (id) => {
  // you're hard coding the id here!
   // return knex.select('*').from('transactions')
  return knex('transactions').where('to_account_id', id).orWhere('from_account_id', id)
}



module.exports = { getTransactionsForAccount }
