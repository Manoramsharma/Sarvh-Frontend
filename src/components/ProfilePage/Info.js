import React, { useState, useEffect } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { updateRating } from "../../redux/actions/profileAction";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import { useSelector, useDispatch } from "react-redux";
import Followbtn from "./Followbtn";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import clsx from "clsx";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  paper: {
    position: "absolute",
    width: "40%",
    height: "30%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
  btn: {
    width: "100%",
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
  const { auth, profile } = useSelector(state => state);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(2);
  const classes = useStyles();
  const [userData, setUserData] = useState([]);
  const [rating, setRating] = useState(0);
  function calculateRating(user) {
    var res = 0;
    for (var i = 0; i < user.rating.length; i++) {
      res += user.rating[i].rated;
    }
    return parseInt(res / user.rating.length);
  }
  function isEmptyObject(obj) {
    return JSON.stringify(obj) === "{}";
  }

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [followersOpen, setFollowersOpen] = useState(false);
  const [followingOpen, setFollowingOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(auth);
    if (isEmptyObject(auth)) {
      try {
        const newData = profile.users.filter(user => user.username === id);
        setUserData(newData[0]);
        console.log(newData[0]);
      } catch (err) {
        console.log(err);
      }
    } else {
      if (auth.user.username === id) {
        setUserData(auth.user);
      } else {
        try {
          const newData = profile.users.filter(user => user.username === id);
          setUserData(newData[0]);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }, [auth, profile.users, dispatch, id]);
  function body(values) {
    return (
      <div style={modalStyle} className={classes.paper}>
        {values.map((item, i) => (
          <div key={i}>
            <span>
              <Avatar
                src={item.avatar}
                alt="profile image"
                className={classes.large}
              />
            </span>
            <span>{item.fullname}</span>
            <Link
              to={"/profile/" + item.username}
              style={{ textDecoration: "none" }}
            >
              <span>{item.username}</span>
            </Link>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      {userData && userData.followers && userData.following && (
        <>
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
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.right2}>
                <div className={classes.followersDiv}>
                  <Typography className={classes.bold}>
                    {userData.followers.length}
                  </Typography>

                  <Button
                    onClick={() => {
                      setFollowersOpen(true);
                    }}
                  >
                    Following
                  </Button>
                  <Modal
                    open={followersOpen}
                    onClose={() => {
                      setFollowersOpen(false);
                    }}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {body(userData.followers)}
                  </Modal>
                </div>
                <div className={classes.followersDiv}>
                  <Typography className={classes.bold}>
                    {userData.following.length}
                  </Typography>
                  <Button
                    onClick={() => {
                      setFollowingOpen(true);
                    }}
                  >
                    Following
                  </Button>
                  <Modal
                    open={followingOpen}
                    onClose={() => {
                      setFollowingOpen(false);
                    }}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {body(userData.following)}
                  </Modal>
                </div>
              </div>
              {/* logged in  */}
              {!isEmptyObject(auth) && (
                <>
                  {userData.username === auth.user.username ? (
                    <Link
                      to={"/editprofile/"}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        size="small"
                        color="primary"
                        variant="contained"
                        className={clsx(classes.fontSize, classes.btn)}
                      >
                        Edit Profile
                      </Button>
                    </Link>
                  ) : (
                    <Followbtn user={userData}></Followbtn>
                  )}
                </>
              )}
              {isEmptyObject(auth) && <div></div>}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Info;
