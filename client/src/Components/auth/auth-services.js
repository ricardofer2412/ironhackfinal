import axios from "axios";

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

  login = async (username, password) => {
    // console.log("in the service: ", username, password);
    try {
      const response = await this.service.post("/login", {
        username,
        password,
      });

      return response.data;
    } catch (e) {
      throw e;
    }
  };

  logout = () => {
    return this.service.post("/logout", {}).then((response) => response.data);
  };
}

const authService = new AuthService();

export default authService;
