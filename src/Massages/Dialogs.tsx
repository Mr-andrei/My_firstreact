import {NavLink} from 'react-router-dom'
import cl from './Dialogs.module.css'
import {ActionsTypes, dialogsDataType, mesageDataType} from "../redux/store";
import React, {ChangeEvent,KeyboardEvent} from "react";



type MessageItemPropsType = {
    id: number
    message: string
}

type DialogItemPropsType = {
    id: number,
    name: string
}
type statePropsType = {
    dialog: Array<dialogsDataType>
    message: Array<mesageDataType>
    nextMessage: string
    addMessage: ()=> void
    changeMassage: (text:string)=> void
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
       props.addMessage()}

    const addMessageOnkeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === 'Enter'){
        addMessage()}
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const changeMessege = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value
        props.changeMassage(postText)
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
                value={props.nextMessage}
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