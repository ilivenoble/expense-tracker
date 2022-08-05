import React, {useState} from 'react'

export const AddTransactions = () => {
    const [text, setText] = useState("")
    const [amount, setAmount]  = useState(0)

  return (
    <div>
      <h4>Add New Transaction</h4>
      <hr></hr>
      <form>
        <div>
          <label htmlFor="description">Description</label>
          <br></br>
          <input
            onChange={(e) => setText(e.target.value)}
            type="text"
            value={text}
            placeholder="Enter Description"
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <br></br>
          <input
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            value={amount}
            placeholder="Enter Amount"
          />
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}
