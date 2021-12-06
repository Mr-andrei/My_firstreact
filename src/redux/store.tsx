
import {PostReduser} from './postReduser';
import {messageReducer} from "./messagesReduser";

let renderChange = (state: stateType) => {
}

// messaages type

export type PagesdialogsDataType = {
    dialogsData: Array<dialogsDataType>
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesPagesType = {
    messageData: Array<messageDataType>
    nextMessage: string
}
export type  messageDataType = {
    id: number
    message: string
}

//Post Type
export type postPagesDataType = {
    postsdata: Array<postsType>
    nextPost: string
}
export type postsType = {
    id: number
    text: string
    likeCount: number
}
//State Type
export type  stateType = {
    dialogPages: PagesdialogsDataType
    messagesPages: messagesPagesType
    postPagesData: postPagesDataType
}
export type storeType = {
    state: stateType
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

//Action Type
export type ActionsTypes = addPostType | changePostType | newMassage | ChangeMessageText |dialogsData
export type addPostType = {
    type: "ADD-POST"
}
export type changePostType = {
    type: "CHANGE-TEXT-AREA"
    text: string
}
export type newMassage = {
    type: "SEND-NEW-MASSEGE"
}
export type ChangeMessageText = {
    type: "CHANGE-MASSEGE-TEXT"
    text: string
}
export type dialogsData ={
    type:"DIALOGS-DATA"}


export let store: storeType = {
    state: {
        dialogPages: {
            dialogsData: [
                {id: 1, name: "Andrei"},
                {id: 2, name: "Nick"},
                {id: 3, name: "Olga"},
                {id: 4, name: "Dimych"},
                {id: 5, name: "Vika"},
            ]
        },
        messagesPages: {
            messageData: [
                {id: 1, message: "What do yo want"},
                {id: 2, message: "What is yor name"},
                {id: 3, message: "How are you"},
                {id: 4, message: "My name is..."},
                {id: 5, message: "Hi"},
            ],
            nextMessage: "",
        },
        postPagesData: {
            postsdata: [
                {id: 1, text: "like", likeCount: 123},
                {id: 2, text: "yo", likeCount: 124},
                {id: 3, text: "dontLike", likeCount: 125},
            ],
            nextPost: "",
        },
    },
    getState() {
        return this.state
    },
    subscribe(observer: (state: stateType) => void) {
        renderChange = observer
    },
    dispatch(action) {
        // Добавление поста в постах
         this.state.postPagesData = PostReduser(this.state.postPagesData, action)

        //сообщение в messegas
        this.state.messagesPages = messageReducer(this.state.messagesPages, action)


        renderChange(this.state)
    },
}



