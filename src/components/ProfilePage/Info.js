import React, { useState, useEffect } from "react";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProfileUsers } from "../../redux/actions/profileAction";

const useStyles = makeStyles(theme => ({
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
const Info = ({id,auth,profile,dispatch}) => {
  const classes = useStyles();
  const [followers, setFollowers] = useState(-1);
  const [following, setFollowing] = useState(-1);
  const [userData, setUserData] = useState([]);
  const [self, setSelf] = useState(false);
  useEffect(() => {
    console.log("use effect ran");
    if (id === auth.user.username) {
      setUserData(auth.user);
      console.log(auth.user)
      setFollowers(auth.user.followers.length);
      setFollowing(auth.user.following.length);
      setSelf(true);
    } else {
      dispatch(getProfileUsers({ users:profile.users, id, auth }));
      const newData = profile.users.filter(users => users.username === id);
      // console.log(profile.users[0]);
      console.log(newData)
      setUserData(profile.users[0]);
      // setUserData(profile.users[0]);
      // setFollowers(newData.followers.length);
      // setFollowing(newData.following.length);
    }
  }, [id, auth,dispatch, profile.users]);
  return (
    <div>
      <div className={classes.avatarContainer}>
        <div className={classes.left}>
          <Avatar
            src={userData.avatar}
            alt="profile image"
            className={classes.large}
          />
          <div className={classes.userInfo}>
            <Typography className={classes.bold}>
              {userData.fullname}
            </Typography>
            <Typography color="textSecondary" className={classes.fontSize}>
              {userData.username}
            </Typography>
            <StarOutlinedIcon />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.right2}>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>{userData.followers.length}</Typography>
              <Typography>Followers</Typography>
            </div>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>{userData.following.length}</Typography>
              <Typography gutterBottom>Following</Typography>
            </div>
          </div>
          {!self && (
            <Button
              size="small"
              color="primary"
              variant="contained"
              className={classes.fontSize}
            >
              Follow
            </Button>
          )}

          {self && (
            <Button
              size="small"
              color="primary"
              variant="contained"
              className={classes.fontSize}
            >
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
