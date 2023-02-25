import axios from "axios";

import { GET_CONVERSATIONS, GET_MESSAGES, POST_MESSAGE } from "../actionTypes/messengerTypes";


export const getConversationsAction = (currentUserId) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/conversation/get/${currentUserId}`);

            dispatch({type: GET_CONVERSATIONS, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}


export const getMessagesAction = (id) => {
    return async (dispatch) => {
        try{
            const res = await axios.get(`/api/message/get/${id}`);

            dispatch({type: GET_MESSAGES, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}


export const postMessageAction = (chatMessage) => {
    return async (dispatch) => {
        try{
            const res = await axios.post(`/api/message/create`, chatMessage);

            dispatch({type: POST_MESSAGE, payload: res.data});
        } catch (err){
            console.log("Error Occured", err)
        }
    }
}
