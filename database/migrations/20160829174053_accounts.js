
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('accounts', function(table) {
  table.increments('id')
 })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('accounts').then(function () {
  console.log('accounts table was dropped')
  })
};
