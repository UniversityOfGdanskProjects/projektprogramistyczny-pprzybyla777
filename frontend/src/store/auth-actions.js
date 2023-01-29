import { authActions } from "./auth-slice";
import { uiActions } from "./ui-slice";
import axios from "axios";


const baseUrl = "http://localhost:5000/auth"


export const login = (credentials) => {
  return async (dispatch) => {
    const postData = async () => {
      const url = baseUrl;
      const response = await axios({
        method: "post",
        url: url,
        data: credentials,
      });

      console.log(response);

      if (response.status !== 201) {
        dispatch(uiActions.showModal({title: "Failure!", msg: response.data.message}))
      }

      return response.data;
    };

    try {
      const resObj = await postData();
      const { accessToken } = resObj;
      dispatch(authActions.setCredentials({accessToken}));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    const postData = async () => {
      const url = baseUrl + "/logout";
      const response = await axios({
        method: "post",
        url: url,
      });

      console.log(response);

      if (response.status === 204) {
        dispatch(uiActions.showModal({title: "Logout", msg: "No content sent!"}))
      }

      return response.data;
    };

    try {
      const resObj = await postData();
      const { message } = resObj;
      dispatch(authActions.logOut);
      dispatch(uiActions.showModal({title: "Success!", msg: "You have logged out!"}))
    } catch (err) {
      console.log(err);
    }
  };
};

export const refresh = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const url = baseUrl + "/refresh";
      const response = await axios(url);

      if (response.status !== 200) {
        throw new Error("Unauthorized, can't refresh access token");
      }

      console.log(response);

      const data = await response.data;

      return data;
    };

    try {
      const { accessToken } = await fetchData();
      dispatch(authActions.setCredentials({ accessToken }));
    } catch (err) {
      console.log(err);
    }
  };
};