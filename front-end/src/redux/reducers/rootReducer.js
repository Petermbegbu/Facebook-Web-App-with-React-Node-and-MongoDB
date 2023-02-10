import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import postsReducer from "./postReducer";
import friendsReducer from "./friendsReducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth", "posts"]
}


const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    friends: friendsReducer
})

export default  persistReducer(persistConfig, rootReducer);