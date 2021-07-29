import React, { useState } from "react";
import styles from "./Login.css";
import Loginimg from "../images/Loginimg.jpg";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, FormControlLabel, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import Swal from "sweetalert2";
const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// function to validate password
function validatePassword(str) {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(str);
}
function Login(props) {
  const history = useHistory();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const logInForm = e => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true);
      Swal.fire({
        icon: "error",
        title: "Invalid Email...",
        text: "Please try again :(",
      });
    } else if (!validatePassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password..",
        text: "Password should be 8 characters long, should have one numerical, capital and a special character",
      });
    } else {
      console.log(email, password);
      fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.access_token){
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Login Successfull, Welcome to Sarvh!",
            });
          } else if(data.msg==="This email does not exist"){
            Swal.fire({
              icon: "error",
              title: "Email doesn't exists",
              text: "Signup instead!",
            });
          } else if(data.msg==="Password is incorrect"){
            Swal.fire({
              icon: "error",
              title: "Password Incorrect!",
              text: "Please try again!",
            });
          }
        });
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
            <Container size="sm">
              <Typography
                variant="h6"
                color="textPrimary"
                component="h2"
                gutterBottom
              >
                Login to Continue
              </Typography>
              <form noValidate autoComplete="off" onSubmit={logInForm}>
                <TextField
                  className={classes.field}
                  label="Email"
                  // variant="outlined"
                  color="secondary"
                  id="outlined-basic"
                  fullWidth
                  required
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  className={classes.field}
                  label="Password"
                  // variant="outlined"
                  color="secondary"
                  type="password"
                  fullWidth
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  Submit
                </Button>
              </form>
              <div className="forget">
                {" "}
                <a href="" className="first">
                  Forgot Password?
                </a>{" "}
              </div>
            </Container>
          

          <div className="mainbtn">
            <button className="facebook">FACEBOOK</button>
            <button className="google">GOOGLE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
