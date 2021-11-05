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
import Signup from "./Components/auth/Signup";
import authService from "./Components/auth/auth-services";
import Login from "./Components/auth/Login";
class App extends React.Component {
  state = {
    isLoggedIn: false,
    user: null,
    loading: true,
  };

  componentDidMount() {
    authService.getSession().then((data) => {
      console.log(data);
      const { user } = data;
      this.setState({
        user,
        loading: false,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
          {/* <NavBar
            userData={this.state.user}
            userIsLoggedIn={this.state.isLoggedIn}
            getUser={this.getTheUser}
          /> */}
          <NavBar user={this.state.user} loading={this.state.loading} />

          <Route path="/admin" exact>
            <Admin />
          </Route>

          <Switch>
            <Route
              exact
              path="/signup"
              render={(props) => <Signup {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} getUser={this.getTheUser} />}
            />
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
            <Route
              exact
              path="/admin/products/:id"
              component={EditProduct}
            ></Route>
            <Route path="/samsung">this is all samsung models we buy</Route>
            <Route path="/pixel">this is all pixel models we buy</Route>
            <Route path="/ipad">this is all ipad models we buy</Route>
            <Route path="/macbook">this is all macbook models we buy</Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
