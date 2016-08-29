
exports.up = function(knex, Promise) {
   return knex.schema.createTableIfNotExists('transactions', function(table) {
   table.increments('id')
   table.string('description')
   table.integer('from_account_id')
   table.integer('to_account_id')
   table.integer('amount')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('transactions').then(function () {
  console.log('transactions table was dropped')
  })
};
