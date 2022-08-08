import {postComments} from "./postComments";
import {configureStore, } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { createBrowserHistory } from "history";
import { createReduxHistoryContext } from "redux-first-history";

import customReducer from "./reducerTool";
import registerUser  from "./registerReducer";    
import actionWatcher from "./sagaStore";


const {createReduxHistory,routerMiddleware,routerReducer} = createReduxHistoryContext({history : createBrowserHistory()  })
const saga = createSagaMiddleware();


const store = configureStore({
  reducer : { custom : customReducer,postComment:postComments,router:routerReducer},
  middleware :getDefaultMiddleware=>getDefaultMiddleware().concat(saga,routerMiddleware)
})


saga.run(actionWatcher);  

export const history = createReduxHistory(store);


export default store;