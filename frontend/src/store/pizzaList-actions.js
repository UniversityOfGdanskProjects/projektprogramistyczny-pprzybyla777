import { pizzaListActions } from "./pizzaListSlice";
import { uiActions } from "./ui-slice";
import axios from "axios";

export const fetchPizzaListData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const url = "http://localhost:5000/pizzas";
      const response = await axios(url);

      if (response.status !== 200) {
        throw new Error("Coud not fetch data!");
      }

      console.log(response);

      const data = await response.data;

      return data;
    };

    try {
      const pizzaListData = await fetchData();
      dispatch(pizzaListActions.replacePizzas(pizzaListData));
    } catch (err) {
      console.log(err);
    }
  };
};

export const postNewPizza = (newPizza) => {
  return async (dispatch) => {
    const postData = async () => {
      const url = "http://localhost:5000/pizzas";
      const response = await axios({
        method: "post",
        url: url,
        data: newPizza,
      });

      console.log(response);

      if (response.status !== 201) {
        throw new Error("Coud not send data!");
      }

      return response.data;
    };

    try {
      const resObj = await postData(newPizza);
      const { message, newPizzaObj } = resObj;
      dispatch(pizzaListActions.addPizza(newPizzaObj));
      dispatch(uiActions.showModal({ title: "Success!", msg: message }));
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePizza = (updatedPizza, id) => {
  return async (dispatch) => {
    const patchData = async () => {
      const url = "http://localhost:5000/pizzas/updatePizza/" + id;
      const response = await axios({
        method: "patch",
        url: url,
        data: updatedPizza,
      });

      console.log(response);

      if (response.status !== 200) {
        throw new Error("Coud not update data!");
      }

      return response.data;
    };

    try {
      const resObj = await patchData();
      const {updatedPizza, message} = resObj

      console.log(updatedPizza);

      dispatch(pizzaListActions.updatePizza(updatedPizza))
      dispatch(uiActions.showModal({ title: "Success!", msg: message}))
    } catch (err) {
      console.log(err);
    }
  };
};

export const deletePizza = (id) => {
  return async (dispatch) => {
    const deleteData = async () => {
      const url = "http://localhost:5000/pizzas/deletePizza/" + id;
      const response = await axios({
        method: "delete",
        url: url,
      });

      console.log(response);

      if (response.status !== 200) {
        throw new Error("Coud not delete pizza!");
      }

      return response.data;
    };

    try {
      const resObj = await deleteData();
      const { message, id } = resObj;

      dispatch(pizzaListActions.deletePizza(id)) //// !!!!!! 
      dispatch(uiActions.showModal({ title: "Success!", msg: message}))
    } catch (err) {
      console.log(err);
    }
  };
}