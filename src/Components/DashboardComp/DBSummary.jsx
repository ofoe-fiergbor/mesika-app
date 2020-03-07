import React, { Component } from 'react'

export class DBSummary extends Component {
    render() {
        return (
            <div className='right'>
                <br/><br/><br/>
                <div className="col-md-4">
                    <h3>Cash Position</h3>
                <table className='table-striped table'>
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>xxxx</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='col-md-10'>Cash-In-Hand</td>
                            <td className='col-md-2'>xxxx</td>
                        </tr>
                        <tr>
                            <td className='col-md-10'>Cash In Bank</td>
                            <td className='col-md-2'>xxxx</td>
                        </tr>
                        <tr>
                            <td className='col-md-10'>Mobile Money</td>
                            <td className='col-md-2'>xxxx</td>
                        </tr>
                    </tbody>
                </table>

                </div>
                <div className="col-md-7">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><b>Expenses</b></a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><b>Revenue</b></a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><b>Performance</b></a></li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">Expense chart</div>
                        <div role="tabpanel" className="tab-pane" id="profile">Revenue Chart</div>
                        <div role="tabpanel" className="tab-pane" id="messages">Performance Chart</div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default DBSummary

