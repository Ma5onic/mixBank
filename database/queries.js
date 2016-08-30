var config = require('../knexfile').development
var knex = require('knex')(config)
//actually should use knex db for database, not client side dummy data


const getTransactionsForAccount = (id) => {
  return knex.select('*').table('transactions')
  // in the future, this will need a join query from actual db
}

module.exports = {
  getTransactionsForAccount
}