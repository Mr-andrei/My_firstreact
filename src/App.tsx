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
import {addPost, changeTextArea, postsType, state, stateType} from "./redux/state";


type dialogsType = {
    state: stateType
    addPost: () => void
    changeTextArea: (text:string) => void

}


function App(props: dialogsType) {
    return (
        <BrowserRouter>
            <div className="grid_container">
                <Header/>
                <NavBar/>
                <div className={"content"}>
                    <Route path='/Dialogs'
                           render={() => <Dialogs message={props.state.mesageData} dialog={props.state.dialogsData}/>}/>
                    <Route path='/Profile' render={() => <Profile posts={props.state.postsdata}
                                                                  addPost={props.addPost}
                                                                  changeTextArea={changeTextArea}
                    />}/>
                    <Route path='/News' render={() => <News/>}/>
                    <Route path='/Setting' render={() => <Setting/>}/>
                    <Route path='/Music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
