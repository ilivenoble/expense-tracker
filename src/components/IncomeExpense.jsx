import React, {useContext} from 'react'
import { Context } from "../Context";

export const IncomeExpense = () => {
const {transactions} = useContext(Context)

const amounts = transactions.map(transaction => transaction.amount)

const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)*(-1).toFixed(2);

  return (
    <div>
      <h3>Income</h3>
      <p>{income}</p>
      <div>
        <h3>Expense</h3>
        <p>{expense}</p>
      </div>
    </div>
  );
}
