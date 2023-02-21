import axios from "axios";

import { FOLLOWINGS, GET_RANDOM_USER } from "../actionTypes/friendsTypes";


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
