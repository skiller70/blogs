import {postComments} from "./postComments";
import {configureStore,combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { attachRouterHistory } from 'connected-react-router-history';
import customReducer from "./reducerTool";
import registerUser  from "./registerReducer";
import actionWatcher from "./sagaStore";

import { createBrowserHistory } from "history";
import { routerMiddleware,connectRouter } from 'connected-react-router'
export const history = createBrowserHistory()


const saga = createSagaMiddleware();


const store = configureStore({
  reducer : { custom : customReducer,postComment:postComments,register:registerUser },
  middleware :getDefaultMiddleware=>getDefaultMiddleware().concat(saga,) 
})


saga.run(actionWatcher);  


export default store;