import {NavLink} from 'react-router-dom'
import cl from './Dialogs.module.css'
import {dialogsDataType, messageDataType} from "../redux/store";
import React, {ChangeEvent, KeyboardEvent} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../validator/validator";
import {FormInputControl} from "../componets/formcontrol/FormInputControl";


type MessageItemPropsType = {
    id: number
    message: string
}

type DialogItemPropsType = {
    id: number,
    name: string
}
type statePropsType = {
    isAuth: boolean
    dialog: Array<dialogsDataType>
    message: Array<messageDataType>
    nextMessage: string
    addMessage: () => void
    changeMassage: (text: string) => void
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

    // const addMessage = () => {
    //     props.addMessage()
    // }
    //
    // const addMessageOnkeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //         addMessage()
    //     }
    // }
    //
    //
    // const changeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let postText = e.currentTarget.value
    //     props.changeMassage(postText)
    // }


    const onSubmit = (value: AddMessageFormType) => {
        props.changeMassage(value.message)
        props.addMessage()
    }
    return (

        <div className={cl.container}>
            <div className={cl.usersName}>
                {dialogsElement}
            </div>
            <div className={cl.container_massege}>
                {massageElement}
            </div>
            <ReduxMessageForm
                onSubmit={onSubmit}
            />
        </div>
    )
}

type AddMessageFormType = {
    message: string
}
let maxLength = maxLengthCreator(100)

const MessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"message"}
                    name={"message"}
                    validate={[ required,maxLength]}
                    component= {FormInputControl}
                    type={"text"}/>
            </div>
            <button>add</button>
        </form>
    )
}

const ReduxMessageForm = reduxForm<AddMessageFormType>({
    form: "MessageForm"
})(MessageForm)


export default Dialogs