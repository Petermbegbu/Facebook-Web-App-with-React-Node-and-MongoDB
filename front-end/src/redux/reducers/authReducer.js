import { SIGN_IN_START, SIGN_IN_FAILED, SIGN_IN_SUCCESS, LOG_OUT, 
    GET_CURRENT_USER, FOLLOW, UNFOLLOW, UPDATE_USER } from "../actionTypes/authTypes";

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    isSignedIn: false,
    error: ""
}

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SIGN_IN_START: return {...state, isSignedIn: false, user: null, error: false, isFetching: true};

        case SIGN_IN_FAILED: 
            return {...state, isSignedIn: false, user: null, error: action.payload.response.data, isFetching: false};

        case SIGN_IN_SUCCESS: return {...state, isSignedIn: true, user: action.payload, error: false, isFetching: false};

        case LOG_OUT: return {...state, isSignedIn: false, user: action.payload};

        case GET_CURRENT_USER: return {...state, isSignedIn: action.payload ? true : false, user: action.payload,};

        case UPDATE_USER: return {...state, user: action.payload};

        case FOLLOW: return {
            ...state, 
            user: {
                ...state.user,
                followings: [...state.user.followings, action.payload]
            }
        };

        case UNFOLLOW: return {
            ...state,
            user: {
                ...state.user,
                followings: state.user.followings.filter(following => following !== action.payload)
            }
        }

        default: return state;
    }
}

export default authReducer;