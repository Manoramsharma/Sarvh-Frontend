import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";
import Category from "../../pages/Category";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #A9A9A9",
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    maxWidth: 35,
  },
  input: {
    backgroundColor: "#FFE3E3",
    paddingLeft: "0.4%",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  inputBase: {
    width: 275,
    fontFamily: "SourceSansPro",
    marginLeft: 20,
    fontSize: "1rem",
  },
  loginButton: {
    width: 100,
  },
  roundedButton: {
    borderRadius: 100,
  },
  profileButton: {
    width: 130,
  },
  bellIcon: {
    color: "#E53F3F",
  },
  buttonGroup: {
    width: 400,
    display: "flex",
    justifyContent: "space-between",
  },
});

const NavbarLoggedIn = () => {
  const classes = useStyles();
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
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
  return (
    <div>
      <AppBar position="fixed" elevation={0} style={{ zIndex: 1251 }}>
        <Toolbar className={classes.navbar}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div>
            <Category></Category>
          </div>
          <div className={classes.input}>
            <SearchIcon color="secondary" />
            <InputBase
              placeholder="Search for product and more"
              className={classes.inputBase}
            ></InputBase>
          </div>

          <div variant="text" className={classes.buttonGroup}>
            <Button className={classes.roundedButton}>
              <NotificationsIcon className={classes.bellIcon} />
            </Button>
            {/* <Button
              startIcon={<PersonIcon color="default" />}
              variant="contained"
              disableElevation
              color="secondary"
              className={classes.profileButton}
            >
              Profile
            </Button> */}
            <Dropdown as={ButtonGroup}>
              <Link
                to={"/profile/" + values.username}
                style={{ textDecoration: "none" }}
              >
                <Button
                  startIcon={<PersonIcon color="primary" />}
                  variant="contained"
                  disableElevation
                  color="secondary"
                  className={classes.profileButton}
                >
                  Profile
                </Button>
              </Link>
              <Dropdown.Toggle
                color="secondary"
                split
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Link to={"/uploadproduct"} style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="/uploadproduct">
                    Sell On Sarvh
                  </Dropdown.Item>
                </Link>
                <Dropdown.Item href="#/action-2">Edit profile</Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={() => dispatch(logout())}
                >
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            <Button className={classes.roundedButton}>
              <ShoppingCartIcon color="secondary" />
            </Button>
            <Button className={classes.roundedButton}>
              <Link to={"/"}>
                <HomeIcon color="secondary" />
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarLoggedIn;
