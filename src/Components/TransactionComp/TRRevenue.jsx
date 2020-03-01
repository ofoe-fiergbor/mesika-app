import React, { Component } from 'react'

export class TRRevenue extends Component {
    render() {
        return (
            <div className='right container'>
                <h2>Add Sales Transaction</h2>
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
                                        <option>Cash Payment</option>
                                        <option>Cheque Payment</option>
                                        <option>Bank Transfer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div class="form-group">
                                    <label>Product</label>
                                    <input list='products' class="form-control" required placeholder='Product Classificaiton' />
                                    <datalist id='products'>
                                        <option>Iphone 7</option>
                                        <option>Iphone 7 Case</option>
                                        <option>Iphone 7 Plus Case</option>
                                        <option>Iphone 7 Plus</option>
                                        <option>Iphone 11</option>
                                        <option>Iphone 11 Case</option>
                                        <option>Iphone 11 Pro</option>
                                        <option>Iphone 11 Pro Case</option>
                                        <option>Iphone 11 Pro Max</option>
                                        <option>Iphone 11 Pro Max Case</option>
                                        <option>Iphone 8</option>
                                        <option>Iphone 8 Case</option>
                                        <option>Iphone 8 Plus Case</option>
                                        <option>Iphone X</option>
                                        <option>Iphone X Case</option>
                                        <option>Iphone xs</option>
                                        <option>Iphone xs Max</option>
                                        <option>Samsung Galaxy A30s</option>
                                        <option>Samsung Galaxy A30s Case</option>
                                        <option>Samsung Galaxy A50s</option>
                                        <option>Samsung Galaxy A50s Case</option>
                                        <option>Samsung Galaxy Fold</option>
                                        <option>Samsung Galaxy Fold</option>
                                        <option>Samsung Galaxy Fold Case</option>
                                        <option>Samsung Galaxy Note 10</option>
                                        <option>Samsung Galaxy Note 10 Case</option>
                                        <option>Samsung Galaxy Note 10+</option>
                                        <option>Samsung Galaxy Note 10+ Case</option>
                                        <option>Samsung Galaxy Note 9</option>
                                        <option>Samsung Galaxy Note 9 Case</option>
                                        <option>Samsung Galaxy S20 Neutral</option>
                                        <option>Samsung Galaxy S20 Neutral Case</option>
                                        <option>Samsung Galaxy S20+</option>
                                        <option>Samsung Galaxy S20+ Case</option>
                                        <option>Samsung Galaxy Z Flip</option>
                                        <option>Samsung Galaxy Z Flip Case</option>
                                        <option>Gorilla Screen Protector</option>
                                        <option>Nano Screen Protector</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="form-group">
                                    <label>QTY</label>
                                    <input type="number" className="form-control" placeholder="QTY" required  min="0" max="100000" step="1" />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Customer Name/Other Tags</label>
                                    <input type="text" className="form-control" placeholder="Customer Name/Other Tags" required />
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
                    <table class="table table-striped" >
                        <caption>Revenue</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference</th>
                                <th>Description</th>
                                <th>Customer</th>
                                <th>Amount(GHS)</th>
                                <th>Payment Mode</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td>Jan 1,2020</td>
                                <td>28779</td>
                                <td>Cement:3 Bags</td>
                                <td>Francis Sam</td>
                                <td>2,500.00</td>
                                <td>Cash Payment</td>
                            </tr>
                            <tr>
                                <td>Jan 1,2020</td>
                                <td>28780</td>
                                <td>3d Tiles:5 boxes</td>
                                <td>Sandra Ofosu</td>
                                <td>800.00</td>
                                <td>Cheque Payment</td>
                            </tr>
                            <tr>
                                <td>Jan 2,2020</td>
                                <td>28781</td>
                                <td>Roofing Sheet</td>
                                <td>Malik Scott</td>
                                <td>2,000.00</td>
                                <td>Bank Payment</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TRRevenue
