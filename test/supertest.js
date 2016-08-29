var request = require('supertest')
var test = require('tape')

var app = require('../app')

request(app)
  .get('/api/v1/accounts/34/transactions')
  .expect('Content-Type', /json/)   // supertest test expectation
  .expect(200)
  .end(function(err, res) {
    var data = res.body

    test('data contains account id and transaction data', (t) => {
      t.error(err, 'there should be no error')

      t.true(data.account, "there is a top level 'account' key")
      t.true(Array.isArray(data.account.transactions), "inside a transactions key, there is an array")

      t.equal(typeof(data.account.id), 'number', "inside the id key there is a number")

      t.equal(data.account.id, 34 ,"the url account id is the matches the account data i get back")

      t.end()
    })
  });

  request(app)
  .get('/api/v1/accounts/340/transactions')
  .expect('Content-Type', /json/)   // supertest test expectation
  .expect(200)
  .end(function(err, res) {
    var data = res.body

    test('data contains account id and transaction data', (t) => {
      t.equal(data.account.id, 340 ,"the url account id is the matches the account data i get back")

      t.end()
    })
  });