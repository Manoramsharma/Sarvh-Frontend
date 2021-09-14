import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import CarouselComponent from "../components/homePage/Caraousel";
import MainContainerNewProducts from "../components/homePage/MainWhatsNew";
import MainContainerCategories from "../components/homePage/MainCategories";
import MainContainerTrendingProducts from "../components/homePage/MainTrending";
import Footer from "../components/footer";
import { Navbar } from "../components/Navbar";
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
  home: {
    width: "100vw",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Navbar />
      <CarouselComponent />
      <MainContainerNewProducts />
      <MainContainerCategories />
      <MainContainerTrendingProducts />
      <Footer />
    </div>
  );
};

export default Home;
