import {ADD_EXPENSE} from '../Actions/ExpenseTranAction'

const initialState=[
    // {expDate: 'Jan 16, 2020', id: 87867, expTranDetails: 'Transport to bank', expCategory:'Transport & Travel', paymentMode:'Cash-In-Hand', expAmount: 20.00, expVendor:'uber'},
    // {date: 'Jan 18, 2020', id: 85677, description: 'Electricity Prepaid', category:'Electricity', paymentMethod:'Cheque Payment', amount: 300.00, vendor:'PDS'},
    // {date: 'Jan 6, 2020', id: 87657, description: 'Courier to Customer at kumasi', category:'Transport & Travel',paymentMethod:'Cash-In-Hand', amount: 20.00, vendor:'VIP Courier'},
    // {date: 'Jan 20, 2020', id: 87767, description: 'New Note fullscap book', category:'Stationery & Printing' , paymentMethod:'Cash-In-Hand', amount: 7.00, vendor:'EPP Book Shop'},
    // {date: 'Jan 22, 2020', id: 89867, description: 'Transport to bank', category:'Transport & Travel',paymentMethod:'Cash-In-Hand', amount: 20, vendor:'Uber'}
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
