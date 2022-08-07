import React, {useContext} from 'react'
import { Context } from "../Context";

export const IncomeExpense = () => {
const {transactions} = useContext(Context)

const amounts = transactions.map(transaction => transaction.amount)

const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0)* -1).toFixed(2);

  return (
    <div className="income-expense">
      <div>
        <h3 className='income'>Income</h3>
        <p className='income-info'>{income}</p>
      </div>
      <div>
        <h3 className='expense'>Expense</h3>
        <p className='expense-info'>{expense}</p>
      </div>
    </div>
  );
}
