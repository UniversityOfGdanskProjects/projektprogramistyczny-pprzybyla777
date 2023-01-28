import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPizzaListData } from "./store/pizzaList-actions";

import Header from "./Components/Header";

import Home from "./pages/Home";

import LoginPage from "./pages/LogInPage";
import LoggedInPage from "./pages/LoggedInPage";

import AllPizzas from "./pages/AllPizzas";
import SinglePizza from "./pages/SinglePizza";
import PizzaForm from "./Components/Forms/PizzaForm";

import Error from "./pages/Error";

import DefaultLayout from "./layouts/DefaultLayout";
import LoggedInLayout from "./layouts/LoggedInLayout";

import "./App.css";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching data!");
    dispatch(fetchPizzaListData());
  }, [dispatch]);

  return (
    <div className="App">

      {/* <Router>

        <Header />

      <Routes>
          <Route path="/" element={<AllPizzas />} />
          <Route path="/pizza/:id" element={<SinglePizza />} />
          <Route path="/addPizza" element={<PizzaForm />}/>
          <Route path="/updatePizza/:id" element={<PizzaForm />}/>

          <Route path="*" element={<Error />}></Route>
      </Routes>

      </Router> */}
      
      <Header />

        <Routes path="/" element={<DefaultLayout />}> {/**/}

          <Route index element={<Home />} />

          <Route path="login" element={<LoginPage />} />

        </Routes>

        <Routes path="loggedIn" element={<LoggedInLayout />}>

          <Route index element={ <LoggedInPage /> }></Route> {/**/}

          <Route path="loggedIn/pizzas">

            <Route index element={<AllPizzas />} />
              <Route path="loggedIn/pizzas/addPizza" element={<PizzaForm />}/>
              <Route path="loggedIn/pizzas/updatePizza/:id" element={<PizzaForm />}/>
              <Route path="loggedIn/pizzas/pizza/:id" element={<SinglePizza />} />



          </Route>

          <Route path="*" element={<Error />}></Route>

        </Routes> {/*LoggedIn ended*/}


    </div>
  );
};


export default App;
