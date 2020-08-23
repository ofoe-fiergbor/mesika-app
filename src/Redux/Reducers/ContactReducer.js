import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACT } from "../Actions/ContactActions";


let initialState = [
    {name:'James Black', phoneNumber: '0867546789', email:'ofoefierbor16@gmail.com', address:'jiji jijj', id:'XHGT'},
    {name:'James Black', phoneNumber: '0867546789', email:'ofoefierbor16@gmail.com',address:'jiji jijj' , id:'XHhT'},
]

const ContactReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_CONTACT:
            return [action.contact, ...state]
        case EDIT_CONTACT:
            return console.log('edit activated')
        case REMOVE_CONTACT:
            let contact = state.filter(item => {
                return item.id !== action.id
            })
            return contact;

        default:
            return state
    }
}

export default ContactReducer