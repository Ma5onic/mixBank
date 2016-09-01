
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('accounts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('accounts').insert({id: 1, name: "Amaan", email: "amaan@email", password: "pass1"}),
        knex('accounts').insert({id: 2, name: "George", email: "george@email", password: "pass2"}),
        knex('accounts').insert({id: 3, name: "Mandy", email: "mandy@email", password: "pass3"})
      ]);
    });
};
