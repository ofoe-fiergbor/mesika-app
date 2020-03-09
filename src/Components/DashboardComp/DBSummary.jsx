import React, { Component } from 'react'
import { connect } from 'react-redux'

export class DBSummary extends Component {
  



    render() {

        var revArr = this.props.revenueTransaction
        var expArr = this.props.expenseTransaction
        // console.log(expArr)


        var cashPmt = 0;
        var mobileMoney = 0;
        var bankTransfer = 0;
        for (var i =0; i<revArr.length; i++) {
            if (revArr[i].pmtMode=== 'Cash Payment') {
                cashPmt += parseFloat(revArr[i].saleAmount)
            }else if (revArr[i].pmtMode ==='Mobile Money') {
                mobileMoney += parseFloat(revArr[i].saleAmount)
            }else{
                bankTransfer += parseFloat(revArr[i].saleAmount)
            }
        }
        var expCashPmt = 0;
        var expMobileMoney = 0;
        var expBankTransfer = 0;
        for (var e =0; e<expArr.length; e++) {
            if (expArr[e].paymentMode === "Cash-In-Hand") {
                expCashPmt += parseFloat(expArr[e].expAmount)
            }else if (expArr[e].paymentMode ==='Mobile Money') {
                expMobileMoney += parseFloat(expArr[e].expAmount)
            }else{
                expBankTransfer += parseFloat(expArr[e].expAmount)
            }
        }

        const netCashBalance = cashPmt - expCashPmt;
        const netMobileMoneyBalance = mobileMoney - expMobileMoney;
        const netBankBalance = bankTransfer - expBankTransfer
        const totalBalance = netBankBalance + netMobileMoneyBalance + netCashBalance
        

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
const mapStateToProps = (state) => {
    const { expenseTransaction, revenueTransaction } = state
    return {
        expenseTransaction,
        revenueTransaction
    }
}

export default connect(mapStateToProps, null)(DBSummary)

