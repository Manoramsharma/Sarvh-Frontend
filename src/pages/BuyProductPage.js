import { useState } from "react";
import CarouselComponent from "../components/BuyProductPage/Caraousel";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import {
  Avatar,
  Button,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import SendIcon from "@material-ui/icons/Send";
import { ButtonGroup } from "@material-ui/core";
import { FormControl, InputGroup } from "react-bootstrap";
import ThingsYouMayLikeComponent from "../components/BuyProductPage/ThingsYouMayLike";
import Footer from "../components/footer";
const useStyles = makeStyles((theme) => ({
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
    marginLeft: "5%"
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
  description : {
      fontSize: 10
  },
  thingsText : {
    transform : "translateX(50%)",
    marginTop : "3%",
    marginLeft : "-5%",
    fontWeight : "bold",
  }
}));

const productInfo = {
  rate: "Rs. 599",
  MRP: "Rs. 899",
};
const BuyProductPage = () => {
  const classes = useStyles();
  const [small, setSmall] = useState(false);
  const [medium, setMedium] = useState(false);
  const [large, setLarge] = useState(false);
  const [xl, setXL] = useState(true);
  const [xxl, setXXL] = useState(false);
  return (
    <div>
      <NavbarLoggedIn />
      <div className={classes.carousel}>
        <CarouselComponent />
        <div className={classes.rightMain}>
          <div className={classes.left}>
            <Avatar
              src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528"
              alt="profile image"
              className={classes.large}
            />
            <div className={classes.userInfo}>
              <Typography className={classes.bold}>Swahim Namdev</Typography>
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
          <Typography>Dress Name</Typography>
          <div className={classes.rateContainer}>
            <Typography variant="h6" className={classes.bold}>
              {productInfo.rate}
            </Typography>
            <Typography gutterBottom variant="h6" className={classes.MRP}>
              {productInfo.MRP}
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
            100% Original Products Free Delivery on order above Rs. 799 Pay on
            delivery might be available Easy 30 days returns and exchanges
          </Typography>
        </div>
        
      </div>
      <ThingsYouMayLikeComponent />
      <Footer />
    </div>
  );
};

export default BuyProductPage;
