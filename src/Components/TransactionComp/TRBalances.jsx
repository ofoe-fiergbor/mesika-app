import React, { Component } from 'react'
import { addRevenue } from '../../Redux/Actions/RevenueTranAction'
import { connect } from 'react-redux'



export class TRBalances extends Component {




    render() {
        const formatter = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2 })

        var expArr = this.props.expenseTransaction
        var advertising = 0;
        var agency = 0;
        var bankChrgs = 0
        var rates = 0;
        var electricity = 0;
        var wages = 0;
        var fuel = 0;
        var postage = 0;
        var repairBangalow = 0;
        var repairCommercial = 0;
        var repairMV = 0;
        var rent = 0;
        var staffWelfare = 0;
        var stationery = 0;
        var telephone = 0;
        var transport = 0;
        var water = 0;
        var others = 0;

        for (var x = 0; x < expArr.length; x++) {
            if (expArr[x].expCategory === 'Advertising & Promotion') {
                advertising += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Agency & Labour Cost') {
                agency += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Arrangement Fees & Bank Charges') {
                bankChrgs += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Business Rates, Fees & Licensing') {
                rates += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Electricity') {
                electricity += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Employee Wages') {
                wages += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Fuel Cost") {
                fuel += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Postage & Courier') {
                postage += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Repair & Maintenance-Bangalow") {
                repairBangalow += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Repair & Maintenance-Commercial") {
                repairCommercial += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Repair & Maintenance-Motor Vehicle") {
                repairMV += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Rent") {
                rent += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Staff Welfare") {
                staffWelfare += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Stationery & Printing") {
                stationery += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Telephone, Internet & Computer") {
                telephone += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Transport & Travel") {
                transport += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === 'Water') {
                water += parseFloat(expArr[x].expAmount)
            } else if (expArr[x].expCategory === "Other Expenses") {
                others += parseFloat(expArr[x].expAmount)
            }
        }
        const total =
            this.props.revenueTransaction.reduce((total, sale) => {
                return total + parseFloat(sale.saleAmount)
            }, 0)


        return (
            <div className='right'>
                <center><h1>Balances</h1></center>
                <table className='table table-striped reportTable'>
                    <thead>
                        <tr>
                            <th className='col-md-9'>DESCRIPTION</th>
                            <th className='col-md-3 text-center'>AMOUNT(GHS)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='col-md-9'>Total Sales</td>
                            <td className='col-md-1 text-left'>
                                {formatter.format(total)}
                            </td>
                        </tr><tr>
                            <td className='col-md-9'>Advertising & Promotion</td>
                            <td className='col-md-1 text-center'>{formatter.format(advertising)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Agency & Labour Cost</td>
                            <td className='col-md-1 text-center'>{formatter.format(agency)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Arrangement Fees & Bank Charges</td>
                            <td className='col-md-1 text-center'>{formatter.format(bankChrgs)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Business Rates, Fees & Licensing</td>
                            <td className='col-md-1 text-center'>{formatter.format(rates)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Electricity</td>
                            <td className='col-md-1 text-center'>{formatter.format(electricity)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Employee Wages</td>
                            <td className='col-md-1 text-center'>{formatter.format(wages)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Fuel Cost</td>
                            <td className='col-md-1 text-center'>{formatter.format(fuel)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Postage & Courier</td>
                            <td className='col-md-1 text-center'>{formatter.format(postage)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Repair & Maintenance-Commercial</td>
                            <td className='col-md-1 text-center'>{formatter.format(repairCommercial)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Repair & Maintenance-Bangalow</td>
                            <td className='col-md-1 text-center'>{formatter.format(repairBangalow)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Repair & Maintenance-Motor Vehicle</td>
                            <td className='col-md-1 text-center'>{formatter.format(repairMV)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Rent</td>
                            <td className='col-md-1 text-center'>{formatter.format(rent)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Staff Welfare</td>
                            <td className='col-md-1 text-center'>{formatter.format(staffWelfare)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Stationery & Printing</td>
                            <td className='col-md-1 text-center'>{formatter.format(stationery)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Telephone, Internet & Computer</td>
                            <td className='col-md-1 text-center'>{formatter.format(telephone)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Transport & Travel</td>
                            <td className='col-md-1 text-center'>{formatter.format(transport)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Water</td>
                            <td className='col-md-1 text-center'>{formatter.format(water)}</td>
                        </tr><tr>
                            <td className='col-md-9'>Other Expenses</td>
                            <td className='col-md-1 text-center'>{formatter.format(others)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { revenueTransaction, expenseTransaction } = state
    return {
        revenueTransaction,
        expenseTransaction
    }
}

export default connect(mapStateToProps, { addRevenue })(TRBalances)
