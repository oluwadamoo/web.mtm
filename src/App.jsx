import { useContext } from "react";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import { AuthContext } from "./context/AuthContext";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext)
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/products'>
          <ProductList />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/products/:id'>
          <Product />
        </Route>

        <Route path='/cart'>
          {user ? <Cart /> : <Login />}
        </Route>



      </Switch>
    </Router>
  )
}

export default App;
