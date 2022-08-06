import React, { createContext, useReducer } from "react";

const initialState = {
    transactions: [
        {id : 1, text:"salary", amount: 5000},
        {id : 2, text:"gas", amount: -1000},
        {id : 3, text:"bonus", amount: 2000},
        {id : 4, text:"data", amount: -2000}
    ]
}

function reducer(state, action){
    switch(action.type){
        case "DELETE_TRANSACTION":
        return {
            ...state,
            transactions: state.transactions.filter(item => item.id !== action.payload)
        }

        case "ADD_TRANSACTION": 
        return {
            ...state,
            transactions: [action.payload, ...state.transactions]
        }

        default:
            return state
    }
}


const Context = createContext(initialState);

function ContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
        type: "ADD_TRANSACTION",
        payload: transaction,
        });
    }

    return (
      <Context.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction
        }}
      >
        {children}
      </Context.Provider>
    );
    
}


export {Context, ContextProvider}