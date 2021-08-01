import React, { useState, useContext } from "react";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { Divider } from "@material-ui/core";
import ProductDisplayComponent from "../components/CategoriesPages/productDisplay";
import ProfilePageProductDisplayComponent from "../components/ProfilePage/ProfilepageProductDisplayComponent";
import { useParams } from "react-router";
import { LoginContext } from "../hooks/LoginContext";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatarContainer: {
    marginTop: 130,
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

// let profileInfo = {
//   img: "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2019/04/suprised-man.jpg",
//   name: "Swahim Namdev",
//   username: "@swahim",
//   followers: 1000,
//   following: 500,
// };

const ProfilePage = () => {
  const { auth } = useContext(LoginContext);
  const { user_name_param } = useParams();
  console.log(auth);
  if (auth[0].isAuthenticated && auth[0].username === user_name_param) {
    console.log("user is view it's own profile");
  }
  const [profileInfo, setProfileInfo] = useState([
    {
      img: null,
      name: "Sohan Bandary",
      username: "username2001",
      followers: 200,
      following: 2000,
    },
  ]);
  console.log(user_name_param);
  console.log(profileInfo);
  const classes = useStyles();
  return (
    <div>
      <NavbarLoggedIn />
      <div className={classes.avatarContainer}>
        <div className={classes.left}>
          <Avatar
            src={profileInfo[0].img}
            alt="profile image"
            className={classes.large}
          />
          <div className={classes.userInfo}>
            <Typography className={classes.bold}>
              {profileInfo[0].name}
            </Typography>
            <Typography color="textSecondary" className={classes.fontSize}>
              {profileInfo[0].username}
            </Typography>
            <StarOutlinedIcon />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.right2}>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>
                {profileInfo[0].followers}
              </Typography>
              <Typography>Followers</Typography>
            </div>
            <div className={classes.followersDiv}>
              <Typography className={classes.bold}>
                {profileInfo[0].following}
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
    </div>
  );
};

export default ProfilePage;
