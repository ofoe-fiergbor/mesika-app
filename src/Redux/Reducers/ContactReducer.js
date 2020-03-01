import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "../Actions/ContactActions";

const ContactReducer = (state=20, action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return [...state, action.payload]
        case EDIT_CONTACT:
            return console.log('edit activated')
        case REMOVE_CONTACT:
            return console.log('contact removed')
        default:
            return state
    }
}

export default ContactReducer