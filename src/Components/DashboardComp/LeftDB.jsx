import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class LeftDB extends Component {
    render() {
        return (
            <div className="DBleft">
                <ul>
                    <li id='dbfirstChild'><h3>DASHBOARD</h3></li>
                    
                    <Link to='/' id='leftDBLi'>
                        <li>Summary</li>
                    </Link>

                    <Link to='/dbexpense' id='leftDBLi'>
                        <li>Expenses</li>
                    </Link>

                    <Link to='/dbrevenue' id='leftDBLi'>
                        <li>Revenue</li>
                    </Link>
                    

                </ul>
            </div>
        )
    }
}

export default LeftDB
