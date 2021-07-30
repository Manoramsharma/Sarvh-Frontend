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
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
        sellingRate: "Rs. 400",
        MRP: "Rs. 600",
      },
      {
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
        sellingRate: "Rs. 400",
        MRP: "Rs. 600",
      },
      {
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
        sellingRate: "Rs. 400",
        MRP: "Rs. 600",
      },
      {
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
        sellingRate: "Rs. 400",
        MRP: "Rs. 600",
      },
      {
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
        sellingRate: "Rs. 400",
        MRP: "Rs. 600",
      },
      {
        title: "Product Name",
        img: "https://images.bewakoof.com/utter/content/2835/content_biker_jacket_for_men_fashion_10.jpg",
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
  
  export default ProfilePageProductDisplayComponent;
  