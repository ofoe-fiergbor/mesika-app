import React, { Component } from 'react'



export class IncomeStatement extends Component {



    render(props) {
        const {totalExpense, totalSales, cos, netReceipt, grossProfit} = this.props
        return (
            <div>
                <div className='right'>
                    <center><h2 className='report'>STATEMENT OF RECEIPTS AND PAYMENTS </h2></center>
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
                                <td className='col-md-9'>Receipts</td>
                                <td className='col-md-1 text-center'>{totalSales}</td>
                            </tr>
                           
                            <tr>
                                <td className='col-md-9'><b>Total Receipts</b></td>
                                <td className='col-md-1 text-center'><b>{totalSales}</b></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'>Cost of Sales</td>
                                <td className='col-md-1 text-center'>{cos}</td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Gross Profit</b></td>
                                <td className='col-md-1 text-center'><b>{grossProfit}</b></td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Payments</b></td>
                                <td className='col-md-1 text-center'></td>
                            </tr>

                            <tr>
                                <td className='col-md-9'>Total Payment</td>
                                <td className='col-md-1 text-center'>
                                    {totalExpense}
                                </td>
                            </tr>
                            <tr>
                                <td className='col-md-9'><b>Net Receipt</b></td>
                                <td className='col-md-1 text-center'><b>{netReceipt}</b></td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}



export default IncomeStatement
