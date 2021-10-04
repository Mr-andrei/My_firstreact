import { NavLink } from 'react-router-dom'
import cl from './NavBar.module.css'
const NavBar = () =>{
    return (
        <div className={cl.nav_bar} >
            <div className={cl.navLink}><NavLink to="/Profile">Profile</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Dialogs">Messages</NavLink></div>
            <div className={cl.navLink}><NavLink to="/News">News</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Music">Music</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Setting">Setting</NavLink></div>
        </div>
    )
}

export default NavBar