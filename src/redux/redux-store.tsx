import {createStore, combineReducers, applyMiddleware} from "redux"
import {PostReduser} from "./postReduser";
import {messageReducer} from "./messagesReduser";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./auth-Reducer";
import thunkMiddleware from "redux-thunk"


export type RootStateType = ReturnType<typeof reducer>

const reducer = combineReducers({
    messagesPages: messageReducer,
    postPagesData: PostReduser,
    dialogPages: dialogReducer,
    usersPages:usersReducer,
    auth:authReducer,

})

export let store = createStore(reducer,applyMiddleware(thunkMiddleware));



