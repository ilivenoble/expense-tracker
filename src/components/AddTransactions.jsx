import React, { useState, useContext} from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from '../Context'

export const AddTransactions = () => {
    const [text, setText] = useState("")
    const [amount, setAmount]  = useState(-1)

    const {addTransaction} = useContext(Context)

    function handleSubmit(e){
        e.preventDefault()
        const newTransaction = {
          id: uuidv4(),
          text,
          amount: +amount,
        };
        addTransaction(newTransaction)
    }

  return (
    <div className="add-transaction-container">
      <h4 className="add-transaction">Add New Transaction</h4>
      <hr></hr>
      <form onSubmit={handleSubmit} className="transaction-form">
        <div className="form-input">
          <label htmlFor="description">Description:</label>
          <br></br>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="Enter Transaction Description"
          />
        </div>

        <div className="form-input">
          <label htmlFor="amount">Amount (+income, -expense):</label>
          <br></br>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            value={amount}
            placeholder="Enter Amount"
          />
        </div>
        <button type="submit" className="add-transaction-btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
