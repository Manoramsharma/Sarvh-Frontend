import { Typography, makeStyles, Button, TextField } from "@material-ui/core";
import "./forgotpass.css";
import image from "../images/forgotpass.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useParams } from "react-router";

import { useState } from "react";
import axios from "axios";

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
  description : {
      width : "80%",
      textAlign : "center",
      marginTop: "3%"
  },
  email : {
      alignSelf : "flex-start",
      marginLeft : "11.3%",
      marginTop : "10%",
      fontWeight : "700"
  },
  form : {
      alignSelf : "flex-start",
      marginLeft : "11.3%",
      width : "50%",
  },
  textField : {
      marginTop : "2%",
     padding : "0%"
  },
  submitBtn : {
      marginTop : "10%"
  },
  RetypePassword : {
    marginTop : "2%",
    fontWeight : "700"
  }
});

const ResetPass = ({ match  }) => {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const classes = useStyles();

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }


    try {
       const { data } = await axios.put(
        `/api/resetpass/${match.params.resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data)

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
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
        <img src={image} class="image" />
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
          Enter the email address you used when you joined and we will send you intructions to reset your password
          </Typography>
          <Typography className={classes.email} variant="h6">Enter New Password</Typography>
          <form className={classes.form}   onSubmit={resetPasswordHandler}>
          <TextField variant="outlined"  type="password"
            required
            id="password"
            placeholder="Enter new password"
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             fullWidth className={classes.textField}/>
          <Typography className={classes.RetypePassword} 
           type="password"
           required
           id="confirmpassword"
           placeholder="Confirm new password"
           autoComplete="true"
           value={confirmPassword}
           onChange={(e) => setConfirmPassword(e.target.value)}
          variant="h6">Re-type Password</Typography>
          <TextField variant="outlined"  fullWidth className={classes.textField}/>
            <Button type="submit" variant="contained" color="primary" className={classes.submitBtn}>Update Password</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
