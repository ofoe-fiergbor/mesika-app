import React, { Component } from 'react'
import LeftDB from './LeftDB'
import DBExpenses from './DBExpenses'
import DBRevenue from './DBRevenue'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DBSummary from './DBSummary'
import {connect} from 'react-redux'
export class DBIndex extends Component {
    
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
            <BrowserRouter>
                <div className='dbIndex'>
                    <div className="col-md-3">
                        <LeftDB />
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route path='/' exact  render={
                                (props) => <DBSummary {...props} 
                                netCashBalance={netBankBalance}
                                netMobileMoneyBalance={netMobileMoneyBalance} 
                                netBankBalance={netBankBalance} 
                                totalBalance={totalBalance}/>
                            }/>
                            <Route path='/dbexpense'  component={DBExpenses}/>
                            <Route path='/dbrevenue'  component={DBRevenue}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
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
export default connect (mapStateToProps, null) (DBIndex)
