var test = require('tape')
import Account from '../components/account'

test('testing mixBank', function (t) {
  t.ok(true)
  t.end()
})


//arrange that expectedBalance will be +500-400
const expectedBalance = 100

const testArray = [ {amount: -400}, {amount: 500} ]

test('calculateBalance uses transactions to calculate balance', function (t) {
  const testAccount = new Account
  const actualBalance = testAccount.calculateBalance(testArray)
  t.equal(expectedBalance, actualBalance)
  t.end()
})
