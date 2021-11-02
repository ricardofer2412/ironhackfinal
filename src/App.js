import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Devices from './phones.json'
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";

import IPhone from "./Components/Phones/iPhone";
import Samsung from "./Components/Phones/Samsung"
import Pixel from "./Components/Phones/Pixel"
import IPad from "./Components/iPad"

import Carrier from "./Components/Carrier/Main";
import Att from "./Components/Carrier/Att"
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
              <Route path="/admin/products" exact>
            <Products />
          </Route>{" "}
          <Route path="/admin/products/newproduct" exact>
            <NewProduct />
          </Route>
          <Route
            exact
            path="/admin/products/:id"
            component={EditProduct}
          ></Route>
              <Route path='/iphone'>
                    <IPhone/>
              </Route>
              <Route path='/samsung'>
                    <Samsung/>
              </Route>  
              <Route path='/pixel'>
                <Pixel/>
              </Route>
              <Route path='/ipad'>
                <IPad/>
              </Route>
              <Route
                 path="/:deviceModel" exact
                 render={(props) => <Carrier device={Devices}{...props}/>}
              />
              <Route 
                    path='/:device/att' 
                    render={(props) => <Att device={Devices}{...props} />}
              />
              <Route 
                    path='/:device/verizon' 
                    render={(props) => <Att device={Devices}{...props} />}
              />
            </Switch>
        </Router>
      
    </div>
  );
}

export default App;
