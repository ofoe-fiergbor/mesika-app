import {ADD_EXPENSE} from '../Actions/ExpenseTranAction'

const initialState=[
    {id: "klnlo", expDate: "2020-03-06", paymentMode: "Cash-In-Hand", expAmount: "100", expCategory: "Advertising & Promotion", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klnfo", expDate: "2020-03-06", paymentMode: "Cheque/Bank Transfer Payment", expAmount: "200", expCategory: "Agency & Labour Cost", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klngo", expDate: "2020-03-06", paymentMode: "Mobile Money", expAmount: "300", expCategory: "Arrangement Fees & Bank Charges", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klngo", expDate: "2020-03-06", paymentMode: "Mobile Money", expAmount: "100", expCategory: "Business Rates, Fees & Licensing", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klngo", expDate: "2020-03-06", paymentMode: "Mobile Money", expAmount: "140", expCategory: "Electricity", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klngo", expDate: "2020-03-06", paymentMode: "Mobile Money", expAmount: "500", expCategory: "Employee Wages", expTranDetails: 'Transport to bank', expVendor:'Uber'},
    {id: "klngo", expDate: "2020-03-06", paymentMode: "Mobile Money", expAmount: "500", expCategory: "Postage & Courier", expTranDetails: 'Transport to bank', expVendor:'Uber'},
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
