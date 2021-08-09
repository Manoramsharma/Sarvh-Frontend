import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { follow, unfollow } from "../../redux/actions/profileAction";

const useStyles = makeStyles(theme => ({
  fontSize: {
    fontSize: "1rem",
  },
}));

const Followbtn = ({ user }) => {
  console.log(user);
  const classes = useStyles();
  const [followed, setFollowed] = useState(false);
  const { auth, profile } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth.user.following.find(item => item.username === user.username)) {
      setFollowed(true);
    }
  }, [auth.user, profile.user]);
  const handlefollow = () => {
    setFollowed(true);
    dispatch(follow({ users: profile.users, user, auth }));
  };
  const handleUnfollow = () => {
    setFollowed(false);
    dispatch(unfollow({ users: profile.users, user, auth }));
  };

  return (
    <div>
      {followed ? (
        <Button
          size="small"
          color="primary"
          variant="contained"
          className={classes.fontSize}
          onClick={handleUnfollow}
        >
          Unfollow
        </Button>
      ) : (
        <Button
          size="small"
          color="primary"
          variant="contained"
          className={classes.fontSize}
          onClick={handlefollow}
        >
          Follow
        </Button>
      )}
    </div>
  );
};

export default Followbtn;
