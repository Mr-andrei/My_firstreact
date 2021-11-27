let renderChange = (state: stateType) => {
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
    nextMassege:string
}

export type ActionsTypes = addPostType | changePostType | newMassage | ChangeMessageText

type storeType = {
    state: stateType
   /* addPost: () => void
    changeTextArea: (text: string) => void*/
    subscribe: (observer: (state: stateType) => void) => void
    getState : () => stateType
    dispatch: (action: ActionsTypes  ) => void
}

export type addPostType ={
    type: "ADD-POST"

}
export type changePostType ={
    type: "CHANGE-TEXT-AREA"
    text: string
}

export type newMassage = {
    type:"SEND-NEW-MASSEGE"
}
export type ChangeMessageText ={
    type:"CHANGE-MASSEGE-TEXT"
    text:string
}


export let store: storeType ={
    state: {
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
        nextMassege:"",
        postsdata: [
            {id: 1, text: "like", likecount: 123},
            {id: 2, text: "yo", likecount: 124},
            {id: 3, text: "dontLike", likecount: 125},
        ],
        nextPost: "",

    },
    getState () {
        return this.state
    },
    subscribe(observer: (state: stateType) => void) {
        renderChange = observer
    },
    dispatch(action){
        // Добавление поста в постах
        if( action.type === "ADD-POST"){
            let newsPost :postsType  = {
                id: new Date(). getTime(),
                text: this.state.nextPost,
                likecount: 1
            }
            if (newsPost.text !== "") {
                this.state.postsdata.push(newsPost)
                this.state.nextPost = ""
                renderChange(this.state)
            }
        }
        else if (action.type === "CHANGE-TEXT-AREA" ){
            this.state.nextPost = action.text
            renderChange(this.state)
        }
        //сообщение в messegas
        else if(action.type === "SEND-NEW-MASSEGE"){
            let newMassage:mesageDataType  = {
                id: new Date(). getTime(),
                message: this.state.nextMassege
            }
            if(newMassage.message !==""){
                this.state.mesageData.push(newMassage)
                this.state.nextMassege = ""
                renderChange(this.state)
            }}
        else if (action.type === "CHANGE-MASSEGE-TEXT" ){
        this.state.nextMassege= action.text
            renderChange(this.state)
        }

    },
}


export const  addPostAc = ():addPostType => ({type:"ADD-POST"})
export const chengePostAc =(text:string):changePostType => ({ type:"CHANGE-TEXT-AREA", text: text})


export const addMessegesAc = ():newMassage => ({type:"SEND-NEW-MASSEGE"})
export const chengeMessgesTextAc =(text:string):ChangeMessageText => ({ type:"CHANGE-MASSEGE-TEXT", text: text})










