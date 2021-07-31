import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "2%",
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
  },
  iconButton: {
    color: "white",
  },
});

let itemData = [
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
  {
    img: "https://res.cloudinary.com/webstore/image/fetch/w_450,c_limit,c_fit,f_auto,e_trim/https%3A%2F%2Fae01.alicdn.com%2Fkf%2FH6d133e21bd094c1ea8db61f0868d029aU%2FLuxury-Male-Pajamas-Solid-Elastic-Royal-Blue-Plus-Size-Sleepwear-V-Neck-Top-Fashion-Home-Clothes.jpg",
    title: "KalaSaga",
  },
];

const MainContainerTrendingProducts = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography} variant="h5">
        TRENDING
      </Typography>
      <div className={classes.root}>
        <ImageList
          className={classes.imageList}
          cols={4.5}
          gap={80}
          rowHeight={320}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    className={classes.iconButton}
                    aria-label={`star ${item.title}`}
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

export default MainContainerTrendingProducts;
