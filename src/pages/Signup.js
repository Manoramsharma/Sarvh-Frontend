import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import styles from "./Signup.css";
import Signupimg from "../images/Signupimg.jpg";
import { register } from "../redux/actions/authAction";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { validateEmail, validatePassword } from "../helper/validator";
import HomeIcon from "@material-ui/icons/Home";

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

function Signup(props) {
  const { auth, alert } = useSelector(state => state);
  const dispatch = useDispatch();
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

  useEffect(() => {
    if (auth.token) history.push("/");
  }, [auth.token, history]);
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
          const userData = {
            fullname,
            username,
            email,
            password,
            gender,
          };
          dispatch(register(userData));
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
          <Link to={"/"}>
                <HomeIcon color="secondary" />
              </Link>
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
