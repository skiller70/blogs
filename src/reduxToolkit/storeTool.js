import {postComments} from "./postComments";
import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import {routerMiddleware} from 'connected-react-router'
import customReducer from "./reducerTool";
import  registerUser  from "./registerReducer";
import { createBrowserHistory } from "history";
import actionWatcher from "./sagaStore";
import { connectRouter } from "connected-react-router";
 export const history = createBrowserHistory()
const saga = createSagaMiddleware();


const store = configureStore({
  reducer : {custom : customReducer,postComment:postComments,register:registerUser},
  middleware :getDefaultMiddleware=>getDefaultMiddleware().concat(saga,) 
})


saga.run(actionWatcher);  


export default store;