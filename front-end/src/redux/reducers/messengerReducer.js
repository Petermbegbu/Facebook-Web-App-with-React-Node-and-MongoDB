import { GET_CONVERSATIONS, GET_MESSAGES, POST_MESSAGE } from "../actionTypes/messengerTypes";


const INITIAL_STATE = {
    conversations: [],
    messages: []
}


const messengerReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_CONVERSATIONS: return {...state, conversations: action.payload };

        case GET_MESSAGES: return {...state, messages: action.payload };

        case POST_MESSAGE: return {...state, messages: [...state.messages, action.payload] };

        default: return state;
    }

}


export default messengerReducer;