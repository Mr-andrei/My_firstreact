import {Dispatch} from "redux";
import {profileApi} from "../api/api";


export type postsType = {
    id: number
    text: string
    likeCount: number
}

export type postPagesDataType = {
    postsdata: Array<postsType>
    nextPost: string
    profile: any
    status: string
}

const initionalState: postPagesDataType = {
    postsdata: [
        {id: 1, text: "like", likeCount: 123},
        {id: 2, text: "yo", likeCount: 124},
        {id: 3, text: "dontLike", likeCount: 125},
    ],
    nextPost: "",
    profile: null,
    status: ""
}
type ActionsALLTypes = addPostType | changePostType | ProfileTypeAC | StatusTypeAC

export type addPostType = {
    type: "ADD-POST"
}
export type changePostType = {
    type: "CHANGE-TEXT-AREA"
    text: string
}

type ProfileTypeAC = {
    type: "SET-USERS-PROFILE"
    profile: string
}

export const PostReduser = (state = initionalState, action: ActionsALLTypes): postPagesDataType => {

    switch (action.type) {
        case "CHANGE-TEXT-AREA": {
            return {...state, nextPost: action.text}
        }
        case "ADD-POST" : {
            let newPost = {
                id: new Date().getTime(),
                text: state.nextPost,
                likeCount: 1
            }
            return newPost.text ? {
                ...state,
                postsdata: [...state.postsdata, newPost],
                nextPost: ""
            } : state
        }
        case "SET-USERS-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-USERS-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostAc = (): addPostType => ({type: "ADD-POST"})
export const setUsersProfile = (profile: string): ProfileTypeAC => {
    return {
        type: "SET-USERS-PROFILE", profile
    }
}

export const changePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text})


type DispatchType = Dispatch<ActionsALLTypes>
export const getProfileTC = (userId: string) => {
    return (dispatch: DispatchType) => {
        // let userId = this.props.match.params.userId
        profileApi.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data))
            })
    }
}

export type  StatusTypeAC = {
    type: "SET-USERS-STATUS"
    status: string
}

export const setUsersStatus = (status: string): StatusTypeAC => {
    return {
        type: "SET-USERS-STATUS", status
    }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: DispatchType) => {
        profileApi.getStatus(userId).then(res =>
            dispatch(setUsersStatus(res.data))
        )
    }
}
//
// type UpdateStatusType = {
//     type: "UPDATE-STATUS"
//     status: string
// }
// export const updateStatusAC = (status: string): UpdateStatusType => {
//     return {
//         type: "UPDATE-STATUS",
//         status
//
//     }
// }

export const updateStatus = (status: string) => {
    return (dispatch: DispatchType) => {
        profileApi.updateStatus(status).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUsersStatus(status))
            }
        })
    }
}
