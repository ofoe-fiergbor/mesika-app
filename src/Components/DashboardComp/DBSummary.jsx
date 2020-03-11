import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400,},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210,},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290,},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000,},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181,},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500,},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100,},
];

export class DBSummary extends Component {





    render(props) {
        const { netCashBalance, netBankBalance, netMobileMoneyBalance, totalBalance } = this.props


        return (
            <div className='right'>
                <br /><br /><br />
                <div className="col-md-4">
                    <h3>Cash Position</h3>
                    <table className='table-striped table'>
                        <thead>
                            <tr>
                                <th>Balance</th>
                                <th>{totalBalance}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='col-md-10'>Cash-In-Hand</td>
                                <td className='col-md-2'>{netBankBalance}</td>
                            </tr>
                            <tr>
                                <td className='col-md-10'>Cash In Bank</td>
                                <td className='col-md-2'>{netMobileMoneyBalance}</td>
                            </tr>
                            <tr>
                                <td className='col-md-10'>Mobile Money</td>
                                <td className='col-md-2'>{netCashBalance}</td>
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
                                data={data}
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
                                data={data}
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
                                data={data}
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
                                data={data}
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
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        )
    }
}

export default DBSummary

