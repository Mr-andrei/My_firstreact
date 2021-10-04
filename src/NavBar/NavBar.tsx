import cl from './NavBar.module.css'
const NavBar = () =>{
    return (
        <div className={cl.nav_bar} >
            <div className={cl.navLink}><a href="/Profile">Profile</a></div>
            <div className={cl.navLink}><a href="/Dialogs">Messages</a></div>
            <div className={cl.navLink}><a href="/News">News</a></div>
            <div className={cl.navLink}><a href="/Music">Music</a></div>
            <div className={cl.navLink}><a href="/Setting">Setting</a></div>
        </div>
    )
}

export default NavBar