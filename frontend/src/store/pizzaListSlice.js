import { createSlice } from "@reduxjs/toolkit";
import pizzaListInitialState from "./data";

const pizzaListSlice = createSlice({
  name: "pizzaList",
  initialState: { pizzas: [] },
  reducers: {
    addPizza(state, action) {
      const newPizzaObj = action.payload
      state.pizzas.push(newPizzaObj);
    },
    deletePizza(state, action) {
      state.pizzas = state.pizzas.filter(
        (pizza) => pizza.id !== action.payload
      );
    },
    updatePizza(state, action) {
      state.pizzas = state.pizzas.map((pizza) => {
        if (pizza.id === action.payload.id) {
          return action.payload;
        }
        return pizza;
      });
    },
    replacePizzas(state, action) {
      state.pizzas = action.payload;
    },
  },
});

export const pizzaListActions = pizzaListSlice.actions;

export default pizzaListSlice.reducer;
