import axios from "axios";

import { SIGN_IN_START, SIGN_IN_FAILED, SIGN_IN_SUCCESS, 
    LOG_OUT, GET_CURRENT_USER, FOLLOW, UNFOLLOW} from "../actionTypes/authTypes";



export const loginAction = (userCredentials) => {

    return async (dispatch) => {
        //first we dispatch the sign_in_start action
        dispatch({type: SIGN_IN_START});

        try{
            //Secondly we post the user credentials in the database to check if the user exist
            const res = await axios.post("/api/auth/signin", userCredentials);
            
            dispatch({type: SIGN_IN_SUCCESS, payload: res.data});
        } catch (err){
            dispatch({type: SIGN_IN_FAILED, payload: err});
        }
    }
}



export const getCurrentUserAction = (userID) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/user/get/${userID}`);

            dispatch({type: GET_CURRENT_USER, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}


export const followAction = (friendId) => {
    return async (dispatch, getState) => {
        const currentUser = getState().auth.user;

        try {
            await axios.put(`/api/user/follow/${friendId}`, {userId: currentUser._id});

            dispatch({type: FOLLOW, payload: friendId})
        } catch (err) {
            console.log(err);
        }
    }
}


export const unFollowAction = (friendId) => {
    return async (dispatch, getState) => {
        const currentUser = getState().auth.user;

        try {
            await axios.put(`/api/user/unfollow/${friendId}`, {userId: currentUser._id});

            dispatch({type: UNFOLLOW, payload: friendId})
        } catch (err) {
            console.log(err)
        }
    }
}