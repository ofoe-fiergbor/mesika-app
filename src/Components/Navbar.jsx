/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to='/' id='mesika'>
                                MeSika
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right navCus">
                                <Link to='/' id='li'>
                                    <li>Dashboard</li>
                                </Link>
                                <Link to='/transactions' id='li'>
                                    <li>Transactions</li>
                                </Link>
                                <Link to='/reports' id='li'>
                                    <li>Reports</li>      
                                </Link>
                                <Link to='/contacts' id='li'>
                                    <li>Contacts</li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
