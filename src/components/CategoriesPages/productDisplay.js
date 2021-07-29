import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
  const classes = useStyles();
  const productArray = [
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      title: "Product Name",
      img: "https://d3n78nkjl8tizo.cloudfront.net/stitch-fix/image/upload/q_auto:best/dpr_2.0/landing-pages/pages/men/April-2021/mobile-hero-5_2x.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
  ];
  return (
    <div className={classes.mainContainer}>
      {productArray.map((item) => (
        <Card className={classes.cardContainer}>
          <CardActionArea>
            <CardMedia
              component="img"
              className={classes.media}
              image={item.img}
              title={item.title}
              
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.sellingRate}
              </Typography>
              <Typography
                className={classes.strikeThrough}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {item.MRP}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

    </div>
  );
};

export default ProductDisplayComponent;
