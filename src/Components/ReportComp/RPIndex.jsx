import React, { Component } from 'react'
import LeftRP from './LeftRP'
import IncomeStatement from './IncomeStatement'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Chart from './Chart'
import { connect } from 'react-redux'



export class RPIndex extends Component {
    render() {
        const totalSales = this.props.revenueTransaction.reduce((total, sale)=>{
            return total + parseFloat(sale.saleAmount)
        }, 0)
        const cos = 98760
        const totalExpense = this.props.expenseTransaction.reduce((total, expense) => {
            return total + parseFloat(expense.expAmount)
        }, 0)
        
        const grossProfit = totalSales - cos
        const netReceipt = grossProfit - totalExpense


        return (
            <BrowserRouter>
                <div className="col-md-3">
                    <LeftRP />
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route path='/reports' render={
                            (props)=> <IncomeStatement totalSales={totalSales}
                            cos = {cos} grossProfit = {grossProfit} totalExpense={totalExpense}
                            netReceipt={netReceipt}/>
                        }
                         />
                        <Route path='/chart' component={Chart} />
                    </Switch>
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

export default connect (mapStateToProps, null)(RPIndex)
