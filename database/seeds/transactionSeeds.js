
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('transactions').insert({id: 503, description: 'purchase BK', from_account_id: 1, to_account_id: 2, amount: 456}),
        knex('transactions').insert({id: 504, description: 'weekly pay', from_account_id: 2, to_account_id: 1, amount: 56700}),
        knex('transactions').insert({id: 505, description: 'interest', from_account_id: 3, to_account_id: 1, amount: 500})
      ]);
    });
};
