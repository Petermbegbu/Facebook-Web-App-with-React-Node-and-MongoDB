import axios from "axios";

import { SIGN_IN_START, SIGN_IN_FAILED, SIGN_IN_SUCCESS, LOG_OUT, GET_CURRENT_USER} from "../actionTypes/authTypes";



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
