import axios from "axios";

import { GET_CONVERSATIONS } from "../actionTypes/messengerTypes";


export const getConversationsAction = (currentUserId) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/conversation/get/${currentUserId}`);

            console.log(res.data);
            dispatch({type: GET_CONVERSATIONS, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}

