import axios from "axios";

import { PROFILE_POSTS, TIMELINE_POSTS } from "../actionTypes/postTypes";


export const getProfilePostsAction = (userID) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/post/get/profile/${userID}`);

            dispatch({type: PROFILE_POSTS, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}


export const getTimelinePostsAction = (userID) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/post/get/timeline/${userID}`);

            dispatch({type: TIMELINE_POSTS, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}


