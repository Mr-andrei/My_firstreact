import React from 'react';
import './App.css';
import NavBar from "./NavBar/NavBar";
import {Route} from "react-router-dom";
import News from "./News/News";
import Setting from "./Setting/Setting";
import Music from "./Music/Music";
import UsersContainer from "./users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import Login from "./login/Login";
import Dialogs from "./Massages/ContainerDialogs";



function App() {
    return (

        <div className="grid_container">
            <HeaderContainer/>
            <NavBar/>
            <div className={"content"}>
                <Route path='/Dialogs'
                       render={() => <Dialogs/>}/>
                <Route path='/Profile/:userId' render={() => <ProfileContainer/>}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Setting' render={() => <Setting/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Users' render={() => <UsersContainer/>}/>
                <Route path='/Login' render={() => <Login/>}/>
            </div>
        </div>

    );
}

export default App;
