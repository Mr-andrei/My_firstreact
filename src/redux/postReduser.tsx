

import {ActionsTypes, addPostType, changePostType, postPagesDataType, postsType} from "./store";

const initionalState:postPagesDataType = {
        postsdata: [
            {id: 1, text: "like", likeCount: 123},
            {id: 2, text: "yo", likeCount: 124},
            {id: 3, text: "dontLike", likeCount: 125},
        ],
        nextPost: "",
    }

export const PostReduser = (state=initionalState, action:ActionsTypes):postPagesDataType => {
    switch (action.type) {
        case ("ADD-POST"): {
            let newsPost: postsType = {
                id: new Date().getTime(),
                text: state.nextPost,
                likeCount: 1
            }
            if (newsPost.text !== "") {
                let stateCopy = {...state};
                stateCopy.postsdata = [...state.postsdata]
                stateCopy.postsdata.push(newsPost)
                stateCopy.nextPost = ""

                return stateCopy
            }
            return {...state}
        }
        case ("CHANGE-TEXT-AREA") : {
            let stateCopy = {...state}
            stateCopy.nextPost = action.text
            return stateCopy
        }
        default: return state
    }

}

export const addPostAc = (): addPostType => ({type: "ADD-POST"})
export const chengePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text: text})
