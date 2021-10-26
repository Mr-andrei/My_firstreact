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


let state = {
    dialogsData: [
        {id: 1, name: "Andrei"},
        {id: 2, name: "Nick"},
        {id: 3, name: "Olga"},
        {id: 4, name: "Dimych"},
        {id: 5, name: "Vika"},
    ],
    messageData: [
        {id: 1, message: "What do yo want"},
        {id: 2, message: "What is yor name"},
        {id: 3, message: "How are you"},
        {id: 4, message: "My name is..."},
        {id: 5, message: "Hi"},
    ]
}





function App() {
    return (
        <BrowserRouter>
            <div className="grid_container">
                <Header/>
                <NavBar/>
                <div className={"content"}>
                    <Route path='/Dialogs'  render={ () => <Dialogs message={state.messageData} dialog={state.dialogsData} />}/>
                    <Route path='/Profile' render={() => <Profile/>}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Setting' render={() => <Setting/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
