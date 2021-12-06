import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import {Route} from "react-router-dom";
import News from "./News/News";
import Setting from "./Setting/Setting";
import Music from "./Music/Music";
import {MessageContainer} from "./Massages/ContainerDialogs";

function App() {
    return (

            <div className="grid_container">
                <Header/>
                <NavBar/>
                <div className={"content"}>
                    <Route path='/Dialogs'
                           render={() => <MessageContainer/>}/>
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Setting' render={() => <Setting/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                </div>
            </div>

    );
}

export default App;
