import { ADD_REVENUE } from "../Actions/RevenueTranAction";

let initialState = [
{saleDate:'Jan 1,2020', saleReference:'9eJJH', saleDescription:'Galxy Fold', saleQTY:1, customer:'Wizkid Ayo', saleAmount:2500.00, pmtMode:'Cash Payment'},
{saleDate:'Jan 1,2020', saleReference:'99tJH', saleDescription:'Galxy Fold', saleQTY:1, customer:'Wizkid Ayo', saleAmount:2500.00, pmtMode:'Cash Payment'},
{saleDate:'Jan 1,2020', saleReference:'98JJH', saleDescription:'Galxy Fold', saleQTY:1, customer:'Wizkid Ayo', saleAmount:2500.00, pmtMode:'Cash Payment'},
{saleDate:'Jan 1,2020', saleReference:'99pJH', saleDescription:'Galxy Fold', saleQTY:1, customer:'Wizkid Ayo', saleAmount:2500.00, pmtMode:'Cash Payment'},
]

const RevTranReducer =(state = initialState, action)=>{
    switch(action.type){
        case ADD_REVENUE:
            
            return (
                [...state, action.payload]
                )
    default:
        return state
    }
}

export default RevTranReducer
