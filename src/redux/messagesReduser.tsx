import {ActionsTypes, ChangeMessageText, mesageDataType, messagesPagesType, newMassage} from "./state";



export let MessageReducer = (state:messagesPagesType, action:ActionsTypes) => {
    if (action.type === "SEND-NEW-MASSEGE") {
        let newMassage: mesageDataType = {
            id: new Date().getTime(),
            message: state.nextMassege
        }
        if (state.nextMassege !== "") {
           state.mesageData.push(newMassage)
            state.nextMassege = ""
        }}
        else if (action.type === "CHANGE-MASSEGE-TEXT") {
            state.nextMassege = action.text
           }


        return state
    }


export const addMessegesAc = (): newMassage => ({type: "SEND-NEW-MASSEGE"})
export const chengeMessgesTextAc = (text: string): ChangeMessageText => ({type: "CHANGE-MASSEGE-TEXT", text: text})




