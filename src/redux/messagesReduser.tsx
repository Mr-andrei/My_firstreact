import {ActionsTypes, ChangeMessageText, messageDataType, messagesPagesType, newMassage} from "./store";

const initionalState:messagesPagesType = {
        messageData: [
            {id: 1, message: "What do yo want"},
            {id: 2, message: "What is yor name"},
            {id: 3, message: "How are you"},
            {id: 4, message: "My name is..."},
            {id: 5, message: "Hi"},
        ],
        nextMessage: "",
    }
export let messageReducer = (state = initionalState, action:ActionsTypes):messagesPagesType => {


    switch(action.type){
        case ( "SEND-NEW-MASSEGE") :
        let newMassage: messageDataType = {
            id: new Date().getTime(),
            message: state.nextMessage
        }
        if (state.nextMessage !== "") {
           state.messageData.push(newMassage)
            state.nextMessage = ""
        }return state

        case ("CHANGE-MASSEGE-TEXT") :
            state.nextMessage = action.text
            return {...state}
        default : return state
    }
    }

export const addMessegesAc = (): newMassage => ({type: "SEND-NEW-MASSEGE"})
export const chengeMessgesTextAc = (text: string): ChangeMessageText => ({type: "CHANGE-MASSEGE-TEXT", text: text})




