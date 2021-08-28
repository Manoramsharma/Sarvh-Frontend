import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CarouselComponent from "../components/BuyProductPage/Caraousel";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import { Avatar, Button, makeStyles, Typography } from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SendIcon from "@material-ui/icons/Send";
import { ButtonGroup } from "@material-ui/core";
import { FormControl, InputGroup } from "react-bootstrap";
import ThingsYouMayLikeComponent from "../components/BuyProductPage/ThingsYouMayLike";
import Footer from "../components/footer";
import { useParams } from "react-router";
import { getDataAPI } from "../utils/fetchData";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { byProductId } from "../redux/actions/productAction";
const useStyles = makeStyles(theme => ({
  carousel: {
    height: 600,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: "3%",
  },
  left: {
    display: "flex",

    justifyContent: "space-around",
  },
  fontSize: {
    fontSize: "1rem",
  },
  bold: {
    fontWeight: "bold",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rightMain: {
    width: 250,
    marginLeft: "5%",
  },
  icons: {
    display: "flex",

    justifyContent: "center",
    marginTop: "6%",
  },
  divider: {
    height: 1,
    marginTop: "6%",
    backgroundColor: "grey",
    marginBottom: "3%",
  },
  rateContainer: {
    display: "flex",
    marginTop: "6%",
    justifyContent: "flex-start",
  },
  MRP: {
    marginLeft: "9%",
    textDecorationLine: "line-through",
  },
  marginTop: {
    marginTop: "10%",
  },
  btn1: {
    width: 100,
    backgroundColor: "#34B1B9",
    color: "white",
    fontSize: 18,
  },
  btn2: {
    width: 100,
    backgroundColor: "#26AF9F",
    color: "white",
    marginLeft: 20,
    fontSize: 18,
  },
  description: {
    fontSize: 10,
  },
  thingsText: {
    transform: "translateX(50%)",
    marginTop: "3%",
    marginLeft: "-5%",
    fontWeight: "bold",
  },
}));

const productInfo = {
  rate: "Rs. 599",
  MRP: "Rs. 899",
};
async function getData(id) {
  const res = await getDataAPI(`byproductid/${id}`);
  console.log(res);
}
const BuyProductPage = () => {
  const { product } = useSelector(state => state);

  const { id } = useParams();
  const dispatch = useDispatch();

  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    try {
      const res = await getDataAPI(`byproductid/${id}`, null);
      setValues(res.data.product[0]);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }, []);
  const classes = useStyles();
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [xl, setXL] = useState(true);
  const [xxl, setXXL] = useState(false);

  return (
    <div>
      {loading && (
        <>
          <div>
            <NavbarLoggedIn />
            <div className={classes.carousel}>
              {/* <CarouselComponent /> */}
              <img src={values.images[0]} alt="productImages" />
              <div className={classes.rightMain}>
                <div className={classes.left}>
                  <Avatar
                    src={values.user.avatar}
                    alt="profile image"
                    className={classes.large}
                  />
                  <div className={classes.userInfo}>
                    <Typography className={classes.bold}>
                      {values.user.fullname}
                    </Typography>
                    <StarOutlinedIcon />
                  </div>
                </div>
                <div className={classes.icons}>
                  <Button>
                    <FavoriteBorderIcon />
                  </Button>
                  <Button>
                    <BookmarkBorderIcon />
                  </Button>
                  <Button>
                    <SendIcon />
                  </Button>
                </div>
                <div className={classes.divider}></div>
                <Typography>{values.productName}</Typography>
                <Typography>{values.category}</Typography>
                <Typography>{values.subCategory}</Typography>
                <div className={classes.rateContainer}>
                  <Typography variant="h6" className={classes.bold}>
                    Rs. {values.price}
                  </Typography>
                  <Typography gutterBottom variant="h6" className={classes.MRP}>
                    Rs. {values.mrp}
                  </Typography>
                </div>
                <Typography gutterBottom className={classes.marginTop}>
                  SELECT SIZE
                </Typography>
                <ButtonGroup color="primary">
                  <Button disabled={small}>S</Button>
                  <Button disabled={medium}>M</Button>
                  <Button disabled={large}>L</Button>
                  <Button disabled={xl}>XL</Button>
                  <Button disabled={xxl}>XXL</Button>
                </ButtonGroup>
                <div className={classes.marginTop}>
                  <Button size="large" className={classes.btn1}>
                    Buy Now
                  </Button>
                  <Button size="large" className={classes.btn2}>
                    Add to Cart
                  </Button>
                </div>
                <InputGroup className={classes.marginTop}>
                  <FormControl
                    placeholder="Enter Pincode"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outlined">CHECK</Button>
                </InputGroup>
                <div className={classes.divider}></div>
                <Typography className={classes.description}>
                  100% Original Products Free Delivery on order above Rs. 799
                  Pay on delivery might be available Easy 30 days returns and
                  exchanges
                </Typography>
              </div>
            </div>
            <ThingsYouMayLikeComponent />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default BuyProductPage;
