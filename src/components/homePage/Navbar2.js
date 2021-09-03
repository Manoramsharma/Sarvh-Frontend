import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
  Badge,
  withStyles,
} from "@material-ui/core";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Dropdown, ButtonGroup } from "react-bootstrap";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authAction";
import Category from "../../pages/Category";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #A9A9A9",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
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
    height : 50,
    width : 50,
  },
  profileButton: {
    width: 130,
  },
  bellIcon: {
    color: "#E53F3F",
  },
  buttonGroup: {
    width: "30%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
                <Link to={"/sellonsarvh"} style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="/sellonsarvh">
                    Sell On Sarvh
                  </Dropdown.Item>
                </Link>
                <Link to={"/editprofile"} style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="/editprofile">Edit profile</Dropdown.Item>
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  style={{ textDecoration: "none" }}
                  onClick={() => dispatch(logout())}
                >
                  <Dropdown.Item>Log Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Button className={classes.roundedButton}>
              <ShoppingCartIcon color="secondary" />
            </Button> */}
            <IconButton aria-label="cart">
              <Link to={"/cart"}>
              <StyledBadge badgeContent={1} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
              </Link>
            </IconButton>
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
