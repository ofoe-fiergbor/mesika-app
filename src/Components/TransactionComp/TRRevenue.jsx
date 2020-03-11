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
            saleAmount: e.target.elements.saleAmount.value,
            saleDescription: e.target.elements.saleDescription.value,
            // saleQTY: e.target.elements.saleQTY.value,
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
                                        <option>Mobile Money</option>
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
                                        <option>ESEREWURA GLYPHOSATE 20LT</option>
                                        <option>MECTIN (ABAMECTIN) 100ML BOTTL</option>
                                        <option>ORIZON EC IN 200ML</option>
                                        <option>DIZ-PYRIFOS 480 EC 1 LT</option>
                                        <option>DIZ-PYRIFOS 480 EC 250ML</option>
                                        <option>SEED POWER 44WS 10G PACK</option>
                                        <option>SEED POWER 44WS 1KILO PACK</option>
                                        <option>TRIGGER10CS 100M</option>
                                        <option>VICTORY 72WP - 1KG</option>
                                        <option>JMS ORGANIC STYLET OIL 1LT</option>
                                        <option>JMS ORGANIC STYLET OIL 15</option>
                                        <option>JMS ORGANIC STYLET OIL 5LT</option>
                                        <option>AGRI M40 FERTILIZER 1000L</option>
                                        <option>AGRI M40 FERTILIZER 250L</option>
                                        <option>IDROL - VEG DA AGRIC FERTILIZE</option>
                                        <option>TECAMIN ALGAE 1LT</option>
                                        <option>TECAMIN MAX 1L</option>
                                        <option>TECAMIN MAX 1LT PFJ</option>
                                        <option>TECAMIN MAX 500ML</option>
                                        <option>TECNOKEL AMINO CAB 1LT</option>
                                        <option>TECNOKEL AMINO FE 1LT</option>
                                        <option>TECNOKEL AMINO MG 1LT</option>
                                        <option>TECNOKEL AMINO MIX 1L</option>
                                        <option>CONTROLPHYT CU 250ML</option>
                                        <option>TECNOPHYT PH 1L</option>
                                        <option>CONTROLPHYT PK 1L</option>
                                        <option>CONTROLPHYT PK 20LT</option>
                                    </datalist>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Amount</label>
                                    <input type="number" className="form-control" placeholder="Amount Paid" required min="0" max="100000" step="0.01" name='saleAmount' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Customer Name/Other Tags</label>
                                    <input type="text" className="form-control" placeholder="Customer Name/Other Tags" name='customer' required maxLength='25' />
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
                                {/* <th>QTY</th> */}
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
                                            {/* <td>{sale.saleQTY}</td> */}
                                            <td >{sale.saleAmount}</td>
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
