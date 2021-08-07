import React, { useState, useEffect } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { follow } from "../../redux/actions/profileAction";

const useStyles = makeStyles((theme) => ({
  fontSize: {
    fontSize: "1rem",
  },
}));

const Followbtn = ({ user }) => {
  const classes = useStyles();
  const [followed, setFollowed] = useState(false);
  const { auth, profile } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlefollow = () => {
    setFollowed(true);
    dispatch(follow({ users: profile.users, user, auth }));
  };
  const handleUnfollow = () => {
    setFollowed(false);
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
