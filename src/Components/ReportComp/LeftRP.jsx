import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class LeftRP extends Component {
    render() {
        return (
            <div className="DBleft">
                <ul>
                    <li id='dbfirstChild'><h3>TRANSACTIONS</h3></li>
                    <Link to='/incomeStatement' id='leftDBLi'>
                        <li>Income Statement</li>
                    </Link>
                    <Link to='/balanceSheet' id='leftDBLi'>
                        <li>Balance Sheet</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default LeftRP
