import {ActionsTypes, ChangeMessageText, mesageDataType, messagesPagesType, newMassage} from "./store";




const initionalState:messagesPagesType = {
        mesageData: [
            {id: 1, message: "What do yo want"},
            {id: 2, message: "What is yor name"},
            {id: 3, message: "How are you"},
            {id: 4, message: "My name is..."},
            {id: 5, message: "Hi"},
        ],
        nextMassege: "",
    }

export let messageReducer = (state = initionalState, action:ActionsTypes):messagesPagesType => {


    switch(action.type){
        case ( "SEND-NEW-MASSEGE") :
        let newMassage: mesageDataType = {
            id: new Date().getTime(),
            message: state.nextMassege
        }
        if (state.nextMassege !== "") {
           state.mesageData.push(newMassage)
            state.nextMassege = ""
        }return state

        case ("CHANGE-MASSEGE-TEXT") :
            state.nextMassege = action.text
            return {...state}
        default : return state
    }
    }


export const addMessegesAc = (): newMassage => ({type: "SEND-NEW-MASSEGE"})
export const chengeMessgesTextAc = (text: string): ChangeMessageText => ({type: "CHANGE-MASSEGE-TEXT", text: text})




