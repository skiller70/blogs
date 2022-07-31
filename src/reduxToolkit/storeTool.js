import {postComments} from "./postComments";
import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import customReducer from "./reducerTool";

import actionWatcher from "./sagaStore";
const saga = createSagaMiddleware();


const store = configureStore({
  reducer : {custom : customReducer,postComment:postComments},
  middleware :getDefaultMiddleware=>getDefaultMiddleware().concat(saga) 
})


saga.run(actionWatcher);  


export default store;