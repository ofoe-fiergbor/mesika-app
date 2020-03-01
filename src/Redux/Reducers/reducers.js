import RevTranReducer from "./RevTranReducer";
import ExpenseTranReducer from "./ExpenseTranReducer";
import ContactReducer from './ContactReducer'
import { combineReducers } from "redux";


export default combineReducers ({
revenueTransaction: RevTranReducer,
expenseTransaction: ExpenseTranReducer,
contacts: ContactReducer
})
