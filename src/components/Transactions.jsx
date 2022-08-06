import React, {useContext} from 'react'
import { Context } from '../Context'

export const Transactions = () => {
    const { transactions, deleteTransaction } = useContext(Context);

    const transactionList = transactions.map((transaction) => (
      <div
        key={transaction.id}
        className={transaction.amount > 0 ? "plus" : "minus"}
      >
        <button
          className="delete-transaction-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
        <p>
          {transaction.text}{" "}
          <span className="transaction-amount">
            {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
          </span>
        </p>
      </div>
    ));

  return (
    <div>
        <h3>History</h3>
        <hr></hr>
        {transactionList}
    </div>
  )
}
