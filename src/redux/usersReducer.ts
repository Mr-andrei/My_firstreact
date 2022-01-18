type PlaceType = {
    country: string
    city: string
}
type photoType = {
    small: string
}
export type PersonType = {
    id: number
    follow: boolean
    name: string
    status: string
    place: PlaceType
    photos: photoType
}
export type InitialStateType = {
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    preloader: boolean
    ifFollowing: Array<number>
}
const initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    preloader: false,
    ifFollowing: []
}

type  AllActionType = SetUserACType | FollowACType
    | unFollowACType | currentPagePlusType
    | SetTotalUserCountType | PreloaderType | ifFollowingSetType

export let usersReducer = (state = initialState, action: AllActionType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {

            return {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: true} : m)}
        }
        case 'UN-FOLLOW' : {

            return {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: false} : m)}

        }
        case 'SET-USERS' : {
            return {...state, users: action.state}

        }
        case "CURRENT-PAGE-PLUS" : {
            return {...state, currentPage: action.current}
        }
        case "SET-USERS-COUNT" : {
            return {...state, totalCount: action.count / 1000}
        }
        case "LOADER" : {
            return {...state, preloader:action.loading}
        }
        case "IS-FOLLOWING-SET": {
            return {...state, ifFollowing:
                action.isFollow ?  [...state.ifFollowing, action.userId] : state.ifFollowing.filter(f => f !== action.userId)}
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
export const setUserUAC = (state: Array<PersonType>) => {
    return {
        type: 'SET-USERS',
        state
    } as const
}

export type currentPagePlusType = ReturnType<typeof currentPagePlusAC>
export const currentPagePlusAC = (current: number) => {
    return {
        type: "CURRENT-PAGE-PLUS",
        current
    } as const
}

export type SetTotalUserCountType = ReturnType<typeof SetTotalUserCountAC>
export const SetTotalUserCountAC = (count: number) => {
    return {
        type: "SET-USERS-COUNT",
        count
    } as const
}

export type PreloaderType = ReturnType<typeof preloadertAC>
export const preloadertAC = (loading: boolean) => {
    return {
        type: "LOADER",
        loading
    } as const
}
export type ifFollowingSetType  =  ReturnType<typeof ifFollowingSetAC>
export const ifFollowingSetAC = (isFollow:boolean,userId:number) => {
    return{
        type: "IS-FOLLOWING-SET",
        isFollow,
        userId
    } as const
}
