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
    height: 350,
  },
  cardContainer: {
    width: "100%",
    padding: "3%",
  },
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gap: "20px 20px",
    marginTop: "2%",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
});

const ProfilePageProductDisplayComponent = () => {
  const classes = useStyles();
  let productArray = [
    {
      id: 1,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      id: 2,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      id: 3,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      id: 4,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      id: 5,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
    {
      id: 6,
      title: "Product Name",
      img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
      sellingRate: "Rs. 400",
      MRP: "Rs. 600",
    },
  ];
  return (
    <div className={classes.mainContainer}>
      {productArray.map(item => (
        <Card className={classes.cardContainer}> key={item.id}
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

export default ProfilePageProductDisplayComponent;
