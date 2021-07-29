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
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
    // '& > *': {
    //   margin: theme.spacing(1),
    // },
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
  const [gender, setGender] = useState("male");
  const [emailError, setEmailError] = useState(false);
  const [fullnameError, setFullnameError] = useState(false);

  const signUpForm = e => {
    e.preventDefault();
    if (fullname === "") {
      Swal.fire({
        icon: "error",
        title: "Invalid Name",
        text: "Please enter valid name",
      });
      setFullnameError(true);
    } else if (!validateEmail(email)) {
      setEmailError(true);
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
          fetch(`http://localhost:5000/api/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fullname,
              username,
              email,
              password,
              gender,
            }),
          }).then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.msg==="this email already exists"){
              Swal.fire({
                icon: "error",
                title: "Email already exists",
                text: "Please sign in instead",
              });
            } else if(data.msg==="this user name already exists"){
              Swal.fire({
                icon: "error",
                title: "Username already exists",
                text: "Please try another username",
              });
            } else if(data.msg==="register success!"){
              Swal.fire({
                icon: "success",
                title: "Success",
                text: "Registration Successfull, Welcome to Sarvh!",
              });
            }
          })
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
          <Container size="sm">
            <Typography
              variant="h6"
              color="textPrimary"
              component="h2"
              gutterBottom
            >
              Signup to Continue
            </Typography>
            <form noValidate autoComplete="off" onSubmit={signUpForm}>
              <TextField
                className={classes.field}
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                error={fullnameError}
                // helperText={text === "asdf" ? 'Empty field!' : ' '}
                onChange={e => setFullname(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Username"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Email"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                onChange={e => setEmail(e.target.value)}
                error={emailError}
              />
              <TextField
                className={classes.field}
                label="Password"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                type="password"
                helperText="
                Minimum 8 characters:
                1 capital, 1 small, 1 special character allowed"
                onChange={e => setPassword(e.target.value)}
              />
              <TextField
                className={classes.field}
                label="Confirm Password"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                type="password"
                onChange={e => setConfirmPassword(e.target.value)}
              />
              <TextField
                label="Gender"
                value={gender}
                select
                onChange={e => setGender(e.target.value)}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
              </TextField>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
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
