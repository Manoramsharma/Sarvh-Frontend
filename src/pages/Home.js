import { makeStyles } from "@material-ui/core";
import NavbarWithLogin from "../components/homePage/Navbar1";
import { useState } from "react";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import CarouselComponent from "../components/homePage/Caraousel";
import MainContainerNewProducts from "../components/homePage/MainWhatsNew";
import MainContainerCategories from "../components/homePage/MainCategories";
import MainContainerTrendingProducts from "../components/homePage/MainTrending";
import Footer from "../components/footer";


const useStyles = makeStyles({
  marginTop: {
    marginTop: "2%",
  },
  pinkColor: {
    color: "#E53F3F",
  },
  mainDivTop: {
    backgroundColor: "#000000",
  },
  carousel: {
    backgroundColor: "#E53F3F",
  },
});

const Home = () => {
  const classes = useStyles();
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      {loggedIn ? <NavbarLoggedIn /> : <NavbarWithLogin />}
      {/* <Typography className={classes.marginTop} align="center" variant="h4">
        Welcome to <span className={classes.pinkColor}>SARVH</span>
      </Typography> */}
      <CarouselComponent />
      <MainContainerNewProducts />
      <MainContainerCategories />
      <MainContainerTrendingProducts />
      <Footer />
    </div>
  );
};

export default Home;
