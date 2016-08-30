var request = require('supertest')
var test = require('tape')

var app = require('../app')

var expected = {
        id: 1,
        transactions: [
            {
            id: 503,
            description: "purchase BK",
            from_account_id: 1,
            to_account_id: 2,
            amount: 456
            },
            {
            id: 504,
            description: "weekly pay",
            from_account_id: 2,
            to_account_id: 1,
            amount: 56700
            }
          ]
        }

request(app)
  .get('/api/v1/accounts/1/transactions')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    var data = res.body

    test('data contains account id and transaction data', (t) => {
      t.error(err, 'there should be no error')

      t.true(data.transactions, "there is a top level 'transactions' key")

      t.true(Array.isArray(data.transactions), "inside a transactions key, there is an array")

      t.deepEqual(data, expected, 'we are the same and yay for testing')

      t.deepEqual(data.id, 1 ,"the url account id is the matches the account data that comes back")

      t.end()
    })
  });

