import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Carousel } from "react-bootstrap";
const useStyles = makeStyles(theme => ({
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
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  avatarContainer: {
    marginTop: 100,
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    width: "50%",
    justifyContent: "space-around",
  },
  left: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
  },
  fontSize: {
    fontSize: "1rem",
  },
  bold: {
    fontWeight: "bold",
  },
  followersDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  right: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  right2: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  },
  toggleButtonGroup: {
    marginTop: 100,
    width: "70%",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
  },
  displayDiv: {
    padding: "2%",
  },
}));
const Posts = () => {
  const [button, setButton] = useState("");
  const { auth, profile } = useSelector(state => state);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    try {
      function filter_data(product) {
        var newData = product.filter(temp => temp.user.username === id);
        setUserData(newData);
        setFilterData(newData);
      }
      profile.product.forEach(filter_data);
    } catch (err) {
      console.log(err);
    }
  }, [auth, profile.product, dispatch, id]);
  function handleFormat(event, newFormats) {
    if (event === "All") {
      setFilterData(userData);
    } else {
      const newData = userData.filter(temp => temp.category === event);

      setFilterData(newData);
    }
  }
  const classes = useStyles();
  return (
    <div className={classes.displayDiv}>
      <div>
        <ToggleButtonGroup
          className={classes.toggleButtonGroup}
          type="radio"
          name="options"
          value={button}
          radioDisplay={false}
          onChange={handleFormat}
        >
          <ToggleButton id="tbg-radio-1" value="All">
            ALL
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value="Men">
            MEN
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value="Women">
            WOMEN
          </ToggleButton>
          <ToggleButton id="tbg-radio-4" value="Accessories">
            ACCESSORIES
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className={classes.mainContainer}>
        {filterData.map(user => (
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
    </div>
  );
};

export default Posts;
