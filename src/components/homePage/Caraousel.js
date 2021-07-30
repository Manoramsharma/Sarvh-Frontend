import React from "react";
import { Carousel } from "react-bootstrap";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  carouselImages: {
    width: 800,
    height: 400,
  },
  marginTop: {
    marginTop: "2%",
  },
  carousel: {
    backgroundColor: "#334257",
    marginTop: 64,
  },
  carouselCaption: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "60%",
    color: "white",
    width: "fit-content",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    width: 300,
    backgroundColor: "#EEEEEE",
  },
});

const CarouselComponent = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel fade={true} className={classes.carousel} pause="hover">
        <Carousel.Item interval={2000}>
          <img
            className={classes.carouselImages}
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="First slide"
          />
          <Carousel.Caption className={classes.carouselCaption}>
            <div>
              <Typography variant="h3">Summer Must Have</Typography>
              <Typography variant="h6">Starting at Rs. 200</Typography>
            </div>
            <Button className={classes.button} variant="outlined" size="large">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className={classes.carouselImages}
            src="https://coveteur.com/wp-content/uploads/2019/12/PCL_MFWAW18_Day1_Image-18-2010s-fashion-trends-decade-homepage-1280x720.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className={classes.carouselCaption}>
            <div>
              <Typography variant="h3">Summer Must Have</Typography>
              <Typography variant="h6">Starting at Rs. 200</Typography>
            </div>
            <Button className={classes.button} variant="outlined" size="large">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className={classes.carouselImages}
            src="https://thumbs.dreamstime.com/b/beauty-brunette-model-girl-perfect-makeup-trendy-accessories-fashion-wear-88929334.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className={classes.carouselCaption}>
            <div>
              <Typography variant="h3">Summer Must Have</Typography>
              <Typography variant="h6">Starting at Rs. 200</Typography>
            </div>
            <Button className={classes.button} variant="outlined" size="large">
              SHOP NOW
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
