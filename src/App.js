import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Devices from './phones.json'
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";

import Device from "./Components/Func"
import CarrierLinks from "./Components/Carrier/Routes";
import Carrier from './Components/Carrier'

import Products from "./Components/Admin/Products";
import SideBar from "./Components/Admin/SideBar";
import NewProduct from "./Components/Admin/NewProduct";
import EditProduct from "./Components/Admin/EditProduct";

function App() {
  return (
    <div className="App">
        <Router>
          <NavBar/>
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/admin">
                <Admin/>
              </Route>
              <Route exact path="/admin/products" component={Products}>
              </Route>
              <Route path="/admin/products/newproduct" exact>
                <NewProduct />
              </Route>
              <Route
                exact
                path="/admin/products/:id"
                component={EditProduct}
              />
              <Route 
                exact path='/:phone'
                component={Device}
              />
              <Route
                exact path="/:phone/:deviceModel" 
                render={(props) => <CarrierLinks device={Devices}{...props}/>}
              />
              <Route 
                path='/:phone/:device/:carrier' 
                render={() => <Carrier />}
              />
            </Switch>
        </Router>
      
    </div>
  );
}

export default App;
