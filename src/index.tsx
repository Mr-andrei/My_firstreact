import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: "Andrei"},
    {id: 2, name: "Nick"},
    {id: 3, name: "Olga"},
    {id: 4, name: "Dimych"},
    {id: 5, name: "Vika"},
]
let mesageData = [
    {id: 1, message: "What do yo want"},
    {id: 2, message: "What is yor name"},
    {id: 3, message: "How are you"},
    {id: 4, message: "My name is..."},
    {id: 5, message: "Hi"},
]


ReactDOM.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
