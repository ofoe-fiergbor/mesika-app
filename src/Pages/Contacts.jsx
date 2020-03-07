import React, { Component } from 'react'

export class Contacts extends Component {
    render() {
        return (
            <div className='contacts'>
                <center><h1>Contacts</h1></center>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div>
                            <form>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="phone" className="form-control" placeholder="Enter Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="emal" className="form-control" placeholder="Enter Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" placeholder="Enter Address" />
                                </div>
                                <button type="submit" className="btn btn-default">Add Contact</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <hr />
                <table className='table table-striped reportTable'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>James Bond</td>
                            <td>038736362</td>
                            <td>Email@gmail.com</td>
                            <td>Nyanyra st. Accra-North</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                        <tr>
                            <td>James Bond</td>
                            <td>038736362</td>
                            <td>Email@gmail.com</td>
                            <td>Nyanyra st. Accra-North</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr><tr>
                            <td>James Bond</td>
                            <td>038736362</td>
                            <td>Email@gmail.com</td>
                            <td>Nyanyra st. Accra-North</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contacts
