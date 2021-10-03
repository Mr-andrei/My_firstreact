import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Massages/Dialogs";
import {BrowserRouter} from "react-router-dom";




function App() {
    return (
        <BrowserRouter>
        <div className="grid_container">
            <Header/>
            <NavBar/>
            <Route />
        </div>
        </BrowserRouter>
    );
}

export default App;
