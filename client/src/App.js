import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import LoginPage from "./Components/auth/LogInPage";
import LoggedInPage from "./pages/LoggedInPage";

import PizzaList from "./Components/Pizza/PizzaList";
import SinglePizza from "./pages/SinglePizza";

import PizzaForm from "./Components/Forms/PizzaForm";
import EditPizza from "./Components/Forms/EditPizza";

import Error from "./pages/Error";

import DefaultLayout from "./layouts/DefaultLayout";
import DashLayout from "./layouts/DashLayout";

import PersistLogin from "./Components/auth/PersistLogin";
import Prefetch from "./Components/auth/Prefetch";

import RequireAuth from "./Components/auth/RequireAuth";
import { ROLES } from "./config/roles";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Prefetch />}>
          <Route path="/" element={<DefaultLayout />}>
            {/* PUBLIC */}
            
            <Route index element={<PizzaList />} />
            <Route path="pizza/:id" element={<SinglePizza />} />
            <Route path="login" element={<LoginPage />} />

            {/* PROTECTED */}
            <Route element={<PersistLogin />}>
              <Route
                element={
                  <RequireAuth allowedRoles={[ROLES.Admin, ROLES.User]} />
                }
              >
                <Route path="dash" element={<DashLayout />}>
                  <Route index element={<LoggedInPage />} />

                  <Route path="pizzas">
                    <Route index element={<PizzaList />} />
                    <Route
                      element={<RequireAuth allowedRoles={[ROLES.Admin]} />}
                    >
                      <Route path=":id" element={<EditPizza />} />
                      <Route path="new" element={<PizzaForm />} />
                    </Route>
                    <Route path="pizza/:id" element={<SinglePizza />} />
                  </Route>
                </Route>
                {/* End Dash */}
              </Route>
            </Route>
            {/* End Protected */}
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
