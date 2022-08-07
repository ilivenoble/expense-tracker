import React, {useContext} from 'react'
import { Context } from '../Context'

export const Balance = () => {
const {transactions} = useContext(Context)

const netTotal = transactions.map(transaction => transaction.amount).reduce((acc, item) =>(acc += item), 0).toFixed(3)
  return (
    <div className='bal-container'>
        <h3 className='bal'>Your Balance</h3>
        <h2 className='bal-info'>${netTotal}</h2>
    </div>
  )
}
