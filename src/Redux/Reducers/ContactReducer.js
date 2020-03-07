import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "../Actions/ContactActions";


let initialState = [
    {name:'James Black', phoneNumber: '0867546789', email:'ofoefierbor16@gmail.com', id:'XHGT'}
]

const ContactReducer = (state=initialState, action)=>{
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