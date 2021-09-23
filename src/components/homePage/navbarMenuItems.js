import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  InputBase,
  makeStyles,
  Badge,
  withStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Cancel, Search } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { logout } from "../../redux/actions/authAction";
import MenuIcon from "@material-ui/icons/Menu";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";

const useStyles = makeStyles((theme) => ({
  // Search button styles starts here

  // search and input buttons for big screens
  inputDiv: {
    backgroundColor: "#ffffff",
    paddingLeft: "0.4%",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "80%",
    marginRight: "4%",
  },
  input: {
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "#f3efef",
    paddingLeft: "0.4%",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: "80%",
    width: "100%",
  },
  inputBase: {
    width: 275,
    fontFamily: "SourceSansPro",
    marginLeft: 20,
    fontSize: "1rem",
  },

  // search results div
  searchDiv: {
    position: "relative",
    top: "15%",
    left: 0,
    width: "100%",
    minWidth: 150,
    maxWidth: 340,
    display: (props) => (props.display ? "flex" : "none"),
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: "0 0 5px 5px",
    borderTop: "1px solid #000000 ",
  },
  searchResult: {
    position: "relative",
    top: "1em",
    wordWrap: "normal",
  },
  searchDivL: {
    position: "relative",
    top: 0,
    left: 0,
    padding: "10px",
    textAlign: "center",
    color: "#525252",
    transition: "background-color 0.5s ease-out",
    "&:hover": {
      backgroundColor: "#E2E1E1",
    },
  },

  // search and input style for small screens
  searchMin: {
    zIndex: 4,
    backgroundColor: (props) => (props.openup ? "#ffffff" : "transparent"),
    transition: "background-color 0.5s ease-in",
    position: "relative",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
    width: "50%",
    "@media (max-width: 400px)": {
      width: "100%",
    },
    minWidth: 150,
    maxWidth: 340,
    display: "flex",
    height: "80%",
    flexDirection: "column",
  },
  searchDivMin: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "4%",
  },
  searchButton: {
    marginRight: theme.spacing(1),
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)",
  },
  search: {
    display: "flex",
    alignItems: "center",
    margin: 0,
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      opacity: (props) => (props.openup ? "1" : "0"),
      width: (props) => (props.openup ? "100%" : "0"),
      transition: "width 0.5s ease-in , opacity 0.5s ease-in",
    },
  },
  inputMin: {
    width: "100%",
  },

  // Navbar Without login styles starts here
  menuItemsWL: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  navbar: {
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #A9A9A9",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: 35,
  },
  buttonGroup: {
    transition: "width 0.5s ease-in , opacity 0s ease-in 0.5",
    "@media (max-width: 600px)": {
      transition: (props) =>
        props.openup
          ? "width 0.5s ease-in , opacity 0s ease-in "
          : "width 0.5s ease-in , opacity 0s ease-in 0.5s",
      width: (props) => (props.openup ? "0" : props.match ? "100px" : "200px"),
      overflow: (props) => (props.openup ? "hidden" : "auto"),
      opacity: (props) => (props.openup ? "0" : "1"),
    },
    "@media (max-width: 330px)": {
      width: "100px",
      overflow: "auto",
    },
    "@media (min-width: 600px)": {
      width: "199px",
      overflow: "auto",
    },
  },
  loginButton: {
    width: 100,
    padding: "3px 16px",
    whiteSpace: "no-wrap",
  },
  loginBtn: {
    "@media (max-width: 330px)": {
      display: "none",
    },
  },
  menuIcon: {
    marginRight: "2%",
  },

  // styles for navbar menu icons on login
  loginButton: {
    width: 100,
  },
  roundedButton: {
    borderRadius: 100,
    height: 50,
    width: 50,
    minWidth: 30,
    "@media (max-width : 300px)": {
      width: "30px",
    },
  },
  profileButton: {
    width: 50,
  },
  bellIcon: {
    color: "#E53F3F",
  },
  buttonGroup_: {
    width: "240px",
    marginRight: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 600px)": {
      transition: (props) =>
        props.openup
          ? "width 0.5s ease-in , opacity 0s ease-in "
          : "width 0.5s ease-in , opacity 0s ease-in 0.5s",
      width: (props) => (props.openup ? "0" : "180px"),
      overflow: (props) => (props.openup ? "hidden" : "auto"),
      opacity: (props) => (props.openup ? "0" : "1"),
    },
  },
  cartIcon: {
    "@media (max-width : 600px)": {
      display: "none",
    },
  },
  notiDisplay: {
    position: "absolute",
    display: (props) => (props.notiOpen ? "flex" : "none"),
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: 250,
    height: "fit-content",
    maxHeight: "300px",
    overflow: "hidden",
    border: "1px solid #525252",
    borderTop: 0,
    borderRadius: "0 0 10px 10px",
    "@media (max-height : 300px)": {
      height: "200%",
      overflow: "scroll",
    },
    "@media (max-width : 250px)": {
      width: "100%",
    },
  },
  notiDisplayL: {
    position: "relative",
    top: 0,
    left: 0,
    padding: "10px",
    textAlign: "center",
    color: "#525252",
    transition: "background-color 0.5s ease-out",
    "&:hover": {
      backgroundColor: "#E2E1E1",
    },
  },
  profDisplay: {
    position: "absolute",
    display: (props) => (props.profileOpen ? "flex" : "none"),
    flexDirection: "column",
    backgroundColor: "#ffffff",
    width: "200px",
    height: "fit-content",
    border: "1px solid #525252",
    borderTop: 0,
    borderRadius: "0 0 10px 10px",
    "@media (max-height : 300px)": {
      height: "200%",
    },
    "@media (max-width : 200px)": {
      width: "100%",
    },
  },
  profDisplayL: {
    position: "relative",
    top: 0,
    left: 0,
    padding: "10px",
    textAlign: "center",
    color: "#525252",
    transition: "background-color 0.5s ease-out",
    "&:hover": {
      backgroundColor: "#E2E1E1",
    },
  },
  cartLink: {
    display: "none",
    "@media (max-width : 600px)": {
      display: "block",
    },
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

// <--------------------------Search Button divs start here --------------------------------------------------->
const SearchResults = (props) => {
  const classes = useStyles();
  return (
    <Link
      className={classes.searchDivL}
      to={props.link}
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Link>
  );
};

const SearchResultArea = (props) => {
  const classes = useStyles({ display: props.display });
  const results = [
    { text: "You dont need a parachute to go skydiving", link: "/" },
    { text: "Ahh??", link: "/" },
    { text: "You just need it to go skydiving twice", link: "/" },
    { text: "hahah", link: "/" },
  ];
  return (
    <div className={classes.searchDiv}>
      {results.map((result) => (
        <SearchResults text={result.text} link={result.link} />
      ))}
    </div>
  );
};

function SearchDisplay(event, setdisplay) {
  event.target.value ? setdisplay(true) : setdisplay(false);
}

export const SearchButton = (props) => {
  const [openup, setOpenup] = [props.openup, props.setOpenup];
  const [display, setdisplay] = useState(false);
  const classes = useStyles({ openup });
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  return match ? (
    <div className={classes.searchMin}>
      <div className={classes.searchDivMin}>
        <div>
          <Search
            className={classes.searchButton}
            onClick={() => setOpenup(true)}
          />
        </div>
        <div className={classes.search}>
          {/* place all the search items inside this div */}
          <InputBase
            onChange={(event) => {
              SearchDisplay(event, setdisplay);
            }}
            placeholder="Search..."
            className={classes.inputMin}
          />
          <Cancel
            onClick={() => {
              setOpenup(false);
              setdisplay(false);
            }}
          />
        </div>
      </div>
      <SearchResultArea display={display} />
    </div>
  ) : (
    <div className={classes.inputDiv}>
      <div className={classes.input}>
        <SearchIcon color="primary" />
        <InputBase
          placeholder="Search for product and more"
          className={classes.inputBase}
          onChange={(event) => {
            SearchDisplay(event, setdisplay);
          }}
        ></InputBase>
      </div>
      <SearchResultArea display={display} />
    </div>
  );
};

// <--------------------------Search Button divs Ends here --------------------------------------------------->

// <--------------------------Menu Button Without login divs start here --------------------------------------------------->
export const MenuItemsWithoutLogin = (props) => {
  const [open, setOpen] = [props.open, props.setOpen];
  const [openup, setOpenup] = [props.openup, props.setOpenup];

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down(330));
  const classes = useStyles({ openup: openup, match: match });
  const history = useHistory();

  const loginButton = () => {
    history.push("/login");
  };
  const signUpButton = () => {
    history.push("/signup");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.menuItemsWL}>
      <ButtonGroup className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.loginButton}
          onClick={signUpButton}
        >
          SIGN UP
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={`${classes.loginButton} ${classes.loginBtn}`}
          onClick={loginButton}
        >
          LOGIN
        </Button>
      </ButtonGroup>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        className={classes.menuIcon}
        onClick={handleDrawerOpen}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
};

