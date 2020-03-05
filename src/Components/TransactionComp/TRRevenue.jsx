import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRevenue } from '../../Redux/Actions/RevenueTranAction'

export class TRRevenue extends Component {

    handleRevenueSubmit = e => {
        e.preventDefault()
        let sale = {
            saleReference: Math.random().toString(36).substr(2, 5),
            saleDate: e.target.elements.saleDate.value,
            pmtMode: e.target.elements.pmtMode.value,
            // saleAmount: e.target.elements.saleAmount.value,
            saleDescription: e.target.elements.saleDescription.value,
            saleQTY: e.target.elements.saleQTY.value,
            customer: e.target.elements.customer.value,
        }
        this.props.addRevenue(sale)

    }
    render() {
        return (
            <div className='right container'>
                <h2>Add Sales Transaction</h2>
                <hr />
                <div className="row ">
                    <form onSubmit={this.handleRevenueSubmit}>

                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" className="form-control" placeholder="Date" name='saleDate' required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Mode of Payment</label>
                                    <select className="form-control" name='pmtMode' required>
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
                                <div className="form-group">
                                    <label>Product</label>
                                    <input list='products' className="form-control" required placeholder='Product Classificaiton' name='saleDescription' />
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
                                    <input type="number" className="form-control" placeholder="QTY" required min="0" max="100000" step="1" name='saleQTY' />
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="form-group">
                                    <label>Customer Name/Other Tags</label>
                                    <input type="text" className="form-control" placeholder="Customer Name/Other Tags" name='customer' required maxlength='10' />
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
                        <caption>Revenue</caption>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Reference</th>
                                <th>Description</th>
                                <th>Customer</th>
                                <th>QTY</th>
                                <th>Amount(GHS)</th>
                                <th>Payment Mode</th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                this.props.sales.map(sale => {
                                    return (
                                        <tr key={sale.saleReference}>
                                            <td>{sale.saleDate}</td>
                                            <td className='id'>{sale.saleReference}</td>
                                            <td>{sale.saleDescription}</td>
                                            <td>{sale.customer}</td>
                                            <td>{sale.saleQTY}</td>
                                            <td>XXX</td>
                                            <td>{sale.pmtMode}</td>
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
        sales: state.revenueTransaction
    }
}

export default connect(mapStateToProps, { addRevenue })(TRRevenue)
