import {addPost, changeTextArea, state, stateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";


export const renderThree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                changeTextArea={changeTextArea}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
