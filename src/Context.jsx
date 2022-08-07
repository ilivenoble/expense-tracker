import React, { createContext, useReducer } from "react";

const initialState = {
    transactions: []
}

function reducer(state, action){
    switch (action.type) {
      case "DELETE_TRANSACTION":
        return {
          ...state,
          transactions: state.transactions.filter(
            (item) => item.id !== action.payload
          ),
        };

      case "ADD_TRANSACTION":
        return {
          ...state,
          transactions: [action.payload, ...state.transactions],
        };

      case "DELETEALL_TRANSACTION":
        return {
          ...state,
          transactions: [],
        };

      default:
        return state;
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

    function deleteAllTransactions(){
        dispatch({
          type: "DELETEALL_TRANSACTION",
        });
    }

    return (
      <Context.Provider
        value={{
          transactions: state.transactions,
          deleteTransaction,
          addTransaction,
          deleteAllTransactions
        }}
      >
        {children}
      </Context.Provider>
    );
    
}


export {Context, ContextProvider}