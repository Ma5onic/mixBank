const initialState = {
    account:
      {
        id: 1,
        transactions: [
            {id: 503,
            amount: 456,
            description: 'purhcase bk',
            from_account_id:1,
            to_account_id:2
            },
            {id: 504,
            amount: 56700,
            description: 'weekly pay from burger king',
            from_account_id:2,
            to_account_id:1
            }
        ]
    }
}

export default initialState
