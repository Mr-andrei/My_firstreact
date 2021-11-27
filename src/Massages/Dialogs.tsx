import {NavLink} from 'react-router-dom'
import cl from './Dialogs.module.css'
import {ActionsTypes} from "../redux/state";
import React, {ChangeEvent,KeyboardEvent} from "react";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";


type MessageItemPropsType = {
    id: number
    message: string
}

type DialogItemPropsType = {
    id: number,
    name: string
}
type statePropsType = {
    dialog: Array<DialogItemPropsType>
    message: Array<MessageItemPropsType>
    dispatch: (action: ActionsTypes) => void
    nextMassege: string
}


const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={cl.user}>
            <NavLink to={'./dialogs' + props.id}>  {props.name} </NavLink>
        </div>
    )
}


const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={cl.massege}>{props.message}</div>
    )
}


const Dialogs = (props: statePropsType) => {

    let dialogsElement = props.dialog.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let massageElement = props.message.map(m => <MessageItem key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        props.dispatch(addMessegesAc()

        )
    }
    const addMessageOnkeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
        addMessage()}
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const changeMessege = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value
        props.dispatch(chengeMessgesTextAc(postText))
    }

    return (

        <div className={cl.container}>
            <div className={cl.usersName}>
                {dialogsElement}
            </div>
            <div className={cl.container_massege}>
                {massageElement}
            </div>
            <textarea
                ref={newPostElement}
                onChange={changeMessege}
                value={props.nextMassege}
                onKeyPress={addMessageOnkeyPress}
            ></textarea>
            <button

                onClick={addMessage}
            >Add
            </button>
        </div>
    )
}
export default Dialogs