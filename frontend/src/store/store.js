import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import pizzaListReducer from "./pizzaListSlice";
import singlePizzaReducer from "./singlePizza-slice"
import uiReducer from "./ui-slice";
import authReducer from "./auth-slice"
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/query"

const store = configureStore({
  reducer: {
    pizzaList: pizzaListReducer,
    singlePizza: singlePizzaReducer,
    ui: uiReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;