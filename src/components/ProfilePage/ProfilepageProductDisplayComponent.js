import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";

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
  const { auth, profile } = useSelector(state => state);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    try {
      function filter_data(product) {
        var newData = product.filter(temp => temp.user.username === id);
        setUserData(newData);
      }
      profile.product.forEach(filter_data);
    } catch (err) {
      console.log(err);
    }
  }, [auth, profile.product, dispatch, id]);

  return (
    <div className={classes.mainContainer}>
      {userData.map(user => (
        <div>
          <Carousel>
            {user.images.map(image => (
              <Carousel.Item>
                <img src={image}></img>
              </Carousel.Item>
            ))}
          </Carousel>

          <div>Product Name: {user.productName}</div>
          <div>Price: {user.price}</div>
          <div>Description: {user.productDescription}</div>
          <div>Features: {user.productFeatures}</div>
        </div>
      ))}
    </div>
  );
};

export default ProfilePageProductDisplayComponent;
