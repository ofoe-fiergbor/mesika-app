import React, { Component } from 'react'
import LeftRP from './LeftRP'
import IncomeStatement from './IncomeStatement'
import BalanceSheet from './BalanceSheet'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export class RPIndex extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="col-md-3">
                    <LeftRP />
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path='/reports' component={IncomeStatement} />
                        <Route path='/balanceSheet' component={BalanceSheet} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default RPIndex
