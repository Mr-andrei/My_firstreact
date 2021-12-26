import { postPagesDataType} from "./store";

const initionalState: postPagesDataType = {
    postsdata: [
        {id: 1, text: "like", likeCount: 123},
        {id: 2, text: "yo", likeCount: 124},
        {id: 3, text: "dontLike", likeCount: 125},
    ],
    nextPost: "",
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
            let copyState = newPost.text ? {
                ...state,
                postsdata: [...state.postsdata, newPost],
                nextPost: ""
            } : state
            return copyState
        }
        default:
            return state
    }
}

export const addPostAc = (): addPostType => ({type: "ADD-POST"})
export const setProfileAc = (profile:string)=> {
    return {
        type: "ADD-POST", profile
    }
}
export const chengePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text: text})


