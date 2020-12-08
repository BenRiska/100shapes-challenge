import React from 'react'
import transactionList from "../assets/transactionList";
import Transaction from './Transaction';
import "../styles/Transactions.css"

function Transactions() {
    return (
        <>
        <div className="transactions">
        <p className="landing__transactions-title">Transactions</p>
        <div className="transactions-container">
            {transactionList.map(item => (
                <Transaction item={item}/>
            ))}
        </div>
        </div>
        </>
    )
}

export default Transactions
