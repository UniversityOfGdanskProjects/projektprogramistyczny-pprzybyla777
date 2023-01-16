import { Routes, Route } from "react-router-dom"
import Default from "./layouts/Default";
import Home from "./pages/Home";
import Login from "./features/auth/Login";
import LoggedIn  from "./layouts/LoggedIn";
import Welcome from "./pages/Welcome";
import PizzaList from "./features/pizzaReviewsList/pizzaList";

function App() {
  return (
    <Routes>
      <Route path="/"  element={<Default/>}>
        <Route index element={ <Home /> } />
        <Route path="login" element={ <Login /> }/>
      </Route>

      <Route path="loggedIn" element={<LoggedIn />}>
        <Route index element={<Welcome />}></Route>

        <Route path="reviews">
          <Route index element={<PizzaList/>} />
        </Route>

      </Route>  {/*LoggedIn ended*/}

    </Routes>
  );
}

export default App;
