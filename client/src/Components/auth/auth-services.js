import axios from "axios";
import error_handling from "../../../../backend/error_handling";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true,
    });
  }
  signup = (
    username,
    password,
    role,
    userImg,
    firstName,
    lastName,
    active,
    userEmail
  ) => {
    return this.service
      .post("/signup", {
        username,
        password,
        role,
        userImg,
        firstName,
        lastName,
        active,
        userEmail,
      })
      .then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/loggedin").then((response) => response.data);
  };

  login = (username, password) => {
    // console.log("in the service: ", username, password);
    return this.service
      .post("/login", { username, password })
      .then((response) => {
        console.log("login in service: ", response);
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
}

const authService = new AuthService();

export default authService;
