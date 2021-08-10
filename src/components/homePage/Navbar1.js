import {
  AppBar,
  Button,
  ButtonGroup,
  InputBase,
  makeStyles,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography
} from "@material-ui/core";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import  Navbar from "./Drawer";
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
});

const NavbarWithLogin = () => {
  const classes = useStyles();
  const history = useHistory();
  const loginButton = () => {
    history.push("/login");
  };
  const signUpButton = () => {
    history.push("/signup");
  };

  const theme = useTheme() ;
  const match = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <AppBar position="fixed" elevation={0} style={{ zIndex: 1251 }}>
        <Toolbar className={classes.navbar}> 
          {match ? < Navbar/> : <> <img src={logo} alt="logo" className={classes.logo} />
          <Button>MALE</Button>
          <Button>FEMALE</Button>
          <Button>ACCESSORIES</Button>
          <div className={classes.input}>
            <SearchIcon color="primary" /> 
            <InputBase
              placeholder="Search for product and more"
              className={classes.inputBase}
            ></InputBase>
          </div>
          <ButtonGroup>
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
              className={classes.loginButton}
              onClick={loginButton}
            >
              LOGIN
            </Button>
          </ButtonGroup>
          </>}
        {/*   <img src={logo} alt="logo" className={classes.logo} />
          <Button>MALE</Button>
          <Button>FEMALE</Button>
          <Button>ACCESSORIES</Button>
          <div className={classes.input}>
            <SearchIcon color="primary" />
            <InputBase
              placeholder="Search for product and more"
              className={classes.inputBase}
            ></InputBase>
          </div>
          <ButtonGroup>
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
              className={classes.loginButton}
              onClick={loginButton}
            >
              LOGIN
            </Button>
          </ButtonGroup> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavbarWithLogin;
