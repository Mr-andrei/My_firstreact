import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Massages/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./News/News";
import Setting from "./Setting/Setting";
import Music from "./Music/Music";


function App() {
    return (
        <BrowserRouter>
            <div className="grid_container">
                <Header/>
                <NavBar/>

                <div className={"content"}>
                    <Route path='/Dialogs' component={Dialogs}/>
                    <Route path='/Profile' component={Profile}/>
                    <Route path='/News' component={News}/>
                    <Route path='/Setting' component={Setting}/>
                    <Route path='/Music' component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
