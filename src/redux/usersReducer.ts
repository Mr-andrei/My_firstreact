type PlaceType = {
    country: string
    city: string
}
export type PersonType = {
    id: number
    follow: boolean
    firstName: string
    status: string
    place: PlaceType
}
export type InitialStateType = {
    users: Array<PersonType>
}
const initialState: InitialStateType = {
    users: [
        {
            id: 1,
            follow: true,
            firstName: "Andrei",
            status: "I am looking for job right now",
            place: {country: "belarus", city: 'Minsk'}
        },
        {
            id: 2,
            follow: false,
            firstName: "Andrei",
            status: "I am looking for job right now",
            place: {country: "belarus", city: 'Minsk'}
        },
        {
            id: 3,
            follow: true,
            firstName: "Andrei",
            status: "I am looking for job right now",
            place: {country: "belarus", city: 'Minsk'}
        },
    ]
}


export let usersReducer = (state: InitialStateType = initialState, action: FollowACType | unFollowACType): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW': {
            let copyState = {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: true} : m)}
            return copyState
        }
        case 'UN-FOLLOW' : {
            let copyState = {...state, users: state.users.map(m => m.id === action.id ? {...m, follow: false} : m)}
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