import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LeftTS extends Component {
    render() {
        return (
            <div className="DBleft">
                <ul>
                    <li id='dbfirstChild'><h3>TRANSACTIONS</h3></li>
                    <Link to='/expensetransaction' id='leftDBLi'>
                        <li>Expenses</li>
                    </Link>
                    <Link to='/revenuetransaction' id='leftDBLi'>
                        <li>Revenue</li>
                    </Link>
                    <Link to='/bankLodgment' id='leftDBLi'>
                        <li>Bank Lodgement</li>
                    </Link>
                    

                </ul>
            </div>
        )
    }
}

export default LeftTS
