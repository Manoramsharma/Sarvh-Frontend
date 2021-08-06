import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import Info from "../components/ProfilePage/Info";
import Posts from "../components/ProfilePage/Posts";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ProfilePageProductDisplayComponent from "../components/ProfilePage/ProfilepageProductDisplayComponent";
import { useParams } from "react-router";
import { getProfileUsers } from '../redux/actions/profileAction'
import { GLOBALTYPES } from '../redux/actions/globalTypes'
import LinearProgress from '@material-ui/core/LinearProgress';

import Footer from "../components/footer";

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
const ProfilePage = () => {
  const { profile, auth } = useSelector(state => state);
  console.log(profile);
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  // useEffect(() => {
  //   if (profile.ids.every(item => item !== id)) {
  //     dispatch(getProfileUsers({ id, auth }));
  //   }
  // }, [id, auth, dispatch, profile.ids]);
  return (
    <div>
      {profile.loading && <LinearProgress/>}
      <NavbarLoggedIn />
      <div className={classes.avatarContainer}>
        <div className={classes.left}>
          <Avatar
            src={avatar}
            alt="profile image"
            className={classes.large}
          />
          <div className={classes.userInfo}>
            <Typography className={classes.bold}>
              {name}
            </Typography>
            <Typography color="textSecondary" className={classes.fontSize}>
              {username}
            </Typography>
            <StarOutlinedIcon />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.right2}>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>
                {followers}
              </Typography>
              <Typography>Followers</Typography>
            </div>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>
                {following}
              </Typography>
              <Typography gutterBottom>Following</Typography>
            </div>
          </div>
          <Button
            size="small"
            color="primary"
            variant="contained"
            className={classes.fontSize}
          >
            Follow
          </Button>
        </div>
      </div>
      <div>
        <ToggleButtonGroup
          className={classes.toggleButtonGroup}
          type="radio"
          name="options"
          defaultValue={1}
          radioDisplay={false}
        >
          <ToggleButton id="tbg-radio-1" value={1}>
            ALL
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2}>
            MEN
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            WOMEN
          </ToggleButton>
          <ToggleButton id="tbg-radio-4" value={4}>
            ACCESSORIES
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div className={classes.displayDiv}>
        <ProfilePageProductDisplayComponent />
      </div>
      <Footer />
      <Info id={id} auth={auth} profile={profile} dispatch={dispatch} />
      <Posts />
    </div>
  );
};

export default ProfilePage;
