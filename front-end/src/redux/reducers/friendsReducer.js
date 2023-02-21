import { FOLLOWINGS, GET_RANDOM_USER } from "../actionTypes/friendsTypes";


const INITIAL_STATE = {
    followings: [],
    randomUser: null
}


const friendsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FOLLOWINGS: return {...state, followings: action.payload};

        case GET_RANDOM_USER: return {...state, randomUser: action.payload};

        default: return state;
    }
}


export default friendsReducer;