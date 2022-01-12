import { NavLink } from 'react-router-dom';
import cl from './Header.module.css'
type PropsType ={
    isAuth:boolean
    login:string
}
const Header = (props:PropsType) => {

    return(

        <div className={cl.my_header}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhWZaRjwM9R43lRrNdwcRIVn82mamutm6yNQ&usqp=CAU" alt=""/>

            <div className={cl.link_login}>
                {props.isAuth ?   "" : <NavLink to='/login'> Login</NavLink>}
                <span> {props.login}</span>
            </div>

        </div>
    )
}

export default Header;