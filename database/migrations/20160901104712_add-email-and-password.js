
exports.up = function(knex, Promise) {
  return knex.schema.table('accounts', (table) => {
    table.string('name')
    table.string('email');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('accounts', (table) => {
    table.string('name')
    table.dropColumn('email');
    table.dropColumn('password');
  })
};