// <--------------------------Menu Button Without login divs ends here --------------------------------------------------->

// <--------------------------Menu Button With login divs start here --------------------------------------------------->
function NotificationsDisplay() {
  const classes = useStyles();
  let data = [
    { text: "( ͡❛ ͜ʖ ͡❛)✌" },
    { text: "¯_( ͡❛ ͜ʖ ͡❛)_/¯" },
    { text: "( ͡❛ ͜ʖ ͡❛) 👉" },
    { text: "💪 ( ͡❛ ͜ʖ ͡❛) 👊" },
  ];
  return data.map((ele) => (
    <Link
      className={classes.notiDisplayL}
      to={"/"}
      style={{ textDecoration: "none" }}
    >
      {ele.text}
    </Link>
  ));
}

export const MenuItemsWithLogin = (props) => {
  const [openup] = [props.openup];
  const [profPosition, setProfPosition] = useState({ top: 0, left: 0 });
  const [notiPosition, setNotiPosition] = useState({ top: 0, left: 0 });
  const [profileOpen, setProfileOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);

  const profileReference = useRef(null);
  const NotificationReference = useRef(null);

  const classes = useStyles({
    openup: openup,
    profileOpen: profileOpen,
    notiOpen: notiOpen,
  });
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const [values, setValues] = useState({
  //   username: "sarvhuser",
  // });
  const [values, setValues] = useState([]);

  useEffect(() => {
    try {
      setValues(auth.user);
      // setValues({ ...values, username: auth.user.username });
    } catch (error) {
      console.log(error);
    }
  }, [auth.user]);

  useLayoutEffect(() => {
    function updateProfileDrodownPosition() {
      let profileLeft = profileReference.current.getBoundingClientRect().left;
      let profileTop =
        profileReference.current.getBoundingClientRect().top + 57;
      let spaceForDiv = window.innerWidth - profileLeft;
      if (spaceForDiv <= 200 && window.innerWidth >= 200) {
        setProfPosition({
          top: profileTop,
          left: profileLeft - (200 - spaceForDiv) - 20,
        });
      } else if (window.innerWidth >= 200) {
        setProfPosition({ top: profileTop, left: profileLeft - 20 });
      } else if (window.innerWidth <= 200) {
        setProfPosition({ top: profileTop, left: 0 });
      }
    }
    function updateNotificationDropdownPosition() {
      let notiLeft = NotificationReference.current.getBoundingClientRect().left;
      let notiTop =
        NotificationReference.current.getBoundingClientRect().top + 57;
      let spaceForDiv = window.innerWidth - notiLeft;
      if (spaceForDiv <= 250 && window.innerWidth >= 250) {
        setNotiPosition({
          top: notiTop,
          left: notiLeft - (250 - spaceForDiv) - 20,
        });
      } else if (window.innerWidth >= 300) {
        setNotiPosition({ top: notiTop, left: notiLeft - 20 });
      } else if (window.innerWidth <= 300) {
        setNotiPosition({ top: notiTop, left: 0 });
      }
    }
    window.addEventListener("resize", () => {
      updateNotificationDropdownPosition();
      updateProfileDrodownPosition();
    });
    updateNotificationDropdownPosition();
    updateProfileDrodownPosition();

    return () =>
      window.removeEventListener("resize", () => {
        updateNotificationDropdownPosition();
        updateProfileDrodownPosition();
      });
  }, []);

  return (
    <div variant="text" className={classes.buttonGroup_}>
      <Button
        onClick={() => {
          notiOpen ? setNotiOpen(false) : setNotiOpen(true);
          setProfileOpen(false);
        }}
        ref={NotificationReference}
        className={classes.roundedButton}
      >
        <NotificationsIcon className={classes.bellIcon} />
      </Button>

      <Button
        onClick={() => {
          profileOpen ? setProfileOpen(false) : setProfileOpen(true);
          setNotiOpen(false);
        }}
        ref={profileReference}
        className={classes.roundedButton}
      >
        <PersonIcon color="primary" />
      </Button>
      <Button className={classes.roundedButton}>
        <PhotoAlbumIcon />
      </Button>
      <IconButton aria-label="cart" className={classes.cartIcon}>
        <Link to={"/cart"}>
          <StyledBadge
            badgeContent={auth.user ? auth.user.cart.length : 0}
            color="secondary"
          >
            <ShoppingCartIcon />
          </StyledBadge>
        </Link>
      </IconButton>
      <div
        style={{ top: notiPosition.top, left: notiPosition.left }}
        className={classes.notiDisplay}
      >
        <NotificationsDisplay />
      </div>
      <div
        style={{ top: profPosition.top, left: profPosition.left }}
        className={classes.profDisplay}
      >
        <Link
          className={classes.profDisplayL}
          to={"/profile/" + values.username}
          style={{ textDecoration: "none" }}
        >
          My Profile
        </Link>
        {values.isSeller ? (
          <>
            <Link
              className={classes.profDisplayL}
              to={"/uploadproduct"}
              style={{ textDecoration: "none" }}
            >
              Upload Product
            </Link>
            <Link
              className={classes.profDisplayL}
              to={"/dashboard"}
              style={{ textDecoration: "none" }}
            >
              Dashboard
            </Link>
          </>
        ) : (
          <Link
            className={classes.profDisplayL}
            to={"/sellonsarvh"}
            style={{ textDecoration: "none" }}
          >
            Sell On Sarvh
          </Link>
        )}

        <Link
          className={classes.profDisplayL}
          to={"/editprofile"}
          style={{ textDecoration: "none" }}
        >
          Edit profile
        </Link>
        <Link
          className={`${classes.profDisplayL} ${classes.cartLink}`}
          to={"/cart"}
          style={{ textDecoration: "none" }}
        >
          My Cart
        </Link>
        <div className="dropdown-divider"></div>
        <Link
          className={classes.profDisplayL}
          style={{ textDecoration: "none" }}
          onClick={() => dispatch(logout())}
        >
          Log Out
        </Link>
      </div>
      {/* <Dropdown.Menu>
          <Link to={"/sellonsarvh"} style={{ textDecoration: "none" }}>
            <Dropdown.Item href="/sellonsarvh">
              Sell On Sarvh
            </Dropdown.Item>
          </Link>
          <Link to={"/editprofile"} style={{ textDecoration: "none" }}>
            <Dropdown.Item href="/editprofile">
              Edit profile
            </Dropdown.Item>
          </Link>
          <div className="dropdown-divider"></div>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => dispatch(logout())}
          >
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Link>
        </Dropdown.Menu> */}
    </div>
  );
};
