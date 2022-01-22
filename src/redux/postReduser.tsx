import {Dispatch} from "redux";
import {userApi} from "../api/api";


export type postsType = {
    id: number
    text: string
    likeCount: number
}

export type postPagesDataType = {
    postsdata: Array<postsType>
    nextPost: string
    profile:any
}

const initionalState: postPagesDataType = {
    postsdata: [
        {id: 1, text: "like", likeCount: 123},
        {id: 2, text: "yo", likeCount: 124},
        {id: 3, text: "dontLike", likeCount: 125},
    ],
    nextPost: "",
    profile:null
}
type ActionsALLTypes = addPostType | changePostType | ProfileTypeAC

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
            return  newPost.text ?{
                ...state,
                postsdata: [...state.postsdata, newPost],
                nextPost: ""
            } : state
        }
        case "SET-USERS-PROFILE":{
            return{...state, profile:action.profile}
        }
        default:
            return state
    }
}

export const addPostAc = (): addPostType => ({type: "ADD-POST"})
export const setUsersProfile = (profile:string) : ProfileTypeAC=> {
    return {
        type: "SET-USERS-PROFILE", profile
    }
}

export const changePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text})


type DispatchType = Dispatch<ActionsALLTypes>
export const getProfileTC = (userId:string) => {
    return (dispatch: DispatchType) =>{
        // let userId = this.props.match.params.userId
        userApi.getProfile(userId)
            .then(response => {
               dispatch(setUsersProfile(response.data))
            })
      }
}

