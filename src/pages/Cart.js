import { Button, Divider, IconButton, TextField } from "@material-ui/core";
import { Typography, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import NavbarLoggedIn from "../components/homePage/Navbar2";
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";
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
  right : {
      marginTop : 150,
      backgroundColor : "white",
      height : "fit-content",
      padding : "2%",
      border : "1px solid black",
      borderRadius : 5,
      width : "20%",
      marginLeft : "5%"
  },
  btn : {
      marginTop : "6%"
  }
});

let cartArray = [
  {
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Forever Tshirt",
    cost: 1000,
  },
  {
    img: "https://www.kwabey.com/uploads/products/469/469-1619177422-944065-4.jpg",
    name: "Forever Tshirt",
    cost: 1000,
  },
  {
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Forever Tshirt",
    cost: 1000,
  },
];

const Cart = () => {
  const classes = useStyles();
  const [number, setNumber] = useState("1");

    const changeNumber = (e) => {
        setNumber(e.target.value);
        
    }


  return (
    <div>
      <NavbarLoggedIn />
      <div className={classes.mainContainer}>
        <div className={classes.left}>
          <Typography variant="h5">Shopping Cart</Typography>
          {cartArray.map((item) => (
            <div className={clsx(classes.productDiv, classes.marginTop)}>
              <div className={classes.imageContainer}>
                <img className={classes.image} src={item.img} />
              </div>
              <Typography>{item.name}</Typography>
              <Typography>Rs. {item.cost}</Typography>
              <TextField type="number" defaultValue={number} onChange={(e) => {changeNumber(e)}} className={classes.textField}>
                1
              </TextField>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
        <div className={classes.right}>
            <Typography gutterBottom variant="h6">Subtotal (1) items</Typography>
            <Typography gutterBottom className={classes.btn}>Rs. 3000</Typography>
            <Divider />
            <Button color="primary" disableElevation variant="contained" fullWidth className={classes.btn}>Proceed to checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
