import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { getProduct } from "../../redux/actions/productAction";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import { API } from "../../Backend";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "1%",
    marginLeft: "1%",
    marginRight: "1%",
  },
  imageList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    overflowX: "scroll",
  },
  typography: {
    marginLeft: "1%",
    fontFamily: "SourceSansPro",
    fontWeight: "bold",
    marginTop: "4%",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  iconButton: {
    color: "white",
  },
}));

let itemData = [
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 1,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 2,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 3,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 4,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 5,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 6,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 7,
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
    id: 8,
  },
];

const MainContainerNewProducts = () => {
  const { product } = useSelector(state => state);
  const dispatch = useDispatch();
  const [whatsNew, setWhatsNew] = useState([]);

  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.down("sm"));
  const match1 = useMediaQuery("(max-width : 960px");
  const classes = useStyles();

  useEffect(() => {
    try {
      console.log(whatsNew.length);
      if (product.whatsnew.length === 0) {
        dispatch(getProduct(null));
      }
      setWhatsNew(product.whatsnew);
    } catch (err) {
      console.log(err);
    }
  }, [product.whatsnew, dispatch]);

  const getData = () => {
    axios.get(`${API}/api/product`).then(data => {
      setWhatsNew(data.data.product);
    });
  };

  return (
    <div>
      <Typography className={classes.typography} variant="h5">
        What's New In The Store!
      </Typography>
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          cols={3}
          gap={20}
          rowHeight={220}
        >
          {whatsNew.map(item => (
            <ImageListItem key={item.id}>
              <Carousel>
                {item.images.map(image => (
                  <Carousel.Item>
                    <img src={image}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
              {/* <img src={item.img} alt={item.title} /> */}
              <ImageListItemBar
                // title={item.title}
                title={item.productName}
                actionIcon={
                  <IconButton
                    className={classes.iconButton}
                    // aria-label={`star ${item.title}`}
                  >
                    <StorefrontIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default MainContainerNewProducts;
