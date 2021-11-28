import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import NavBar from "./NavBar/NavBar";
import Dialogs from "./Massages/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./News/News";
import Setting from "./Setting/Setting";
import Music from "./Music/Music";
import {ActionsTypes} from "./redux/store";
import {stateType} from "./redux/store";


type dialogsType = {
    state: stateType
    /*  addPost: () => void
      changeTextArea: (text:string) => void*/
    dispatch: (action: ActionsTypes) => void

}


function App(props: dialogsType) {
    return (
        <BrowserRouter>
            <div className="grid_container">
                <Header/>
                <NavBar/>
                <div className={"content"}>
                    <Route path='/Dialogs'
                           render={() => <Dialogs
                               message={props.state.messagesPages.mesageData}
                               dialog={props.state.dialogPages.dialogsData}
                               dispatch={props.dispatch}
                               nextMassege={props.state.messagesPages.nextMassege}
                           />}/>
                    <Route path='/Profile' render={() => <Profile posts={props.state.postPagesData.postsdata}
                                                                  dispatch={props.dispatch}
                                                                  nextPost={props.state.postPagesData.nextPost}
                        /* addPost={props.addPost}
                         changeTextArea={props.changeTextArea}*/

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
