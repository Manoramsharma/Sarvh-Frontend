import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import DrawerComponent from "../components/CategoriesPages/Drawer";
import ProductDisplayComponent from "../components/CategoriesPages/productDisplay";
import Footer from "../components/footer";
import NavbarLoggedIn from "../components/homePage/Navbar2";

const useStyles = makeStyles({
  centerAlign : {
    textAlign : "center",
    marginTop : 90,
  },
})

const CategoriesProduct = () => {
  const [accessories, setAccessories] = useState("male");
  const classes = useStyles();
  return (
    <div>
      <NavbarLoggedIn />
      <div>
      <DrawerComponent />
      <div>
      <Typography className={classes.centerAlign} variant="h4">MEN</Typography>
      </div>
        <ProductDisplayComponent />
      </div>

      <Footer />
    </div>
  );
};

export default CategoriesProduct;
