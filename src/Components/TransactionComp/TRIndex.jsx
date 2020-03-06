import React, { Component } from 'react'
import LeftTS from './LeftTS'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TRExpenses from './TRExpenses'
import TRRevenue from './TRRevenue'
import TRBankLodgment from './TRBankLodgment'
import TRBalances from './TRBalances'


export class TRIndex extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="col-md-3">
                <LeftTS/>
                </div>
                <div className="col-md-7">
                    <Switch>
                        <Route path='/expenseTransaction' component={TRExpenses}/>
                        <Route path='/transactions' component={TRRevenue}/>
                        <Route path='/bankLodgment' component={TRBankLodgment}/>
                        <Route path='/accountBalances' component={TRBalances}/>
                    </Switch>

                </div>
                
            </BrowserRouter>
        )
    }
}

export default TRIndex
