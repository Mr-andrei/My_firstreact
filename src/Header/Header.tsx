import { NavLink } from 'react-router-dom';
import cl from './Header.module.css'
type PropsType ={
    isAuth:boolean | null
    login:string | null
    logOut: () => void
}
const Header = (props:PropsType) => {

    return(
        <div className={cl.my_header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWZaRjwM9R43lRrNdwcRIVn82mamutm6yNQ&usqp=CAU" alt=""/>

            <div className={cl.link_login}>
                {props.isAuth ?
                    <div> {props.login} <button onClick={()=> props.logOut()} >LogOut</button></div> :
                    <NavLink to='/login'> Login</NavLink>}
            </div>
        </div>
    )
}

export default Header;