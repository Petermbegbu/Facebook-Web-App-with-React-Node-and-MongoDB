import axios from "axios";
import { FOLLOWINGS } from "../actionTypes/friendsTypes";


export const getFollowingsAction = (userId) => {
    return async (dispatch) => {
        try {
            const followings = await axios.get(`/api/user/followings/${userId}`);

            dispatch({type: FOLLOWINGS, payload: followings.data})
        } catch (err) {
            console.log(err);
        }
    }
}


