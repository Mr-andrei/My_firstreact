import {NavLink} from 'react-router-dom'
import cl from './Dialogs.module.css'
import {ActionsTypes} from "../redux/store";
import React, {ChangeEvent,KeyboardEvent} from "react";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";


type MessageItemPropsType = {
    id: number
    message: string
}

type DialogItemPropsType = {
    id: number,
    name: string
}
type ContainerDialogsPropsType = {
    dialog: Array<DialogItemPropsType>
    message: Array<MessageItemPropsType>
    dispatch: (action: ActionsTypes) => void
    nextMassege: string
}

const ContainerDialogs = (props: ContainerDialogsPropsType) => {

    const addMessage = () => {
        props.dispatch(addMessegesAc())}


    const changeMessege = (text:string) => {
        props.dispatch(chengeMessgesTextAc(text))
    }

    return (

     <div>
         <Dialogs message={props.message}
                   dialog={props.dialog}
                   nextMassege={props.nextMassege}
                   addMessage={addMessage}
                   changeMessege={changeMessege}


     /></div>
    )
}
export default ContainerDialogs


