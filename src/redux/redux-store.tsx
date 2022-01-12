import {createStore, combineReducers} from "redux"
import {PostReduser} from "./postReduser";
import {messageReducer} from "./messagesReduser";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-Reducer";


export type RootStateType = ReturnType<typeof reducer>

const reducer = combineReducers({
    messagesPages: messageReducer,
    postPagesData: PostReduser,
    dialogPages: dialogReducer,
    usersPages:usersReducer,
    auth:authReducer,

})

export let store = createStore(reducer);



