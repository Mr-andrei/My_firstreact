import {ActionsTypes, ChangeMessageText, messageDataType, messagesPagesType, newMassage} from "./store";

const initionalState: messagesPagesType = {
    messageData: [
        {id: 1, message: "What do yo want"},
        {id: 2, message: "What is yor name"},
        {id: 3, message: "How are you"},
        {id: 4, message: "My name is..."},
        {id: 5, message: "Hi"},
    ],
    nextMessage: "",
}
export let messageReducer = (state = initionalState, action: ActionsTypes): messagesPagesType => {


    switch (action.type) {
        case ("SEND-NEW-MASSEGE") : {
            let newMassage: messageDataType = {
                id: new Date().getTime(),
                message: state.nextMessage
            }
            let copyState = {...state}
            copyState.messageData = [...state.messageData]
            if (state.nextMessage !== "") {
                copyState.messageData.push(newMassage)
                copyState.nextMessage = ""
            }
            return copyState
        }
        case ("CHANGE-MASSEGE-TEXT") :{
            let copyState = {...state}
            copyState.nextMessage = action.text
            return copyState}
        default :
            return state
    }
}

export const addMessegesAc = (): newMassage => ({type: "SEND-NEW-MASSEGE"})
export const chengeMessgesTextAc = (text: string): ChangeMessageText => ({type: "CHANGE-MASSEGE-TEXT", text: text})




