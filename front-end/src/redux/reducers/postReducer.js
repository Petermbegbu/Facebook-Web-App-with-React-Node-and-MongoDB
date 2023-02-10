import { PROFILE_POSTS, TIMELINE_POSTS } from "../actionTypes/postTypes";


const INITIAL_STATE = {
    profilePosts: [],
    timelinePosts: []
}


const postReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case PROFILE_POSTS: return {...state, profilePosts: action.payload };

        case TIMELINE_POSTS: return {...state, timelinePosts: action.payload};

        default: return state;
    }

}


export default postReducer;