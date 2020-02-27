import React, { Component } from 'react'
import LeftDB from './LeftDB'
import DBExpenses from './DBExpenses'
import DBRevenue from './DBRevenue'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DBSummary from './DBSummary'

export class DBIndex extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='dbIndex'>
                    <div className="col-md-3">
                        <LeftDB />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path='/' exact  component={DBSummary}/>
                            <Route path='/dbexpense'  component={DBExpenses}/>
                            <Route path='/dbrevenue'  component={DBRevenue}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default DBIndex
