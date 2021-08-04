import { Typography, makeStyles, Button, TextField } from "@material-ui/core";
import "./forgotpass.css";
import image from "../images/forgotpass.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  backBtn: {
    height: "3.5rem",
    width: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },
  typography: {
    fontWeight: "700",
  },
  description: {
    width: "80%",
    textAlign: "center",
    marginTop: "3%",
  },
  email: {
    alignSelf: "flex-start",
    marginLeft: "11.3%",
    marginTop: "10%",
    fontWeight: "700",
  },
  form: {
    alignSelf: "flex-start",
    marginLeft: "11.3%",
    width: "50%",
  },
  textField: {
    marginTop: "2%",
    padding: "0%",
  },
  submitBtn: {
    marginTop: "10%",
  },
});

const ForgotPassword = () => {
  const classes = useStyles();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const forgotPasswordHandler = async e => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/forgotpassword",
        { email },
        config
      );

      history.push("/");
    } catch (error) {
      alert("wrong");
    }
  };

  return (
    <div className={classes.container}>
      <div class="leftMain">
        <Typography gutterBottom variant="h4" class="heading headingmain">
          S A R V H
        </Typography>
        <Typography variant="h6" class="heading sub">
          Discover the fashion trending today.
        </Typography>
        <Typography variant="h6" class="heading sub">
          Discover. Sell. Connect
        </Typography>
        <img src={image} class="image" alt="forgot_pass"/>
      </div>
      <div class="rightMain">
        <div class="navRight">
          <Button className={classes.backBtn}>
            <ArrowBackIosIcon />
          </Button>
          <Typography variant="h6">
            Not a member yet? <span class="signup">Sign Up</span>
          </Typography>
        </div>
        <div class="rightDown">
          <Typography className={classes.typography} variant="h4">
            FORGOT <span class="passwordText">PASSWORD</span>
          </Typography>
          <Typography className={classes.description} variant="h6">
            Enter the email address you used when you joined and we will send
            you intructions to reset your password
          </Typography>
          <Typography className={classes.email} variant="h6">
            Email Address
          </Typography>
          <form className={classes.form} onSubmit={forgotPasswordHandler}>
            <TextField
              type="email"
              required
              id="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Send reset instructions
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
