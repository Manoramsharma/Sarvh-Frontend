import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { getProduct } from "../../redux/actions/productAction";
import { Carousel } from "react-bootstrap";
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
    transform: "translateZ(0)",
    overflowX: "scroll",
    width : "100%",
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
  productImage: {
    width: "100%",
    height: "100%",
  },
}));

const MainContainerNewProducts = () => {
  const { product } = useSelector(state => state);
  const dispatch = useDispatch();
  const [whatsNew, setWhatsNew] = useState([]);

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

  return (
    <div>
      <Typography className={classes.typography} variant="h5">
        What's New In The Store!
      </Typography>
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          cols={3.5}
          gap={20}
          rowHeight={300}
        >
          {whatsNew.map(item => (
            <ImageListItem key={item.id}>
              <Carousel>
                {item.images.map(image => (
                  <Carousel.Item>
                    <Link
                      to={"/buyproduct/" + item._id}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={image}
                        className={classes.productImage}
                        alt={"whatsnew"}
                      ></img>
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>

              <ImageListItemBar
                // title={item.title}
                title={item.productName}
                actionIcon={
                  <IconButton
                    className={classes.iconButton}
                    // aria-label={`star ${item.title}`}
                  >
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
