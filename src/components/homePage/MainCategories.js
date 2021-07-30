import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
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
    img: "https://sc04.alicdn.com/kf/HTB1DcsXLpXXXXcTXpXXq6xXFXXX8.jpg",
    title: "Shirts",
  },
  {
    img: "https://assets.ajio.com/medias/sys_master/root/20210408/HiMy/606e0787f997dd7b64a6eeb5/-473Wx593H-441119753-mediumblue-MODEL.jpg",
    title: "Jeans",
  },
  {
    img: "https://assets.ajio.com/medias/sys_master/root/20201031/UXvA/5f9c609df997dd8c83800bb8/-473Wx593H-441105682-olive-MODEL.jpg",
    title: "Bomber Jacket",
  },
  {
    img: "https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOSMOKY-TRENDYSMOK381955669A9D8/1622965634045_0..jpg",
    title: "Shoes",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hamilton-lead-1611181753.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*",
    title: "Watches",
  },
];

const MainContainerCategories = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography} variant="h5">
        Categories For You
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

export default MainContainerCategories;
