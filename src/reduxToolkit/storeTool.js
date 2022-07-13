import { configureStore } from "@reduxjs/toolkit";

import customReducer from "./reducerTool";

const store = configureStore({
  reducer: { custom: customReducer },
});

export default store;
