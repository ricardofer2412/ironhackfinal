import React, { Component } from "react";
import authService from "./auth-services";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const theme = createTheme();
class Login extends Component {
  state = { username: "", password: "", error: "", loading: false };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.setState({ loading: true, error: "" });
    authService
      .login(username, password)
      .then((response) => {
        localStorage.setItem("BUY_BACK_AUTH", JSON.stringify(response));
        this.setState({ username: "", password: "" });
        this.props.getUser(response, true);
        this.props.history.push("/admin");
        this.setState({
          userName: "",
          password: "",
          loading: false,
        });
      })

      .catch((error) => {
        this.setState({
          error: error && error.response ? error.response.data : error.message,
          loading: false,
        });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={this.handleFormSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  InputProps={{ name: "username" }}
                  required
                  fullWidth
                  label="Username"
                  name="Username"
                  error={this.state.error}
                  autoFocus
                  value={this.state.username}
                  onChange={(e) => this.handleChange(e)}
                />
                <TextField
                  margin="normal"
                  InputProps={{ name: "password" }}
                  required
                  fullWidth
                  error={this.state.error}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={(e) => this.handleChange(e)}
                />
                {this.state.error && (
                  <Typography
                    style={{
                      color: "red",
                      textAlign: "center",
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    {this.state.error}
                  </Typography>
                )}

                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  style={{ backgroundColor: "#5e35b1", position: "relative" }}
                  type="submit"
                  fullWidth
                  disabled={this.state.loading}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {this.state.loading && (
                    <CircularProgress style={{ position: "absolute" }} />
                  )}
                  Sign In
                </Button>
                {/* <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid> */}
              </Box>
            </Box>
          </Container>
        </ThemeProvider>

        {/* <form onSubmit={this.handleFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit"> Login </button>
        </form> */}
      </div>
    );
  }
}

export default Login;
