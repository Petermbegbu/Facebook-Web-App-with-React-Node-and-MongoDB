import {combineReducers} from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./authReducer";
import postsReducer from "./postReducer";
import friendsReducer from "./friendsReducer";
import messengerReducer from "./messengerReducer";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["auth", "posts", "friends", "messengerReducer"]
}


const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    friends: friendsReducer,
    messenger: messengerReducer
})

export default  persistReducer(persistConfig, rootReducer);