import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import Info from "../components/ProfilePage/Info";
import Posts from "../components/ProfilePage/Posts";
import { useParams } from "react-router";
import { getProfileUsers } from "../redux/actions/profileAction";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Navbar } from "../components/Navbar";

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
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (profile.users.every(item => item !== id)) {
      dispatch(getProfileUsers({ users: profile.users, id, auth }));
    }
  }, [id, auth, dispatch, profile.users]);
  return (
    <div>
      {profile.loading && <LinearProgress />}
      <Navbar />
      <Info id={id} />
      <Posts />
    </div>
  );
};

export default ProfilePage;
