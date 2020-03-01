import React, { Component } from 'react'

export class IncomeStatement extends Component {
    render() {
        return (
            <div>
                <div className='right'>
                    <center><h2 className='report'>STATEMENT OF CASH RECEIPTS AND PAYMENTS </h2></center>
                    <table className='table table-striped reportTable'>
                        <thead>
                            <tr>
                                <th className='col-md-9'>DESCRIPTION</th>
                                <th className='col-md-3 text-center'>AMOUNT(GHS'000)</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                            <tr>
                                <td className='col-md-9'><b>Receipts</b></td>
                                <td className='col-md-1 text-center'></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'>Sales Receipts</td>
                                <td className='col-md-1 text-center'>xxx</td>
                            </tr>
                            <tr>
                                <td className='col-md-9'>Other Receipts</td>
                                <td className='col-md-1 text-center'>xxx</td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Total Receipts</b></td>
                                <td className='col-md-1 text-center'><b>xxx</b></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Payments</b></td>
                                <td className='col-md-1 text-center'></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'>Advertising & Promotion</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Agency & Labour Cost</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Arrangement Fees & Bank Charges</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Business Rates</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Electricity</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Employee Wages</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Postage & Courier</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Repair & Maintenance-Commercial</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Repair & Maintenance-Motor Vehicle</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Rent</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Staff Welfare</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Stationery & Printing</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Telephone, Internet & Computer</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Transport & Travel</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr><tr>
                                <td className='col-md-9'>Water</td>
                                <td className='col-md-1 text-left'>xxx</td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Total Payment</b></td>
                                <td className='col-md-1 text-center'><b>(xxx)</b></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Net Receipt</b></td>
                                <td className='col-md-1 text-center'><b>xxx</b></td>
                            </tr>
                            <br/><br/>


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default IncomeStatement
