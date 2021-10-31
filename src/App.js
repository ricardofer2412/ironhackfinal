import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";
import IPhone from "./Components/Phones/iPhone";
import Products from "./Components/Admin/Products";
import SideBar from "./Components/Admin/SideBar";
import NewProduct from "./Components/Admin/NewProduct";
import EditProduct from "./Components/Admin/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/admin" exact>
          <Admin />
        </Route>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/iphone">
            <IPhone />
          </Route>
          <Route path="/admin/products" exact>
            <Products />
          </Route>{" "}
          <Route path="/admin/products/newproduct" exact>
            <NewProduct />
          </Route>
          <Route path="/admin/products/:id" exact>
            <EditProduct />
          </Route>
          <Route path="/samsung">this is all samsung models we buy</Route>
          <Route path="/pixel">this is all pixel models we buy</Route>
          <Route path="/ipad">this is all ipad models we buy</Route>
          <Route path="/macbook">this is all macbook models we buy</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
