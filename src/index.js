import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './reduxToolkit/storeTool';
import { Provider } from 'react-redux';
import { postsData } from './reduxToolkit/reducerTool';
import { POST_COMMENT } from './reduxToolkit/reducerTool';
import {ReactReduxContext} from 'react-redux';
import {Route,Routes} from "react-router-dom"
import { history } from "./reduxToolkit/storeTool";
import {ConnectedRouter} from "connected-react-router"
import {BrowserRouter} from "react-router-dom"
store.dispatch(postsData)
store.dispatch({type:'SHOW_ALL_COMMENTS'})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Provider store={store} >
  <BrowserRouter>
  <App  />
  </BrowserRouter>
    </Provider>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
