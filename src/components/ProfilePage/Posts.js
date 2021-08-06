import React from "react";
import {makeStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import ProfilePageProductDisplayComponent from "./ProfilepageProductDisplayComponent";
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
const Posts = () => {
  const classes = useStyles();
  return (
    <div className={classes.displayDiv}>
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
      <ProfilePageProductDisplayComponent />
    </div>
  );
};

export default Posts;
