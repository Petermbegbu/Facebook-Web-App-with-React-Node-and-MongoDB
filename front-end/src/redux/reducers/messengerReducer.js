import { GET_CONVERSATIONS } from "../actionTypes/messengerTypes";


const INITIAL_STATE = {
    conversations: [],
}


const messengerReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case GET_CONVERSATIONS: return {...state, conversations: action.payload };

        default: return state;
    }

}


export default messengerReducer;