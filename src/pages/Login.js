import React, { useState, useContext } from "react";
import "./Login.css";
import Loginimg from "../images/Loginimg.jpg";
import { useHistory, Link } from "react-router-dom";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Swal from "sweetalert2";
import { API } from "../Backend";
import { LoginContext } from "../hooks/LoginContext";
import { validateEmail, validatePassword } from "../helper/validator";
import GoogleButton from "react-google-button";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
axios.defaults.withCredentials = true;
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 31px;
`;
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

const fetchAuthUser = () => {
  console.log("in fetch auth user");
  axios
    .get("http://localhost:8000/auth/user", {
      withCredentials: true,
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

const Login = () => {
  // const user = useSelector((state: any) => state.app.authUser as any) as any;
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const classes = useStyles();
  const { auth, setAuthFunc } = useContext(LoginContext);
  const dispatch = useDispatch();

  function googleAuth() {
    console.log("clicking on gogole auth");
    // fetchAuthUser();
    // axios.get(`${API}/auth/google`,{withCredentials: true})
    // let timer: NodeJS.Timeout | null = null;
    const googleLoginURL = API + "/auth/google";
    const newWindow = window.open(
      googleLoginURL,
      "_blank",
      "width=500,height=600"
    );

    if (newWindow) {
      console.log("in new windows");
      if (newWindow.closed) {
        console.log("in new window ");
        fetchAuthUser();
        console.log("Yay we're authenticated");
      }
    }
  }
  async function loginAPI(e) {
    e.preventDefault();
    if (!validateEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email...",
        text: "Please try again :(",
      });
    } else if (!validatePassword(password)) {
      // validating password
      Swal.fire({
        icon: "error",
        title: "Invalid Password..",
        text: "Password should be 8 characters long, should have one numerical, capital and a special character",
      });
    } else {
      const userData = {
        email: email,
        password: password,
      };
      console.log(userData);
      dispatch(login(userData));
      // axios.post(`${API}/api/login`, { email, password }).then(res => {
      //   console.log(res.data);
      //   const data = res.data;
      //   if (data.msg === "Login Sucess!") {
      //     setAuthFunc(true, data.access_token, data.user.fullname, data.user.avatar);
      //   }
      // });
    }
  }
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
              <form noValidate autoComplete="off" onSubmit={loginAPI}>
                <TextField
                  className={classes.field}
                  label="Username or Email"
                  variant="standard"
                  color="secondary"
                  type="email"
                  required
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  className={classes.field}
                  label="Password"
                  variant="standard"
                  type="password"
                  colors="primary"
                  required
                  onChange={e => setPassword(e.target.value)}
                />
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                  className={classes.btn}
                >
                  Submit
                </Button>
              </form>
              <div className={classes.forgotPass}>
                <a className={classes.forgotPass} href="#">
                  Forgot Password
                </a>
              </div>
            </Container>
          </div>

          <div className="mainbtn">
            <Typography gutterBottom>Or Log in with</Typography>
            {/* <Link target="_blank" to={"//http:localhost:8000/auth/google"} ><GoogleButton  /> </Link> */}
            {/* <a href={"//http:localhost:8000/auth/google"}><GoogleButton /></a> */}
            <GoogleButton onClick={googleAuth} />
            <button className={classes.facebook}>FACEBOOK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
