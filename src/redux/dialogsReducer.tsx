import {ActionsTypes, PagesdialogsDataType} from "./store";


const initionalState: PagesdialogsDataType = {
    dialogsData: [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Nick"},
        {id: 3, name: "Olga"},
        {id: 4, name: "Dimych"},
        {id: 5, name: "Vika"},
    ]
}

export let dialogReducer = (state = initionalState, action: ActionsTypes): PagesdialogsDataType => {


    switch (action.type) {
        case ("DIALOGS-DATA") :
            return state
        default :
            return state
    }
}







