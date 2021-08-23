import React, { useState, useEffect } from "react";
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
    gap: "40px 40px",
    marginTop: "2%",
  },
  strikeThrough: {
    textDecorationLine: "line-through",
  },
  itemContainer: {
    textAlign: "center",
    height: 300,
  },
  productImage: {
    width: "100%",
    height: "100%",
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
          <Carousel className={classes.carouselContainer}>
            {user.images.map(image => (
              <Carousel.Item className={classes.itemContainer}>
                <img
                  className={classes.productImage}
                  src={image}
                  alt={"productimage"}
                ></img>
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
