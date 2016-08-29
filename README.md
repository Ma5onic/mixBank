
# mixBank

Totally Sweet App

##DB
One balance
## tables
    accounts
        id
        (we can calculate the balance from all the transaction)
    transactions
        id
        description?
        from_account_id
        to_account_id
        amount (eg 5.00)

## Initial State
{
account:
    {
        id: 1,
        transactions: [
            {id: 503,
            amount: 456,
            desctiption: 'purhcase bk',
            from_account_id:1,
            to_account_id:2
            },
            {id: 504,
            amount: 56700,
            desctiption: 'weekly pay from burger king',
            from_account_id:2,
            to_account_id:1
            },
        ]
    }
}

### API
GET api/v1/accounts/1/transactions
testing on an API - super test


### Client
 - React
 - Redux
 - Webpack or browserify
 - Babel
 - Tests: 1) can hit api 2) displays all transactions and the correct balance
 - reducer tests (reducer takes actions)
 - reducer test about API GET request (action: RETRIEVE_ACCOUNT_TRANSACTIONS)

 Future  - react router (when we have more pages)

React Components
- app.js (top level component)
    -Account
        -Transactions
        -Balance



git clone https://github.com/mandy-kate/mixBank
cd
npm install
```

## develop

```
npm start
```

browse to <http://localhost:9966/>.

## test

```
npm test
```

## deploy

```
npm run deploy
```
