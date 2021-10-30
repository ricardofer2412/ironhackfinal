import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from "./Components/Home";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";
import IPhone from "./Components/Phones/iPhone";
import Samsung from "./Components/Phones/Samsung"
import Pixel from "./Components/Phones/Pixel"

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
                this is all ipad models we buy
              </Route>
              <Route path='/macbook'>
                this is all macbook models we buy
              </Route>
            </Switch>
        </Router>
      
    </div>
  );
}


export default App;
