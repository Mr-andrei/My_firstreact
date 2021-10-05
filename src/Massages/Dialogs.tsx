import { NavLink } from 'react-router-dom'
import cl from './Dialogs.module.css'



const DialogItem = (props: any) =>{
    return(
        <div className={cl.user}>
        <NavLink to={'./dialogs' + props.id}>  {props.name} </NavLink>
        </div>
    )
}

const MessageItem = (props:any) =>{
    return(
        <div className={cl.massege}>{props.mydialog}</div>
    )
}




const Dialogs = (props: any) =>{
    return(

        <div className = {cl.container}>
            <div className = {cl.usersName}>
                <DialogItem name = "Andrei" id = "1"/>
                <DialogItem name = "Nick" id = "2"/>
                <DialogItem name = "Olga" id = "3"/>
                <DialogItem name = "Dimych" id = "4"/>
                <DialogItem name = "Vika" id = "5"/>

            </div>
            <div className={cl.container_massege}>
                <MessageItem mydialog = "What do yo want"/>
                <MessageItem mydialog = "What is yor name"/>
                <MessageItem mydialog = "How are you"/>
                <MessageItem mydialog = "My name is..."/>
                <MessageItem mydialog = "Hi"/>
                
            </div>
        </div>
    )
}
export default Dialogs