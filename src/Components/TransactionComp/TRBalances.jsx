import React, { Component } from 'react'

export class TRBalances extends Component {
    render() {
        return (
            <div className='right'>
                <center><h1>Balances</h1></center>
                <table className='table table-striped reportTable'>
                    <thead>
                        <tr>
                            <th className='col-md-9'>DESCRIPTION</th>
                            <th className='col-md-3 text-center'>AMOUNT(GHS'000)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='col-md-9'>Total Sales</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Advertising & Promotion</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Agency & Labour Cost</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Arrangement Fees & Bank Charges</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Business Rates, Fees & Licensing</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Electricity</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Employee Wages</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Postage & Courier</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Repair & Maintenance-Commercial</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Repair & Maintenance-Motor Vehicle</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Rent</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Staff Welfare</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Stationery & Printing</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Telephone, Internet & Computer</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Transport & Travel</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><tr>
                            <td className='col-md-9'>Water</td>
                            <td className='col-md-1 text-center'>xxx</td>
                        </tr><br/><br/>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TRBalances
