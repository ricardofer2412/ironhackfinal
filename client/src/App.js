import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Devices from "./phones.json";
import Home from "./Components/Home";
import Admin from "./Components/Admin";
import Device from "./Components/Devices";
import CarrierLinks from "./Components/Carrier/Routes";
import Storage from "./Components/Carrier";
import Offers from "./Components/Offers";
import UserForm from "./Components/UserForm";
import Confirm from "./Components/Confirmation";
import ScrollToTop from "./Components/ScrollToTop";
import Products from "./Components/Admin/Products";
import NewProduct from "./Components/Admin/NewProduct";
import EditProduct from "./Components/Admin/EditProduct";
import Signup from "./Components/auth/Signup";
import authService from "./Components/auth/auth-services";
import Login from "./Components/auth/Login";
import ProtectedRoute from "./Components/auth/ProtectedRoute";
import Users from "./Components/Admin/Users/Users";
import CreateUser from "./Components/Admin/Users/CreateUser";
import Order from "./Components/Admin/Order";
import EditOrder from "./Components/Admin/EditOrder";
import TrackOrder from "./Components/Track Order";
import EditUser from "./Components/Admin/Users/EditUser";
import LandingPage from "./Components/Admin/LandingPage";

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
    const storedUser = localStorage.getItem("BUY_BACK_AUTH");
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
    } else {
      if (storedUser) {
        this.getTheUser(JSON.parse(storedUser), true);
      }
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

          {/* <Route path="/admin" exact>
            <Admin />
          </Route> */}
          <ScrollToTop />
          <Switch>
            <Route
              exact
              path="/signup"
              render={(props) => (
                <Signup {...props} getUser={this.getTheUser} />
              )}
            />

            <Route exact path="/landingpage" component={LandingPage} />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} getUser={this.getTheUser} />}
            />
            <Route exact path="/thankyou" render={() => <Confirm />} />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/faq" />
            <Route exact path="/track-order" render={() => <TrackOrder />} />
            <Route exact path="/contact-us" />
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
              path="/admin/users"
              component={Users}
              getUser={this.getTheUser}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/users/:id"
              component={EditUser}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/orders"
              component={Order}
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
              path="/admin/products/:id"
              component={EditProduct}
            />
            <ProtectedRoute
              user={this.state.user}
              exact
              path="/admin/orders/:id"
              component={EditOrder}
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
