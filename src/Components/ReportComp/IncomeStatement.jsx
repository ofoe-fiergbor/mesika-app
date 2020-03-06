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
                                <td className='col-md-9'>Cost of Sales</td>
                                <td className='col-md-1 text-center'>(xxx)</td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Gross Profit</b></td>
                                <td className='col-md-1 text-center'><b>xxx</b></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Payments</b></td>
                                <td className='col-md-1 text-center'></td>
                            </tr>
                            
                            <tr>
                                <td className='col-md-9'>Total Payment</td>
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
