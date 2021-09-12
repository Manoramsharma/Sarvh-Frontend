import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import {
  Avatar,
  Button,
  makeStyles,
  Typography,
  TextField,
} from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SendIcon from "@material-ui/icons/Send";
import { FormControl, InputGroup } from "react-bootstrap";
import ThingsYouMayLikeComponent from "../components/BuyProductPage/ThingsYouMayLike";
import Footer from "../components/footer";

import { useParams } from "react-router";
import { getDataAPI } from "../utils/fetchData";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Ratings from "../components/ProfilePage/Ratings";
import Linkshare from "../components/BuyProductPage/Linkshare";
import { addToCart } from "../redux/actions/profileAction";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  carousel: {
    height: 600,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: "6%",
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
    marginLeft: "7%",
    marginTop: "5%",
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
    width: "fit-content",
    backgroundColor: "#34B1B9",
    color: "white",
    fontSize: 15,
  },
  btn2: {
    width: "fir-content",
    backgroundColor: "#26AF9F",
    color: "white",
    marginLeft: 20,
    fontSize: 15,
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
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    alignContent: "center",
    height: 500,
    gap: "10px 30px",
  },
  image: {
    height: 300,
    width: 300,
  },
}));
const BuyProductPage = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

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

  const [size, setSize] = useState("s");
  const [quantity, setQuantity] = useState(1);
  const handleSize = (event, newSize) => {
    setSize(newSize);
  };

  const handleChangeQuantity = n => {
    setQuantity(n);
  };
  const handleAddToCart = () => {
    dispatch(addToCart({ size, id, quantity, auth }));
    history.push("/cart");
  };
  return (
    <div>
      <NavbarLoggedIn />
      {loading && (
        <>
          <div>
            <div className={classes.carousel}>
              {/* <CarouselComponent /> */}
              <div className={classes.imageGrid}>
                {values.images[0] ? (
                  <img
                    src={values.images[0]}
                    className={classes.image}
                    alt="No more Images available"
                  />
                ) : (
                  <img></img>
                )}
                {values.images[1] ? (
                  <img
                    src={values.images[1]}
                    className={classes.image}
                    alt="No more Images available"
                  />
                ) : (
                  <img></img>
                )}
                {values.images[2] ? (
                  <img
                    src={values.images[2]}
                    className={classes.image}
                    alt="No more Images available"
                  />
                ) : (
                  <img></img>
                )}
                {values.images[3] ? (
                  <img
                    src={values.images[3]}
                    className={classes.image}
                    alt="No more Images available"
                  />
                ) : (
                  <img></img>
                )}
              </div>
              <div className={classes.rightMain}>
                <div className={classes.left}>
                  <Link
                    to={"/profile/" + values.user.username}
                    style={{ textDecoration: "none" }}
                  >
                    <Avatar
                      src={values.user.avatar}
                      alt="profile image"
                      className={classes.large}
                    />
                  </Link>
                  <div className={classes.userInfo}>
                    <Link
                      to={"/profile/" + values.user.username}
                      style={{ textDecoration: "none" }}
                    >
                      <Typography className={classes.bold}>
                        {values.user.fullname}
                      </Typography>
                    </Link>
                    <Ratings />
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
                    <Linkshare />
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
                <TextField
                  type="number"
                  defaultValue={1}
                  inputProps={{ min: 1 }}
                  onChange={e => {
                    handleChangeQuantity(e.target.value);
                  }}
                />
                <Typography gutterBottom className={classes.marginTop}>
                  SELECT SIZE
                </Typography>
                <ToggleButtonGroup exclusive onChange={handleSize} value={size}>
                  <ToggleButton value="s">S</ToggleButton>
                  <ToggleButton value="m">M</ToggleButton>
                  <ToggleButton value="l">L</ToggleButton>
                  <ToggleButton value="xl">XL</ToggleButton>
                  <ToggleButton value="xxl">XXL</ToggleButton>
                </ToggleButtonGroup>
                <div className={classes.marginTop}>
                  {/* <Button size="large" className={classes.btn1}>
                    Buy Now
                  </Button> */}
                  <Button
                    size="large"
                    className={classes.btn2}
                    onClick={handleAddToCart}
                  >
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
