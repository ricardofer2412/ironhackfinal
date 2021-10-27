import React from "react";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {
        <Router>
            <Switch>
              <Route path="/" exact>
                This is home
              </Route>
              <Route path="/admin">
                This is admin route
              </Route>
            </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
