import {createStore, combineReducers} from "redux"
import {PostReduser} from "./postReduser";
import {MessageReducer} from "./messagesReduser";

const reduser = combineReducers({
        PostReduser,
        MessageReducer
    }
)

let store = createStore(reduser);


export default store