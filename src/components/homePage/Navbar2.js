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
import HomeIcon from '@material-ui/icons/Home';
import {  Link } from "react-router-dom";
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
  return (
    <div>
      <AppBar position="fixed" elevation={0} style={{ zIndex: 1251 }}>
        <Toolbar className={classes.navbar}>
          <img src={logo} alt="logo" className={classes.logo} />
          <Button>MALE</Button>
          <Button>FEMALE</Button>
          <Button>ACCESSORIES</Button>
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
            <Link to={"/profile"} style={{ textDecoration: 'none' }}>
            <Button
              startIcon={<PersonIcon color="primary" />}
              variant="contained"
              disableElevation
              color="secondary"
              className={classes.profileButton}
            >
              Profile
            </Button>
            </Link >
              <Dropdown.Toggle
                color="secondary"
                split
                id="dropdown-split-basic"
              />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2">Edit profile</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>
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
