const database = require('../state')

//actuall should use knex db for database, not client side dummy data

const getTransactionsForAccount = (id) => {
  return database
  // in the future, this will need a join query from actual db
}

module.exports = {
  getTransactionsForAccount
}