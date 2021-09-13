import { makeStyles, Typography, Button } from "@material-ui/core";
const image = "https://allensolly.imgix.net/img/app/product/4/415641-2472350.jpg?auto=format";
const useStyles = makeStyles((theme) => ({
  bold: {
    fontWeight: "bold",
  },
  container: {
    width: "95%",
    height: "45%",
    padding: "2%",
    border: "1px solid #C8C6C6",
    borderRadius: "10px",
    marginTop: "3%",
    marginLeft: "3%",
  },
  displayProductsDiv : {
      width : "100%",
      height : "90%",
      overflow : "scroll"
  },
  products : {
      backgroundColor : "#F8F0DF",
      padding : "1%",
      height : 90,
      marginTop : "1%",
      display : "flex",
      alignItems : "center",
      justifyContent : "space-around"
  },
  image : {
      height : "100%",
      width : "auto"
  },
  btn : {
      backgroundColor : "red",
      color : "white"
  }
}));

const quantity = 20;
const price = 300;

const YourProductsComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.bold} variant="h6">
        Manage Your Products
      </Typography>
        <div className={classes.displayProductsDiv}>
            <div className={classes.products}>
                <img src={image} className={classes.image}/>
                <Typography>Tshirt Name</Typography>
                <Typography>Quantity Left : {quantity}</Typography>
                <Typography>Price : Rs.{price}</Typography>
                <Button variant="contained" disableElevation className={classes.btn}>Delete Product</Button>
            </div>
            <div className={classes.products}>
                <img src={image} className={classes.image}/>
                <Typography>Tshirt Name</Typography>
                <Typography>Quantity Left : {quantity}</Typography>
                <Typography>Price : Rs.{price}</Typography>
                <Button variant="contained" disableElevation className={classes.btn}>Delete Product</Button>
            </div>
            <div className={classes.products}>
                <img src={image} className={classes.image}/>
                <Typography>Tshirt Name</Typography>
                <Typography>Quantity Left : {quantity}</Typography>
                <Typography>Price : Rs.{price}</Typography>
                <Button variant="contained" disableElevation className={classes.btn}>Delete Product</Button>
            </div>
            <div className={classes.products}>
                <img src={image} className={classes.image}/>
                <Typography>Tshirt Name</Typography>
                <Typography>Quantity Left : {quantity}</Typography>
                <Typography>Price : Rs.{price}</Typography>
                <Button variant="contained" disableElevation className={classes.btn}>Delete Product</Button>
            </div>
        </div>
    </div>
  );
};

export default YourProductsComponent;
