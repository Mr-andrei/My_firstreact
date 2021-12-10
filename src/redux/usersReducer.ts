type PlaceType = {
    country: string
    city: string
}
export type PersonType = {
    id: number
    follow: boolean
    name: string
    status: string
    place: PlaceType
    photos: string
}
export type InitialStateType = {
    users: Array<PersonType>
}
const initialState: InitialStateType = {
    users : []
}

type  AllActionType = SetUserACType | FollowACType | unFollowACType

export let usersReducer = (state = initialState , action: AllActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            let copyState = {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: true} : m)}
            return copyState
        }
        case 'UN-FOLLOW' : {
            let copyState = {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: false} : m)}
            return copyState

        }
        case 'SET-USERS' : {
            let copyState = {...state, users:[ ...action.state] }
            return copyState

        }

        default:
            return state
    }
}


export type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => {
    return {
        type: 'FOLLOW',
        id
    } as const
}

export type unFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (id: number) => {
    return {
        type: 'UN-FOLLOW',
        id
    } as const
}

export type SetUserACType = ReturnType<typeof setUserUAC>
export const setUserUAC = (state:Array<PersonType>) => {
    return {
        type: 'SET-USERS',
       state
    } as const
}
