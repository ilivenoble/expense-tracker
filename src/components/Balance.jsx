import React, {useContext} from 'react'
import { Context } from '../Context'

export const Balance = () => {
const {transactions} = useContext(Context)

const netTotal = transactions.map(transaction => transaction.amount).reduce((acc, item) =>(acc += item), 0).toFixed(3)
  return (
    <div>
        <h3>Your Balance</h3>
        <h1>${netTotal}</h1>
    </div>
  )
}
