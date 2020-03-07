import {ADD_EXPENSE} from '../Actions/ExpenseTranAction'

const initialState=[
    {expDate: 'Jan 16, 2020', id: 87867, expTranDetails: 'Transport to bank', expCategory:'Advertising & Promotion', paymentMode:'Cash-In-Hand', expAmount: 20.00, expVendor:'uber'},
    {expDate: 'Jan 18, 2020', id: 85677, expTranDetails: 'Electricity Prepaid', expCategory:'Advertising & Promotion',  paymentMode:'Cheque Payment', expAmount: 300.00, expVendor:'PDS'},
    {expDate: 'Jan 6, 2020', id: 87657, expTranDetails: 'Courier to Customer at kumasi', expCategory:'Transport & Travel', paymentMode:'Cash-In-Hand', expAmount: 20.00, expVendor:'VIP Courier'},
    {expDate: 'Jan 20, 2020', id: 87767, expTranDetails: 'New Note fullscap book', expCategory:'Stationery & Printing' ,  paymentMode:'Cash-In-Hand', expAmount: 7.00, expVendor:'EPP Book Shop'},
    {expDate: 'Jan 22, 2020', id: 89867, expTranDetails: 'Transport to bank', expCategory:'Transport & Travel', paymentMode:'Cash-In-Hand', expAmount: 20.00, expVendor:'Uber'}
]


function ExpenseTranReducer( state=initialState, action) {
    switch(action.type){
        case ADD_EXPENSE:
            return [...state, action.payload]
        default:
            return state
    }
}

export default ExpenseTranReducer
