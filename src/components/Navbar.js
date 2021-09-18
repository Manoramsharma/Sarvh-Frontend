import React, { useState, useEffect } from "react";
import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import logo from "../images/logo.png";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  SearchButton,
  MenuItemsWithoutLogin,
  MenuItemsWithLogin,
} from "./homePage/navbarMenuItems";
import CloseIcon from "@material-ui/icons/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import GradeIcon from "@material-ui/icons/Grade";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import InfoIcon from "@material-ui/icons/Info";
import ContactsOutlinedIcon from "@material-ui/icons/ContactsOutlined";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: 64,
    width: "100%",
  },
  navbar: {
    width: "100%",
    minHeight: 64,
    backgroundColor: "white",
    color: "black",
    display: "flex",
    justifyContent: "flex-end",
    padding: 0,
  },
  logo: {
    zIndex: 3,
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "2%",
    width: "auto",
    width: 35,
    "@media (max-width: 400px)": {
      opacity: props => (props.openup ? "0" : "1"),
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export const Navbar = () => {
  const { auth } = useSelector(state => state);
  const [openup, setOpenup] = useState(false);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles({ openup });
  const history = useHistory();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [values, setValues] = useState({
    username: "sarvhuser",
  });
  useEffect(() => {
    try {
      setValues({ ...values, username: auth.user.username });
    } catch (error) {
      console.log(error);
    }
  }, [auth.user]);

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        style={{ zIndex: 1150 }}
        className={classes.appBar}
      >
        <Toolbar className={classes.navbar}>
          <Link to="/">
            <img src={logo} alt="logo" className={classes.logo} />
          </Link>
          <SearchButton openup={openup} setOpenup={setOpenup} />
          {auth.token ? (
            <MenuItemsWithLogin openup={openup} />
          ) : (
            <MenuItemsWithoutLogin
              openup={openup}
              setOpenup={setOpenup}
              open={open}
              setOpen={setOpen}
            />
          )}
        </Toolbar>
      </AppBar>

      {/*---------------- Drawer menu ------------------------*/}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Men", "Women", "Accessories"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <GradeIcon /> : <StarOutlineIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Contact Us", "About"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <ContactsOutlinedIcon /> : <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
