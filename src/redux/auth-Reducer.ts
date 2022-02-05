import {authApi} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AllActionReduxType, RootStateType} from "./redux-store";

export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState: InitialStateType = {
    id: null,
    email: "",
    login: "",
    isAuth: false,

}

export type  AllActionType = setUserDataACType

export let authReducer = (state = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {...state, ...action.payload, isAuth: true}
        }

        default:
            return state
    }
}


type setUserDataACType = {
    type: "SET-USER-DATA"
    payload: {
        id: number | null
        email: string | null
        login: string | null
        isAuth: boolean

    }
}
export const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => {
    return {
        type: "SET-USER-DATA",
        payload: {
            id,
            email,
            login,
            isAuth,
        }
    }
}
type DispatchType = Dispatch<AllActionType>
export const logAuthUserTC = () => {
    return (dispatch: DispatchType) => {
        authApi.getAuthMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setUserData(id, email, login, true))
                }
            })
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, RootStateType, unknown, AllActionReduxType> => {
    return (dispatch) => {
        authApi.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(logAuthUserTC())
                }
            })
    }
}
export const logOutTC = () => {
    return (dispatch: DispatchType) => {
           authApi.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserData(null, null, null, false))
                }
            })
    }
}















