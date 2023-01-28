import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import pizzaListReducer from "./pizzaListSlice";
import singlePizzaReducer from "./singlePizza-slice"
import uiReducer from "./ui-slice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    pizzaList: pizzaListReducer,
    singlePizza: singlePizzaReducer,
    ui: uiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;