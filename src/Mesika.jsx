import React, { Component } from 'react'
import { Navbar } from './Components/Navbar'
import Dashboard from './Pages/Dashboard'
import Transactions from './Pages/Transactions'
import Reports from './Pages/Reports'
import Contacts from './Pages/Contacts'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class Mesika extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/transactions' component={Transactions} />
                    <Route path='/reports' component={Reports} />
                    <Route path='/contacts' component={Contacts} />
                </Switch>
            </BrowserRouter>

        )
    }
}

export default Mesika
