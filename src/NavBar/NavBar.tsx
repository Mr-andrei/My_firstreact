import { NavLink } from 'react-router-dom'
import cl from './NavBar.module.css'
const NavBar = () =>{
    return (
        <div className={cl.nav_bar} >
            <div className={cl.navLink}><NavLink to="/Profile" className={cl.mamas} activeClassName={cl.active_link}>Profile</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Dialogs" activeClassName={cl.active_link}>Messages</NavLink></div>
            <div className={cl.navLink}><NavLink to="/News" activeClassName={cl.active_link}>News</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Music" activeClassName={cl.active_link}>Music</NavLink></div>
            <div className={cl.navLink}><NavLink to="/Setting" activeClassName={cl.active_link}>Setting</NavLink></div>
        </div>
    )
}

export default NavBar