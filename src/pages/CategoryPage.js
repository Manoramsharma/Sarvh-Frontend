import { Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import ProductDisplayComponent from "../components/CategoriesPages/productDisplay";
import FooterForCategory from "../components/FooterForCategory";
import { Navbar } from "../components/Navbar";

const useStyles = makeStyles({
  centerAlign: {
    textAlign: "center",
    marginTop: 90,
  },
});

const CategoriesProduct = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <div>
        {/* <DrawerComponent /> */}
        <div>
          {/* <Typography className={classes.centerAlign} variant="h4">
            MEN
          </Typography> */}
        </div>
        <ProductDisplayComponent />
      </div>

      <FooterForCategory />
    </div>
  );
};

export default CategoriesProduct;
