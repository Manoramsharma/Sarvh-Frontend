import NavbarLoggedIn from "../components/homePage/Navbar2";
import { Avatar, makeStyles, Typography } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles({
  mainContainer: {
    background:
      "linear-gradient(150deg, rgba(240,217,255,1), rgba(191,162,219,1))",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backdropFilter: "blur(25px) saturate(200%)",
    backgroundColor: "rgba(255, 255, 255, 0.63)",
    borderRadius: 12,
    border: "1px solid rgba(209, 213, 219, 0.3)",
    height: "85%",
    width: "90%",
    marginTop: 64,
    padding: "2%",
  },
  topBar: {
      display: "flex",
      justifyContent : "space-between",
      alignItems : "center",
  },
  inner : {
      display : "flex",
      width : "20%",
      alignItems : "center",
      justifyContent : "space-evenly"
  }
});
const SellerDashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <NavbarLoggedIn />
      <div className={classes.mainContainer}>
        <div className={classes.card}>
          <div className={classes.topBar}>
            <div className={classes.inner}>
              <DashboardIcon />
              <Typography variant="h4">Dashboard</Typography>
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
