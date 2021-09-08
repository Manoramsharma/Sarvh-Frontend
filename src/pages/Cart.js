import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Button, Divider, IconButton, TextField } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import DeleteIcon from "@material-ui/icons/Delete";
import { updateQuantity, deleteQuantity } from "../redux/actions/profileAction";
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
  const [values, setValues] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    setValues(auth.user.cart);
  }, [auth.user.cart]);
  useEffect(() => {
    var temp = 0;
    for (var i = 0; i < values.length; i++) {
      temp += parseInt(values[i].product.price) * values[i].quantity;
    }
    setTotal(temp);
  });
  async function handleChangeQuantity(id, quantity, size) {
    dispatch(
      updateQuantity({ data: auth.user.cart, id, quantity, auth, size })
    );
    var temp = 0;
    for (var i = 0; i < values.length; i++) {
      temp += parseInt(values[i].product.price) * values[i].quantity;
    }
    setTotal(temp);
  }
  async function handleDelete(id, size) {
    console.log("clicking delete");
    dispatch(deleteQuantity({ data: auth.user.cart, id, auth, size }));
  }
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
          {values && (
            <>
              {values.map((item, i) => (
                <div
                  className={clsx(classes.productDiv, classes.marginTop)}
                  key={i}
                >
                  <div className={classes.imageContainer}>
                    <img
                      className={classes.image}
                      src={item.product.images[0]}
                    />
                  </div>
                  <Typography>{item.product.productName}</Typography>
                  <Typography>{item.size}</Typography>
                  <Typography>Rs. {item.product.price}</Typography>
                  <TextField
                    type="number"
                    defaultValue={item.quantity}
                    inputProps={{ min: 1 }}
                    onChange={(e) => {
                      handleChangeQuantity(
                        item.product._id,
                        e.target.value,
                        item.size
                      );
                    }}
                    className={classes.textField}
                  />
                  <div>{item.quantity * item.product.price}</div>
                  <IconButton aria-label="delete">
                    <DeleteIcon
                      onClick={() => handleDelete(item.product._id, item.size)}
                    />
                  </IconButton>
                </div>
              ))}
            </>
          )}
        </div>
        <div className={classes.right}>
          <Typography gutterBottom variant="h6">
            Subtotal ({values.length}) items
          </Typography>
          <Typography gutterBottom className={classes.btn}>
            {total}
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
