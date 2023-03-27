import axios from "axios";

import { FOLLOWINGS, GET_RANDOM_USER, GET_ALL_USERS, GET_FIND_FRIENDS } from "../actionTypes/friendsTypes";


export const getFollowingsAction = (userId) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/user/followings/${userId}`);

            dispatch({type: FOLLOWINGS, payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }
}


export const getRandomUserAction = (userId) => {

    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/user/get/${userId}`);

            console.log(res.data)
            dispatch({type: GET_RANDOM_USER, payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }
}


export const getAllUsersAction = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`/api/user/all`);

            dispatch({type: GET_ALL_USERS, payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }
}


export const getFindFriendsAction = () => {
    return async (dispatch, getState) => {
        const currentUser = getState().auth.user;

        try {
            const res = await axios.get(`/api/user/find-friends/${currentUser._id}`);

            dispatch({type: GET_FIND_FRIENDS, payload: res.data})
        } catch (err) {
            console.log(err);
        }
    }
}