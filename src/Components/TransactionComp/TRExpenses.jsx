import React, { Component } from 'react'

export class TRExpenses extends Component {
    render() {
        return (
            <div className='right container'>
                <h2>Add Expenses</h2>
                <hr />
                <div className="row ">
                    <form>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" className="form-control" placeholder="Date" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label>Mode of Payment</label>
                                    <select class="form-control" required>
                                        <option>Cash-In-Hand</option>
                                        <option>Bank Transfer</option>
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
                                    <input type="number" min="0.00" max="100000.00" step="0.01" className="form-control" placeholder="Amount" required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div class="form-group">
                                    <label>Category</label>
                                    <input list='expense-categories' class="form-control" required placeholder='Expense Classificaiton'/>
                                    <datalist id='expense-categories'>
                                        <option>Advertising & Promotion</option>
                                        <option>Agency & Labour Cost</option>
                                        <option>Arrangement Fees & Bank Charges</option>
                                        <option>Business Rates</option>
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
                                    <input type="text" className="form-control" placeholder="Enter Transaction Details" required />
                                </div>
                            </div><div className="col-md-2">
                                <div className="form-group">
                                    <label>Vender/Other Tags</label>
                                    <input type="text" className="form-control" placeholder="Vendor/Other Tags" required />
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
                            <tr>
                                <td>Jan 1,2020</td>
                                <td>2xx89</td>
                                <td>Transport to Bank</td>
                                <td>Uber Ghana</td>
                                <td>Transport & Travel</td>
                                <td>Cash-In-Hand</td>
                                <td>80.00</td>
                            </tr>
                            <tr>
                                <td>Jan 1,2020</td>
                                <td>2xx59</td>
                                <td>Lunch for Guest</td>
                                <td>Baritas</td>
                                <td>Advertising & Promotion</td>
                                <td>Cash-In-Hand</td>
                                <td>70.00</td>
                            </tr>
                            <tr>
                                <td>Jan 3,2020</td>
                                <td>2xx65</td>
                                <td>Electrity Bill</td>
                                <td>PDS</td>
                                <td>Electricity</td>
                                <td>Bank Payment</td>
                                <td>800.00</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TRExpenses
