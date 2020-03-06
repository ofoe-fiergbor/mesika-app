import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LeftTS extends Component {
    render() {
        return (
            <div className="DBleft">
                <ul>
                    <li id='dbfirstChild'><h3>TRANSACTIONS</h3></li>
                    <Link to='/expenseTransaction' id='leftDBLi'>
                        <li>Expenses</li>
                    </Link>
                    <Link to='/transactions' id='leftDBLi'>
                        <li>Revenue</li>
                    </Link>
                    <Link to='/bankLodgment' id='leftDBLi'>
                        <li>Transfers</li>
                    </Link>
                    <Link to='/accountBalances' id='leftDBLi'>
                        <li>Transaction Balances</li>
                    </Link>
                    

                </ul>
            </div>
        )
    }
}

export default LeftTS
