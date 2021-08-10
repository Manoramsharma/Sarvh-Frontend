import React from "react";
import { Carousel } from "react-bootstrap";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  carouselImages: {
    [theme.breakpoints.down("lg")]:
    { width : "50vw" ,
    height : "60vh"

},
[theme.breakpoints.down("md")]:
{ width : "50vw" ,
height : "50vh"

},
[theme.breakpoints.down("sm")]:
{ width : "45vw" ,
height : "40vh"

},

[theme.breakpoints.down("xs")]:
{ 
height : "35vh"

},
    
   /*  width: "60rem",
    [theme.breakpoints.down("md")]: {
      width: "40rem",
      height : 300 
    },
    [theme.breakpoints.down("sm")]:
    {
width : "20rem",
height : 200 
    },
    [theme.breakpoints.down("xs")]:
    {
width : "10rem",
height : 150 
    },
    
    height: 400,
     */

  },
  marginTop: {
    marginTop: "2%",
  },
  carousel:{
    [theme.breakpoints.down("sm")]:
{ width : "100vw" ,

},
    backgroundColor: "#334257",
    marginTop: 64,
  },
  carouselCaption: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    left: "30%",
    [theme.breakpoints.down("md")]:
    { left : "40%" ,
    
    },
    [theme.breakpoints.down("sm")]:
{ left : "50%"
},
    color: "white",
    width: "fit-content",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  
    
  },
  edit : {
    
    [theme.breakpoints.down("lg")]:
      { width : "80vw" ,
fontSize : 50 ,},
 [theme.breakpoints.down("md")]:
{ width : "60vw" ,
fontSize : 40 ,
},
[theme.breakpoints.down("sm")]:
{ width : "40vw" ,
fontSize : 20 ,
},
[theme.breakpoints.down("xs")]:
{ 
fontSize : 14 ,
},
 
    
    
    
    },
 
  edit1 : {
    [theme.breakpoints.down("md")]:
    { 
fontSize : 10 ,
    },
    [theme.breakpoints.down("xs")]:
      { 
fontSize : 8 ,
      },
    
  },
  button: {
    width: 300,
    [theme.breakpoints.down("md")]:
    {
width : 250 ,
[theme.breakpoints.down("xs")]:
{
width : 100 ,
height : 30
},
    },
  
    backgroundColor: "#EEEEEE",
  },
}));

const CarouselComponent = () => {
  const classes = useStyles();
  const theme = useTheme() ;
  const match = useMediaQuery(theme.breakpoints.down('md'));
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
              <Typography  className={classes.edit} noWrap={true} variant="h3">Summer Must Have</Typography>
              <Typography  className={classes.edit1} variant="h6">Starting at Rs. 200</Typography>
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
              <Typography  className={classes.edit} noWrap={true} variant="h3">Summer Must Have</Typography>
              <Typography className={classes.edit1} variant="h6">Starting at Rs. 200</Typography>
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
              <Typography  className={classes.edit} noWrap={true} variant="h3">Summer Must Have</Typography>
              <Typography className={classes.edit1} variant="h6">Starting at Rs. 200</Typography>
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
