import {NavLink} from 'react-router-dom'
import cl from './Dialogs.module.css'





const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={cl.user}>
            <NavLink to={'./dialogs' + props.id}>  {props.name} </NavLink>
        </div>
    )
}

type MessageItemPropsType = {
    message:string
}

type DialogItemPropsType = {
    id: number,
    name: string
}
type statePropsType ={
    dialog:Array<DialogItemPropsType>
    message:Array<MessageItemPropsType>
}

const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={cl.massege}>{props.message}</div>
    )
}

/*let state = {
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
    ]
}*/



const Dialogs = (props:statePropsType) => {

    let dialogsElement = props.dialog.map(d => <DialogItem name={d.name} id={d.id}/>)
    let massageElement = props.message.map(m => <MessageItem message={m.message}/>)

    return (

        <div className={cl.container}>
            <div className={cl.usersName}>
                {dialogsElement}
            </div>
            <div className={cl.container_massege}>
                {massageElement}
            </div>
        </div>
    )
}
export default Dialogs