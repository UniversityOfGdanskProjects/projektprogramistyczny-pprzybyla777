import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api-slice";
import uiReducer from "../store/ui-slice"

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        ui: uiReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

export default store;