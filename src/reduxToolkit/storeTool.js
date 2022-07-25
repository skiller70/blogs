import { configureStore } from "@reduxjs/toolkit";

import customReducer from "./reducerTool";
import { testReducer } from "./TestReducer";

const store = configureStore({
  reducer: { custom: customReducer,test :  testReducer.reducer },
});

export default store;
