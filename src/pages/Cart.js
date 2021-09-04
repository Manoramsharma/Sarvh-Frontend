import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Divider, IconButton, TextField } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#F3F1F5",
    height: "100vh",
    overflow: "scroll",
  },
  left: {
    marginTop: 120,
    width: "40%",
  },
  marginTop: {
    marginTop: "2%",
  },
  productDiv: {
    backgroundColor: "white",
    width: "95%",
    padding: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imageContainer: {
    width: "10%",
    height: 60,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textField: {
    width: "7%",
  },
  right: {
    marginTop: 150,
    backgroundColor: "white",
    height: "fit-content",
    padding: "2%",
    border: "1px solid black",
    borderRadius: 5,
    width: "20%",
    marginLeft: "5%",
  },
  btn: {
    marginTop: "6%",
  },
});

const Cart = () => {
  const { auth } = useSelector((state) => state);

  const classes = useStyles();
  const [userCart, setUserCart] = useState([]);
  const [number, setNumber] = useState("1");

  const changeNumber = (e) => {
    setNumber(e.target.value);
  };
  useEffect(() => {
    setUserCart(auth.user.cart);
    console.log(auth.user.cart);
  }, []);
  return (
    // <div>
    //   {userCart && (
    //     <>
    //       <div>{userCart[0].product.productName}</div>
    //     </>
    //   )}
    // </div>
    <div>
      <NavbarLoggedIn />

      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <Typography variant="h5">Shopping Cart</Typography>
        </div>
        <div className={classes.right}>
          <Typography gutterBottom variant="h6">
            Subtotal (1) items
          </Typography>
          <Typography gutterBottom className={classes.btn}>
            Rs. 3000
          </Typography>
          <Divider />
          <Button
            color="primary"
            disableElevation
            variant="contained"
            fullWidth
            className={classes.btn}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
