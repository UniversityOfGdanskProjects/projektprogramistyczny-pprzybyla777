import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singlePizzaSlice = createSlice({
  name: "singlePizza",
  initialState: { currentPizza: {} },
  reducers: {
    replacePizza(state, action) {
      const currPizzaObj = action.payload;
      state.currentPizza = currPizzaObj;
    }
  }
});

export const fetchSinglePizza = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const url = "http://localhost:5000/pizzas/" + id;
      const response = await axios(url);

      if (response.status !== 200) {
        throw new Error("Coud not fetch data!");
      }

      console.log(response);

      const data = await response.data;

      return data;
    };

    try {
      const singlePizza = await fetchData();
      dispatch(singlePizzaActions.replacePizza(singlePizza));
    } catch (err) {
      console.log(err);
    }
  }
}

export const postNewComment = (id, newComment) => {
  return async (dispatch) => {
    const postData = async () => {
      const url = `http://localhost:5000/pizzas/${id}/addComment`;
      const response = await axios({
        method: "post",
        url: url,
        data: newComment,
      });

      console.log(response);

      if (response.status !== 200) {
        throw new Error("Coud not send data!");
      }

      return response.data;
    };

    try {
      const resObj = await postData();
      const { message, newPizza } = resObj;
      dispatch(singlePizzaActions.replacePizza(newPizza));
      // dispatch(uiActions.showModal({ title: "Success!", msg: message }));
    } catch (err) {
      console.log(err);
    }
  };
}

export const singlePizzaActions = singlePizzaSlice.actions;

export default singlePizzaSlice.reducer;