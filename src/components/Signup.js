import React, { useState } from "react";
import styles from "./Signup.css";
import Signupimg from "../images/Signupimg.jpg";
import Login from "./Login";
import { useHistory } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles, FormControlLabel, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
  },
  mainContainer: {
    width: "50%",
    marginTop: "6%",
    textAlign: "center",
  },
  btn: {
    marginTop: "5%",
    width: "10rem",
  },
});
// function to validate email
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
function Signup(props) {
  const history = useHistory();
  const classes = useStyles();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  var [emailError, setEmailError] = useState(false);

  const signUpForm = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email...",
        text: "Please try again :(",
      });
    } else {
      // checking if password is same or not
      if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Password doesn't match..",
          text: "Please try again :(",
        });
      } else {
        // if password is same
        if (!validatePassword(password)) {
          // validating password
          Swal.fire({
            icon: "error",
            title: "Invalid Password..",
            text: "Password should be 8 characters long, should have one numerical, capital and a special character",
          });
        } else {
          console.log(fullname, username, email, password, confirmPassword);
        }
      }
    }
  };

  return (
    <div>
      <div className="main">
        <div className="imgbg">
          <img src={Signupimg} alt="" className="imghere" />
        </div>
        <div className="mainlog">
          <div className="btnup">
            <button
              className="singup"
              onClick={() => {
                history.push("/login");
              }}
            >
              LOGIN
            </button>
            <button className="login">SIGN UP</button>
          </div>
          <Container className={classes.mainContainer}>
            <Typography
              variant="h5"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Signup to Continue
            </Typography>
            <form noValidate autoComplete="off" onSubmit={signUpForm}>
              <TextField
                className={classes.field}
                label="Full Name"
                variant="standard"
                color="secondary"
                fullWidth
                required
                onChange={(e) => setFullname(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Username"
                variant="standard"
                color="secondary"
                fullWidth
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Email"
                variant="standard"
                color="secondary"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
              />
              <TextField
                className={classes.field}
                label="Password"
                variant="standard"
                color="secondary"
                fullWidth
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Confirm Password"
                variant="standard"
                color="secondary"
                type="password"
                fullWidth
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
                className={classes.btn}
              >
                Sign Up
              </Button>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Signup;
