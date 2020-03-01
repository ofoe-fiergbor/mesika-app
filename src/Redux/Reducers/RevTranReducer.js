import { ADD_REVENUE } from "../Actions/RevenueTranAction";


const RevTranReducer =(state = 0, action)=>{
    switch(action.payload){
        case ADD_REVENUE:
            return [...state, action.payload]
    default:
        return state
    }
}

export default RevTranReducer
