import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class LeftRP extends Component {
    render() {
        return (
            <div className="DBleft">
                <ul>
                    <li id='dbfirstChild'><h3>REPORTS</h3></li>
                    <Link to='/reports' id='leftDBLi'>
                        <li>Income Statement</li>
                    </Link>
                    <Link to='/chart' id='leftDBLi'>
                        <li>Charts</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

export default LeftRP
