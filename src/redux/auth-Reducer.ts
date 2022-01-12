export type InitialStateType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}


const initialState: InitialStateType = {
    id: 0,
    email: "",
    login: "",
    isAuth: false,

}

type  AllActionType = setUserDataACType

export let authReducer = (state = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":{
            return {...state, ...action.data, isAuth:true}
        }

        default:
            return state
    }
}


type setUserDataACType = {
    type : "SET-USER-DATA"
    data: {
        id: number
        email: string
        login: string

    }
}
export const setUserData = ( id:number,email:string,login:string ) : setUserDataACType  => {
    return{
        type: "SET-USER-DATA",
        data: {
            id,
            email,
            login,

        }
    }
}
