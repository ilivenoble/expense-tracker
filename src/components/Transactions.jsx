import React, {useState, useContext} from 'react'
import {Context } from '../Context'

export const Transactions = () => {
    const {transactions, 
          deleteTransaction, 
          deleteAllTransactions 
        } = useContext(Context);

    const transactionList = transactions.map((transaction) => (
      <div key={transaction.id} className="transaction-container">
        <div
          id="transactions"
          className={transaction.amount > 0 ? "plus" : "minus"}
        >
          <h3 className="transaction-desc">{transaction.text} </h3>
          <h3 className="transaction-amount">
            {transaction.amount > 0 ? "+" : "-"}${Math.abs(transaction.amount)}
          </h3>
        </div>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
    ));

  return (
    <div>
      <h3 className="history">History</h3>
      <hr></hr>
      {transactionList}
      <div className='delete-all'>
        {transactions.length > 1 && (
          <button
            className="delete-all-btn"
            onClick={() => deleteAllTransactions()}
          >
            Delete All Transactions
          </button>
        )}
      </div>
    </div>
  );
}
