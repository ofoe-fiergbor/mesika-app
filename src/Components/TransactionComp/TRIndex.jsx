import React, { Component } from 'react'
import LeftTS from './LeftTS'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TRExpenses from './TRExpenses'
import TRRevenue from './TRRevenue'
import TRBankLodgment from './TRBankLodgment'

export class TRIndex extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="col-md-3">
                <LeftTS/>
                </div>
                <div className="col-md-7">
                    <Switch>
                        <Route path='/expensetransaction' component={TRExpenses}/>
                        <Route path='/revenuetransaction' component={TRRevenue}/>
                        <Route path='/bankLodgment' component={TRBankLodgment}/>
                    </Switch>

                </div>
                
            </BrowserRouter>
        )
    }
}

export default TRIndex
