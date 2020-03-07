import React, { Component } from 'react'
import { connect } from 'react-redux'



export class IncomeStatement extends Component {



    render() {
        const totalSales = this.props.revenueTransaction.reduce((total, sale)=>{
            return total + parseFloat(sale.saleAmount)
        }, 0)
        const cos = 500
        const totalExpense = this.props.expenseTransaction.reduce((total, expense) => {
            return total + parseFloat(expense.expAmount)
        }, 0)
        
        const grossProfit = totalSales - cos
        const netReceipt = grossProfit - totalExpense

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

const mapStateToProps = (state) => {
    const { expenseTransaction, revenueTransaction } = state
    return {
        expenseTransaction,
        revenueTransaction
}
}

export default connect(mapStateToProps, null)(IncomeStatement)
