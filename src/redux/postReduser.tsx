

import {ActionsTypes, addPostType, changePostType, postPagesDataType, postsType} from "./store";


export const PostReduser = (state:postPagesDataType, action:ActionsTypes) => {
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
