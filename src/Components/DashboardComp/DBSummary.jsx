import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';




export class DBSummary extends Component {

    render(props) {
        const { netCashBalance, netBankBalance, netMobileMoneyBalance, totalBalance } = this.props
        const formatter = new Intl.NumberFormat('en-US', {minimumFractionDigits: 2})

        
        const cashData = [
            {name: '2020-01-2', uv: 2620,},
            {name: '2020-01-9', uv: 5240,},
            {name: '2020-01-16', uv: 3930,},
            {name: '2020-01-23', uv: 5240,},
            {name: '2020-01-30', uv: 6550,},
            {name: '2020-02-06', uv: 786,},
            {name: '2020-02-11', uv: 1834,},
        ];
        const bankData = [
            {name: '2020-01-2', uv: 1633,},
            {name: '2020-01-9', uv: 3812,},
            {name: '2020-01-16', uv: 5446,},
            {name: '2020-01-23', uv: 8169,},
            {name: '2020-01-30', uv: 10892,},
            {name: '2020-02-06', uv: 10892,},
            {name: '2020-02-11', uv: 13615,},
        ];
        const mmData = [
            {name: '2020-01-2', uv: 2534,},
            {name: '2020-01-9', uv: 3620,},
            {name: '2020-02-11', uv: 1086,},
            {name: '2020-01-16', uv: 7240,},
            {name: '2020-01-23', uv: 9050,},
            {name: '2020-01-30', uv: 5430,},
            {name: '2020-02-06', uv: 7240,},
            
        ];
        const netData = [
            {name: '2020-01-2', uv: 5867,},
            {name: '2020-01-9', uv: 13691,},
            {name: '2020-01-30', uv: 39117,},
            {name: '2020-01-30', uv: 39117,},
            {name: '2020-01-16', uv: 19559,},
            {name: '2020-01-23', uv: 29338,},
            {name: '2020-02-06', uv: 48897,},
        ]
        

        return (
            <div className='right'>
                <br /><br /><br />
                <div className="col-md-4">
                    <h3>Cash Position</h3>
                    <table className='table-striped table'>
                        <thead>
                            <tr>
                                <th>Balance</th>
                                <th>{formatter.format(totalBalance)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col-md-10'>Cash-In-Hand</td>
                                <td className='col-md-2'>{formatter.format(netBankBalance)}</td>
                            </tr>
                            <tr>
                                <td className='col-md-10'>Cash In Bank</td>
                                <td className='col-md-2'>{formatter.format(netMobileMoneyBalance)}</td>
                            </tr>
                            <tr>
                                <td className='col-md-10'>Mobile Money</td>
                                <td className='col-md-2'>{formatter.format(netCashBalance)}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className="col-md-7">
                    <ul className="nav nav-tabs" role="tablist">
                        <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><b>Net Cash-In-Hand</b></a></li>
                        <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><b>Net Bank Balance</b></a></li>
                        <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><b>Mobile Money</b></a></li>
                        <li role="presentation"><a href="#cashPosition" aria-controls="messages" role="tab" data-toggle="tab"><b>Cash Position</b></a></li>
                    </ul>

                    <div className="tab-content">
                        <div role="tabpanel" className="tab-pane active" id="home">
                            <AreaChart
                                width={700}
                                height={400}
                                data={cashData}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="profile">
                        <AreaChart
                                width={700}
                                height={400}
                                data={bankData}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#D4D884" fill="#D4D884" />
                            </AreaChart>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="messages">
                        <AreaChart
                                width={700}
                                height={400}
                                data={mmData}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#D87575" fill="#D87575" />
                            </AreaChart>
                        </div>
                        <div role="tabpanel" className="tab-pane" id="cashPosition">
                        <AreaChart
                                width={700}
                                height={400}
                                data={netData}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stroke="#D87575" fill='#008000' />
                            </AreaChart>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default DBSummary

