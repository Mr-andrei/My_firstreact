type PlaceType = {
    country: string
    city: string
}
type fotoType = {
    small:string
}
export type PersonType = {
    id: number
    follow: boolean
    name: string
    status: string
    place: PlaceType
    photos: fotoType
}
export type InitialStateType = {
    users: Array<PersonType>
    pageSize: number
    totalCount:number
    currentPage:number
}
const initialState: InitialStateType = {
    users : [],
    pageSize: 5,
    totalCount: 40,
    currentPage: 1
}

type  AllActionType = SetUserACType | FollowACType | unFollowACType | currentPagePlusType | SetTotalUserCountType

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
            let copyState = {...state, users:action.state }
            return copyState

        }
        case "CURRENT-PAGE-PLUS" : {
            return {...state, currentPage:action.current}
        }
        case "SET-USERS-COUNT" : {
            return {...state, totalCount:action.count/1000}
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

export type currentPagePlusType = ReturnType<typeof currentPagePlusAC >
export const currentPagePlusAC = (current:number) => {
    return {
        type: "CURRENT-PAGE-PLUS",
        current
    } as const
}

export type SetTotalUserCountType = ReturnType<typeof SetTotalUserCountAC>
export const SetTotalUserCountAC = (count:number) => {
    return {
        type: "SET-USERS-COUNT",
        count
    } as const
}
