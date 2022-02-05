import {createStore, combineReducers, applyMiddleware} from "redux"
import {PostReduser} from "./postReduser";
import {messageReducer} from "./messagesReduser";
import {dialogReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {AllActionType, authReducer} from "./auth-Reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

export type RootStateType = ReturnType<typeof reducer>
export type AllActionReduxType = AllActionType

const reducer = combineReducers({
    messagesPages: messageReducer,
    postPagesData: PostReduser,
    dialogPages: dialogReducer,
    usersPages: usersReducer,
    auth: authReducer,
    form: formReducer,

})

export let store = createStore(reducer, applyMiddleware(thunkMiddleware));



