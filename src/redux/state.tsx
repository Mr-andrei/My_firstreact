import {renderThree} from "../render";

export let state: stateType = {
    dialogsData: [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Nick"},
        {id: 3, name: "Olga"},
        {id: 4, name: "Dimych"},
        {id: 5, name: "Vika"},
    ],
    mesageData: [
        {id: 1, message: "What do yo want"},
        {id: 2, message: "What is yor name"},
        {id: 3, message: "How are you"},
        {id: 4, message: "My name is..."},
        {id: 5, message: "Hi"},
    ],
    postsdata: [
        {id: 1, text: "like", likecount: 123},
        {id: 2, text: "yo", likecount: 124},
        {id: 3, text: "dontLike", likecount: 125},
    ],
    nextPost: ""
}
type dialogsDataType = {
    id: number
    name: string
}
type  mesageDataType = {
    id: number
    message: string
}
export type postsType = {
    id: number
    text: string
    likecount: number
}
export type  stateType = {
    dialogsData: Array<dialogsDataType>
    mesageData: Array<mesageDataType>
    postsdata: Array<postsType>
    nextPost: string
}

export const addPost = () => {
    let newsPost = {
        id: 4,
        text: state.nextPost,
        likecount: 1
    }
    if (newsPost.text !== "") {
    state.postsdata.push(newsPost)
    state.nextPost = ""
    renderThree(state)
}}


export const changeTextArea = ( text:string ) => {
    state.nextPost = text
    renderThree(state)


}



