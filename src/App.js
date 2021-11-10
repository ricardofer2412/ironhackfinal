import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Devices from "./phones.json";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import NavBar from "./Components/NavBar";
import Device from "./Components/Devices";
import CarrierLinks from "./Components/Carrier/Routes";
import Storage from './Components/Carrier'
import Offers from "./Components/Offers"
import UserForm from './Components/UserForm'
import Confirm from "./Components/Confirmation";

import Products from "./Components/Admin/Products";
import SideBar from "./Components/Admin/SideBar";
import NewProduct from "./Components/Admin/NewProduct";
import EditProduct from "./Components/Admin/EditProduct";
import Signup from "./Components/auth/Signup";
import authService from "./Components/auth/auth-services";
import Login from "./Components/auth/Login";
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import Users from "./Components/Admin/Users/Users";
import CreateUser from "./Components/Admin/Users/CreateUser";
class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    loading: true,
  };
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    if (this.state.user === null) {
      authService
        .loggedin()
        .then((data) => {
          this.setState({
            user: data,
            isLoggedIn: true,
          });
        })
        .catch((err) => {
          this.setState({
            user: null,
            isLoggedIn: false,
          });
        });
    }
  };
  getTheUser = (userObj, loggedIn) => {
    this.setState({
      user: userObj,
      isLoggedIn: loggedIn,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          {/* <NavBar />  */}

          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Switch>
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup {...props} getUser={this.getTheUser} />
              )}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} getUser={this.getTheUser} />}
            />
            <Route
                exact path='/thankyou'
                render={() => <Confirm/>}
               />
            <Route path="/" exact>
              <Home />
            </Route>

            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin"
              component={Admin}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/products"
              component={Products}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/products/newproduct"
              component={NewProduct}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/products/:id"
              component={EditProduct}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/users"
              component={Users}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/createuser"
              component={CreateUser}
            />
            <Route exact path="/:phone" component={Device} />
            <Route
              exact
              path="/:phone/:deviceModel"
              render={(props) => <CarrierLinks device={Devices} {...props} />}
            />
            <Route
              exact
              path="/:phone/:device/:carrier"
              render={() => <Storage />}
            />
            <Route
              exact
              path="/:phone/:device/:carrier/:storage"
              render={() => <Offers />}
            />
            <Route
              exact
              path="/:phone/:device/:carrier/:storage/userform"
              render={() => <UserForm />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
