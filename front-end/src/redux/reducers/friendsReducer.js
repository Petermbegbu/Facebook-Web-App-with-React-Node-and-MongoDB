import { FOLLOWINGS, GET_RANDOM_USER, GET_ALL_USERS, GET_FIND_FRIENDS } from "../actionTypes/friendsTypes";


const INITIAL_STATE = {
    followings: [],
    randomUser: null,
    allUsers: [],
    findFriends: []
}


const friendsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case FOLLOWINGS: return {...state, followings: action.payload};

        case GET_RANDOM_USER: return {...state, randomUser: action.payload};

        case GET_ALL_USERS: return {...state, allUsers: action.payload};

        case GET_FIND_FRIENDS: return {...state, findFriends: action.payload};

        default: return state;
    }
}


export default friendsReducer;