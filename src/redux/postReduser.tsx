import {ActionsTypes, addPostType, changePostType, postPagesDataType} from "./store";

const initionalState: postPagesDataType = {
    postsdata: [
        {id: 1, text: "like", likeCount: 123},
        {id: 2, text: "yo", likeCount: 124},
        {id: 3, text: "dontLike", likeCount: 125},
    ],
    nextPost: "",
}

export const PostReduser = (state = initionalState, action: ActionsTypes): postPagesDataType => {

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
export const chengePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text: text})


