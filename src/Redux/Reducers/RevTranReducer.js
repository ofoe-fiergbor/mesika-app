import { ADD_REVENUE } from "../Actions/RevenueTranAction";

let initialState = [
{saleReference: "pacfa", saleDate: "2020-03-07", pmtMode: "Cash Payment", saleAmount: "100", saleDescription: "MECTIN (ABAMECTIN) 100ML BOTTL", customer:'Wizkid Ayo'},
{saleReference: "padfa", saleDate: "2020-03-07", pmtMode: "Mobile Money", saleAmount: "200", saleDescription: "MECTIN (ABAMECTIN) 100ML BOTTL", customer:'Wizkid Ayo'},
{saleReference: "pacee", saleDate: "2020-03-07", pmtMode: "Bank Transfer", saleAmount: "400", saleDescription: "MECTIN (ABAMECTIN) 100ML BOTTL", customer:'Wizkid Ayo'},
{saleReference: "tzakx", saleDate: "2020-03-07", pmtMode: "Cash Payment", saleAmount: "700", saleDescription: "MECTIN (ABAMECTIN) 100ML BOTTL",  customer:'Wizkid Ayo'}

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
