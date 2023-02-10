import { FOLLOWINGS } from "../actionTypes/friendsTypes";


const INITIAL_STATE = {
    followings: [],
}


const friendsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FOLLOWINGS: return {...state, followings: action.payload};

        default: return state;
    }
}


export default friendsReducer;