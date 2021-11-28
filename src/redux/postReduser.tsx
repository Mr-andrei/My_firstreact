

import {ActionsTypes, addPostType, changePostType, postPagesDataType, postsType} from "./store";

const initionalState:postPagesDataType = {
        postsdata: [
            {id: 1, text: "like", likecount: 123},
            {id: 2, text: "yo", likecount: 124},
            {id: 3, text: "dontLike", likecount: 125},
        ],
        nextPost: "",
    }

export const PostReduser = (state=initionalState, action:ActionsTypes):postPagesDataType => {
    switch (action.type) {
        case ("ADD-POST"):
            let newsPost: postsType = {
                id: new Date().getTime(),
                text: state.nextPost,
                likecount: 1
            }
            if (newsPost.text !== "") {
                state.postsdata.push(newsPost)
                state.nextPost = ""

            }
            return state
        case ("CHANGE-TEXT-AREA") :
            state.nextPost = action.text
            return state
        default: return state
    }

}

export const addPostAc = (): addPostType => ({type: "ADD-POST"})
export const chengePostAc = (text: string): changePostType => ({type: "CHANGE-TEXT-AREA", text: text})
