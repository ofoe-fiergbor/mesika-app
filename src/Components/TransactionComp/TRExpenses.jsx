import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addExpense} from '../../Redux/Actions/ExpenseTranAction'



export class TRExpenses extends Component {

    handleAddExpense= e =>{
        e.preventDefault()
        let expense = {
            id: Math.random().toString(36).substr(2, 5),
            expDate:e.target.elements.expDate.value,
            paymentMode:e.target.elements.paymentMode.value,
            expAmount:e.target.elements.expAmount.value,
            expCategory:e.target.elements.expCategory.value,
            expTranDetails:e.target.elements.expTranDetails.value,
            expVendor:e.target.elements.expVendor.value,
        }
        this.props.addExpense(expense)

    }
    render() {
        return (
            <div className='right container'>
                <h2>Add Expenses</h2>
                <hr />
                <div className="row ">
                    <form onSubmit={this.handleAddExpense}>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" className="form-control" name='expDate' placeholder="Date" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Mode of Payment</label>
                                    <select className="form-control" name='paymentMode' required>
                                        <option>Cash-In-Hand</option>
                                        <option>Cheque/Bank Transfer Payment</option>
                                        <option>Mobile Money</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Amount(GHS)</label>
                                    <input type="number" max="1000000.00" step="0.01" className="form-control" name='expAmount' placeholder="Amount" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Category</label>
                                    <input list='expense-categories' className="form-control" name='expCategory' required placeholder='Expense Classificaiton' />
                                    <datalist id='expense-categories'>
                                        <option>Advertising & Promotion</option>
                                        <option>Agency & Labour Cost</option>
                                        <option>Arrangement Fees & Bank Charges</option>
                                        <option>Business Rates, Fees & Licensing</option>
                                        <option>Electricity</option>
                                        <option>Employee Wages</option>
                                        <option>Fuel Cost</option>
                                        <option>Other Expenses</option>
                                        <option>Postage & Courier</option>
                                        <option>Repair & Maintenance-Bangalow</option>
                                        <option>Repair & Maintenance-Commercial</option>
                                        <option>Repair & Maintenance-Motor Vehicle</option>
                                        <option>Rent</option>
                                        <option>Staff Welfare</option>
                                        <option>Stationery & Printing</option>
                                        <option>Telephone, Internet & Computer</option>
                                        <option>Transport & Travel</option>
                                        <option>Water</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-7">
                                <div className="form-group">
                                    <label>Description</label>
                                    <input type="text" className="form-control" name='expTranDetails' placeholder="Enter Transaction Details" required maxLength='25'/>
                                </div>
                            </div><div className="col-md-2">
                                <div className="form-group">
                                    <label>Vender/Other Tags</label>
                                    <input type="text" className="form-control" name='expVendor' placeholder="Vendor/Other Tags" required />
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <center>
                            <button type="submit" className="btn btn-default post">Post</button>
                        </center>
                    </form>
                </div>
                <hr />
                <div className="row tableRow">
                    <table className="table table-striped" >
                        <caption>Expenses</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference</th>
                                <th>Description</th>
                                <th>Vendor</th>
                                <th>Category</th>
                                <th>Payment Method</th>
                                <th>Amount(GHS)</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.props.expenses.map(expense=> {
                                    return (
                                        <tr key={expense.id}>
                                            <td>{expense.expDate}</td>
                                            <td className='id'>{expense.id}</td>
                                            <td>{expense.expTranDetails}</td>
                                            <td>{expense.expVendor}</td>
                                            <td>{expense.expCategory}</td>
                                            <td>{expense.paymentMode}</td>
                                            <td className='text-center'>{expense.expAmount}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenseTransaction
    }
}

export default connect(mapStateToProps,{addExpense})(TRExpenses)
