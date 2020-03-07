import React, { Component } from 'react'
import {addContact, removeContact} from '../Redux/Actions/ContactActions'
import { connect } from 'react-redux'


export class Contacts extends Component {

    addContact = e => {
        e.preventDefault()
        let contact = {
            id: Math.random().toString(36).substr(2, 5),
            name: e.target.elements.name.value,
            phoneNumber: e.target.elements.phoneNumber.value,
            email: e.target.elements.email.value,
            address: e.target.elements.address.value,
        }
        this.props.addContact(contact)

    }
    deleteContact = id =>{
        this.props.removeContact(id)
    }

    render() {
        return (
            <div className='contacts'>
                <center><h1>Contacts</h1></center>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div>
                            <form onSubmit={this.addContact}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Full Name" name='name' required />
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="phone" className="form-control" placeholder="Enter Phone Number" name='phoneNumber' required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter Email" name='email' />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Address</label>
                                    <input type="text" className="form-control" name='address' placeholder="Enter Address" />
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
                        {
                            this.props.contacts.map(contact=>{
                                return(
                                    <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.phoneNumber}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.address}</td>
                                    <td><button>Edit</button>     <button onClick={()=>this.deleteContact(contact.id)}>Delete</button></td>
                                </tr>
                                )
                            })
                        }

                   
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        contacts : state.contacts
    }
}

export default connect(mapStateToProps,{addContact, removeContact})(Contacts)
