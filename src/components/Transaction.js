import React from 'react'
import "../styles/Transaction.css"

function Transaction({item}) {
    return (
        <div className="transaction">
            <ul>
                <li>{item.date}</li>
                <li>{item.vendor}</li>
                <li>£{item.amount}</li>
                <li>£85, 053</li>
            </ul>
        </div>
    )
}

export default Transaction
