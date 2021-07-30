import React, { useState } from "react";
import "./Login.css";
import Loginimg from "../images/Loginimg.jpg";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    width: "130%",
    marginLeft: "-10%",
  },
  mainContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "6%",
  },
  btn: {
    marginTop: "5%",
    width: "10rem",
  },
  forgotPass: {
    letterSpacing: "0.1rem",
    textDecoration: "none",
  },
});
function Login(props) {
  const history = useHistory();
  const classes = useStyles();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    if (data.status === 400 || !data) {
      window.alert("invalid signup");
      console.log("invalid");
    } else {
      window.alert("sucsess");
      history.push("/home");
    }
  };

  return (
    <div>
      <div className="main" id="left-sidebar">
        <div className="imgbg">
          <img src={Loginimg} alt="" className="imghere" />
        </div>
        <div className="mainlog">
          <div className="btnup">
            <button className="singup">LOGIN</button>

            <button
              className="Login"
              onClick={() => {
                history.push("/signup");
              }}
            >
              SIGN UP
            </button>
          </div>
          <div>
            <Container className={classes.mainContainer}>
              <Typography
                variant="h5"
                color="textPrimary"
                component="h2"
                gutterBottom
              >
                Login to Continue
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.field}
                  label="Username or Email"
                  variant="standard"
                  color="secondary"
                  type="email"
                  required
                />
                <TextField
                  className={classes.field}
                  label="Password"
                  variant="standard"
                  type="password"
                  colors="primary"
                  required
                />
              </form>
              <div className={classes.forgotPass}>
                <a className={classes.forgotPass} href="#">
                  Forgot Password
                </a>
              </div>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                className={classes.btn}
              >
                Submit
              </Button>
            </Container>
          </div>

          <div className="mainbtn">
            <Typography gutterBottom>Or Log in with</Typography>
            <button className={classes.facebook}>FACEBOOK</button>
            <button className={classes.google}>GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
