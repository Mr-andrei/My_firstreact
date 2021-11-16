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
}

type storeType = {
    state: stateType
   /* addPost: () => void
    changeTextArea: (text: string) => void*/
    subscribe: (observer: (state: stateType) => void) => void
    getState : () => stateType
    dispatch: (action: addPostType | changePostType) => void
}

export type addPostType ={
    type: "ADD-POST"
}
export type changePostType ={
    type: "CHANGE-TEXT-AREA"
    text: string
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
        postsdata: [
            {id: 1, text: "like", likecount: 123},
            {id: 2, text: "yo", likecount: 124},
            {id: 3, text: "dontLike", likecount: 125},
        ],
        nextPost: ""
    },
    getState () {
        return this.state
    },
    subscribe(observer: (state: stateType) => void) {
        renderChange = observer
    },
    dispatch(action){
        if( action.type === "ADD-POST"){
            let newsPost = {
                id: 4,
                text: this.state.nextPost,
                likecount: 1
            }
            if (newsPost.text !== "") {
                this.state.postsdata.push(newsPost)
                this.state.nextPost = ""
                renderChange(this.state)
            }
            renderChange(this.state)
        }
        else if (action.type === "CHANGE-TEXT-AREA" ){
            this.state.nextPost = action.text
            renderChange(this.state)
        }
    },
 /*   addPost() {
        let newsPost = {
            id: 4,
            text: this.state.nextPost,
            likecount: 1
        }
        if (newsPost.text !== "") {
            this.state.postsdata.push(newsPost)
            this.state.nextPost = ""
            renderChange(this.state)
        }
        renderChange(this.state)
    },*/
/*
    changeTextArea(text: string) {
        this.state.nextPost = text
        renderChange(this.state)
    },
*/

}


/*export let state: stateType = {
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
}*/
/*
export const addPost = () => {
    let newsPost = {
        id: 4,
        text: state.nextPost,
        likecount: 1
    }
    if (newsPost.text !== "") {
    state.postsdata.push(newsPost)
    state.nextPost = ""
    renderChange(state)
}
    renderChange(state)
}


export const changeTextArea = ( text:string ) => {
    state.nextPost = text
    renderChange(state)
}

export const subscribe = (observer: (state: stateType)=> void) => {
    renderChange = observer


}
*/



