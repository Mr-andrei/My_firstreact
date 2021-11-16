import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/state";
import {  stateType, } from './redux/state';




export const renderThree = (state: stateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
              /*  addPost={store.addPost.bind(store)}
                changeTextArea={store.changeTextArea.bind(store)}*/
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderThree(store.getState())
store.subscribe(renderThree)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
