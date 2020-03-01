import {ADD_EXPENSE} from '../Actions/ExpenseTranAction'



function ExpenseTranReducer( state=0, action) {
    switch(action.payload){
        case ADD_EXPENSE:
            return [...state, action.payload]
        default:
            return state
    }
}

export default ExpenseTranReducer
