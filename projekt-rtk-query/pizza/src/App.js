import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import SinglePizza2 from "./pages/SinglePizza2";
import Error from "./pages/Error";
import "./App.css";
import PizzaForm2 from "./Components/Forms/PizzaForm2";
import EditPizza from "./Components/Forms/EditPizza";

const App = () => {

  return (
    <div className="App">
      <Router>

        <Header />

      <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/pizza/:id" element={<SinglePizza2 />} />

          <Route path="/pizzas">
            <Route index element={<h1>Hi!</h1>}/>
            <Route path=":id" element={ <EditPizza /> } />
            <Route path="new" element={<PizzaForm2 />}/>
          </Route>


          <Route path="*" element={<Error />}></Route>
      </Routes>

      </Router>
    </div>
  );
};

export default App;
