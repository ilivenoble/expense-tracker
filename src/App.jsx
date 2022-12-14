import React from "react"
import { Header } from "./components/Header"
import { Balance } from "./components/Balance"
import { IncomeExpense } from "./components/IncomeExpense"
import { Transactions } from "./components/Transactions"
import { AddTransactions } from "./components/AddTransactions"
import './App.css'

function App() {
 
  return (
    <div className="main-container">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <Transactions />
        <AddTransactions />
      </div>
    </div>
  );
}

export default App
