import cl from './NavBar.module.css'
const NavBar = () =>{
    return (
        <div className={cl.nav_bar} >
            <div className={cl.navLink}><a href="">Profile</a></div>
            <div className={cl.navLink}><a href="">Messages</a></div>
            <div className={cl.navLink}><a href="">News</a></div>
            <div className={cl.navLink}><a href="">Music</a></div>
            <div className={cl.navLink}><a href="">Setting</a></div>
        </div>
    )
}

export default NavBar