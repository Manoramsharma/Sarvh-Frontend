import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Card, CardActionArea, CardContent } from "@material-ui/core";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  List,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import WcIcon from "@material-ui/icons/Wc";
import GradeIcon from "@material-ui/icons/Grade";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
import { getAllProducts } from "../../redux/actions/productAction";
const drawerWidth = 240;
const useStyles = makeStyles({
  filterHeading: {
    marginTop: 75,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "1%",
    backgroundColor: "#F4F9F9",
  },
  margin: {
    marginTop: 50,
  },
  container: {
    display: "flex",
    height: "fit-content",
    marginTop: 40,
    justifyContent: "space-evenly",
    width: 140,
  },
  drawerHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  starIcon: {
    color: "#FFD523",
  },
  ProductIcon: {
    color: "#FB9300",
  },
  gendersIcon: {
    color: "#005A8D",
  },
  media: {
    height: 300,
    width: 300,
  },
  cardContainer: {
    width: "100%",
    padding: "3%",
  },
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "20px 10px",
    marginLeft: 300,
    marginBottom: "5%",
    marginTop: "2%",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
});

const ProductDisplayComponent = () => {
  const { product } = useSelector(state => state);
  const dispatch = useDispatch();

  const classes = useStyles();
  const [productArray, setProductArray] = useState([]);
  const [Gendervalue, setGenderValue] = React.useState("");
  const [RatingValue, setRatingValue] = React.useState("");
  const [ProductValue, setProductsValue] = React.useState("");
  const [products, setProducts] = React.useState([]);
  const handleReset = () => {
    setGenderValue("");
    setRatingValue("");
    setProductsValue("");
  };

  const handleGenderChange = event => {
    setGenderValue(event.target.value);
  };
  const handleRatingChange = event => {
    setRatingValue(event.target.value);
  };
  const handleProductChange = event => {
    setProductsValue(event.target.value);
  };

  useEffect(() => {
    try {
      if (product.allproducts.length === 0) {
        dispatch(getAllProducts(null));
      }
      setProductArray(product.allproducts);
    } catch (error) {
      console.log(error);
    }
  }, [product.allproducts, dispatch]);

  return (
    <div>
      <div>
        <Drawer
          variant="permanent"
          anchor="left"
          style={{ zIndex: 1250 }}
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <List className={classes.filterHeading}>
            <div className={classes.drawerHeader}>
              <Typography variant="h6">Filter</Typography>
              <Button
                startIcon={<RotateLeftIcon />}
                variant="contained"
                disableElevation
                size="small"
                color="primary"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
            <Divider />
            <div className={classes.container}>
              <WcIcon className={classes.gendersIcon} />
              <Typography>Gender -</Typography>
            </div>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={Gendervalue}
              onChange={handleGenderChange}
            >
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                labelPlacement="start"
              />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                labelPlacement="start"
              />

              <FormControlLabel
                value="Accessories"
                control={<Radio />}
                label="Accessories"
                labelPlacement="start"
              />
            </RadioGroup>
            <div className={classes.container}>
              <GradeIcon className={classes.starIcon} />
              <Typography>Rating -</Typography>
            </div>
            <RadioGroup
              aria-label="rating"
              name="rating"
              value={RatingValue}
              onChange={handleRatingChange}
            >
              <FormControlLabel
                value="1Star"
                control={<Radio />}
                label="1 Star"
                labelPlacement="start"
              />
              <FormControlLabel
                value="2Star"
                control={<Radio />}
                label="2 Star"
                labelPlacement="start"
              />
              <FormControlLabel
                value="3Star"
                control={<Radio />}
                label="3 Star"
                labelPlacement="start"
              />
              <FormControlLabel
                value="4Star"
                control={<Radio />}
                label="4 Star"
                labelPlacement="start"
              />
              <FormControlLabel
                value="5Star"
                control={<Radio />}
                label="5 Star"
                labelPlacement="start"
              />
            </RadioGroup>
            <div className={classes.container}>
              <LocalMallIcon className={classes.ProductIcon} />
              <Typography>Products -</Typography>
            </div>
            <RadioGroup
              aria-label="products"
              name="products"
              value={ProductValue}
              onChange={handleProductChange}
            >
              <FormControlLabel
                value="Shoes"
                control={<Radio />}
                label="Shoes"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Watches"
                control={<Radio />}
                label="Watches"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Shirt"
                control={<Radio />}
                label="Shirt"
                labelPlacement="start"
              />
            </RadioGroup>
          </List>
        </Drawer>
      </div>

      <div className={classes.mainContainer}>
        {productArray.map((item, i) => (
          <Card className={classes.cardContainer} key={i}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                className={classes.media}
                image={item.images[0]}
                title={item.productName}
              /> */}
              <Carousel>
                {item.images.map(image => (
                  <Carousel.Item>
                    <Link
                      to={"/profile/" + item.user.username}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        src={image}
                        className={classes.media}
                        alt={"whatsnew"}
                      ></img>
                    </Link>
                  </Carousel.Item>
                ))}
              </Carousel>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.price}
                </Typography>
                <Typography
                  className={classes.strikeThrough}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {item.mrp}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplayComponent;
