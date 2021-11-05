// import axios from "axios";

// class AuthService {
//   constructor() {
//     this.service = axios.create({
//       baseURL: "http://localhost:5000/api",
//       withCredentials: true,
//     });
//   }
//   signup = (username, password) => {
//     return this.service
//       .post("/signup", { username, password })
//       .then((response) => response.data);
//   };
//   loggedin = () => {
//     return this.service.get("/loggedin").then((response) => response.data);
//   };

//   login = (username, password) => {
//     // console.log("in the service: ", username, password);
//     return this.service
//       .post("/login", { username, password })
//       .then((response) => {
//         console.log("login in service: ", response);
//         return response.data;
//       })
//       .catch((err) => console.log("err in login in service: ", err));
//   };

//   logout = () => {
//     return this.service.post("/logout", {}).then((response) => response.data);
//   };
// }

// const authService = new AuthService();

// export default authService;

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const authService = {
  signup: (body) =>
    instance.post("/signup", body).then((response) => response.data),
  getSession: () => instance.get("/session").then((response) => response.data),
};

export default authService;
