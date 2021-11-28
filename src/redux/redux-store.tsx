import {createStore, combineReducers} from "redux"
import {PostReduser} from "./postReduser";
import {messageReducer} from "./messagesReduser";
import {dialogReducer} from "./dialogsReducer";


export type storeTypeRedux = ReturnType<typeof reducer>

const reducer = combineReducers({
    messagesPages: messageReducer,
    postPagesData: PostReduser,
    dialogPages: dialogReducer

})

export let store = createStore(reducer);



