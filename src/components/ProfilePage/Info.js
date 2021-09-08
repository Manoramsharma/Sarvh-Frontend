import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useSelector, useDispatch } from "react-redux";
import Followbtn from "./Followbtn";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatarContainer: {
    marginTop: 100,
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
  },
  left: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
  },
  fontSize: {
    fontSize: "1rem",
  },
  bold: {
    fontWeight: "bold",
  },
  followersDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  right: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  right2: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  toggleButtonGroup: {
    marginTop: 100,
    width: "70%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  displayDiv: {
    padding: "2%",
  },
}));
const Info = ({ id }) => {
  const { auth, profile } = useSelector((state) => state);
  const [value, setValue] = React.useState(2);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    console.log(userData);
    // var sum = 0;
    // for (var i = 0; i < userData[0].rating.length; i++) {
    //   sum += userData[0].rating[i].rated;
    // }
    // setRating(sum / userData[0].rating.length);
  }, [userData]);
  useEffect(() => {
    if (auth.user.username === id) {
      setUserData([auth.user]);
      console.log(userData);
    } else {
      try {
        const newData = profile.users.filter((user) => user.username === id);
        setUserData(newData);
      } catch (err) {
        console.log(err);
      }
    }
  }, [auth, profile.users, dispatch, id]);
  return (
    <div>
      {userData.map((user) => (
        <div className={classes.avatarContainer} key={user.username}>
          <div className={classes.left}>
            <Avatar
              src={user.avatar}
              alt="profile image"
              className={classes.large}
            />
            <div className={classes.userInfo}>
              <Typography className={classes.bold}>{user.fullname}</Typography>
              <Typography color="textSecondary" className={classes.fontSize}>
                {user.username}
              </Typography>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Controlled</Typography>
                <Rating
                  name="simple-controlled"
                  value={rating ? rating : 0}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.right2}>
              <div className={classes.followersDiv}>
                <Typography className={classes.bold}>
                  {user.followers.length}
                </Typography>
                <Typography>Followers</Typography>
              </div>
              <div className={classes.followersDiv}>
                <Typography className={classes.bold}>
                  {user.following.length}
                </Typography>
                <Typography gutterBottom>Following</Typography>
              </div>
            </div>
            {user.username === auth.user.username ? (
              <Link to={"/editprofile/"} style={{ textDecoration: "none" }}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                  className={classes.fontSize}
                >
                  Edit Profile
                </Button>
              </Link>
            ) : (
              <Followbtn user={user}></Followbtn>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
