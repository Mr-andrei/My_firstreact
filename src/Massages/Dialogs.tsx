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