
import {PostReduser} from './postReduser';
import {MessageReducer} from "./messagesReduser";

let renderChange = (state: stateType) => {
}

// dialogs type
type PagesdialogsDataType = {
    dialogsData: Array<dialogsDataType>
}
type dialogsDataType = {
    id: number
    name: string
}

//messages type
export type messagesPagesType = {
    mesageData: Array<mesageDataType>
    nextMassege: string
}
export type  mesageDataType = {
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
    likecount: number
}
//State Type
export type  stateType = {
    dialogPages: PagesdialogsDataType
    messagesPages: messagesPagesType
    postPagesData: postPagesDataType
}
type storeType = {
    state: stateType
    subscribe: (observer: (state: stateType) => void) => void
    getState: () => stateType
    dispatch: (action: ActionsTypes) => void
}

//Action Type
export type ActionsTypes = addPostType | changePostType | newMassage | ChangeMessageText

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
            mesageData: [
                {id: 1, message: "What do yo want"},
                {id: 2, message: "What is yor name"},
                {id: 3, message: "How are you"},
                {id: 4, message: "My name is..."},
                {id: 5, message: "Hi"},
            ],
            nextMassege: "",
        },
        postPagesData: {
            postsdata: [
                {id: 1, text: "like", likecount: 123},
                {id: 2, text: "yo", likecount: 124},
                {id: 3, text: "dontLike", likecount: 125},
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
      /*  if (action.type === "ADD-POST") {
            let newsPost: postsType = {
                id: new Date().getTime(),
                text: this.state.postPagesData.nextPost,
                likecount: 1
            }
            if (newsPost.text !== "") {
                this.state.postPagesData.postsdata.push(newsPost)
                this.state.postPagesData.nextPost = ""
                renderChange(this.state)
            }
        } else if (action.type === "CHANGE-TEXT-AREA") {
            this.state.postPagesData.nextPost = action.text
            renderChange(this.state)
        }*/
        //сообщение в messegas

        this.state.messagesPages = MessageReducer(this.state.messagesPages, action)
        renderChange(this.state)
       /* else if (action.type === "SEND-NEW-MASSEGE") {
            let newMassage: mesageDataType = {
                id: new Date().getTime(),
                message: this.state.messagesPages.nextMassege
            }
            if (newMassage.message !== "") {
                this.state.messagesPages.mesageData.push(newMassage)
                this.state.messagesPages.nextMassege = ""
                renderChange(this.state)
            }
        } else if (action.type === "CHANGE-MASSEGE-TEXT") {
            this.state.messagesPages.nextMassege = action.text
            renderChange(this.state)
        }*/

    },
}









