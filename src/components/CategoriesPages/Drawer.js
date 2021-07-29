import {
  Button,
  Divider,
  Drawer,
  FormControlLabel,
  List,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import WcIcon from "@material-ui/icons/Wc";
import GradeIcon from "@material-ui/icons/Grade";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
const drawerWidth = 240;

const useStyles = makeStyles({
  filterHeading: {
    marginTop: 75,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    padding: "1%",
    backgroundColor : "#F4F9F9",
  },
  margin: {
    marginTop: 50,
  },
  container: {
    display: "flex",
    height: "fit-content",
    marginTop: 40,
    justifyContent: "space-evenly",
    width: 140,
  },
  drawerHeader : {
    display : "flex",
    justifyContent : "space-between"
  },
  starIcon : {
    color : "#FFD523"
  },
  ProductIcon : {
    color : "#FB9300"
  },
  gendersIcon : {
    color : "#005A8D"
  }
});

const DrawerComponent = () => {
  const [Gendervalue, setGenderValue] = React.useState("");
  const [RatingValue, setRatingValue] = React.useState("");
  const [ProductValue, setProductsValue] = React.useState("");
  
  const handleReset = () => {
    setGenderValue("");
    setRatingValue("");
    setProductsValue("");
  }

  const handleGenderChange = (event) => {
    setGenderValue(event.target.value);
  };
  const handleRatingChange = (event) => {
    setRatingValue(event.target.value);
  };
  const handleProductChange = (event) => {
    setProductsValue(event.target.value);
  };
  const classes = useStyles();
  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        style={{ zIndex: 1250 }}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className={classes.filterHeading}>
          <div className={classes.drawerHeader}>
          <Typography variant="h6">Filter</Typography>
          <Button 
            startIcon={<RotateLeftIcon />}
            variant="contained"
            disableElevation
            size="small"
            color="primary"
            onClick = {handleReset}
          >Reset</Button>
          </div>
          <Divider />
          <div className={classes.container}>
            <WcIcon className={classes.gendersIcon}/>
            <Typography>Gender -</Typography>
          </div>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={Gendervalue}
            onChange={handleGenderChange}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              labelPlacement="start"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              labelPlacement="start"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Other"
              labelPlacement="start"
            />
          </RadioGroup>
          <div className={classes.container}>
            <GradeIcon className={classes.starIcon}/>
            <Typography>Rating -</Typography>
          </div>
          <RadioGroup
            aria-label="rating"
            name="rating"
            value={RatingValue}
            onChange={handleRatingChange}
          >
            <FormControlLabel
              value="1Star"
              control={<Radio />}
              label="1 Star"
              labelPlacement="start"
            />
            <FormControlLabel
              value="2Star"
              control={<Radio />}
              label="2 Star"
              labelPlacement="start"
            />
            <FormControlLabel
              value="3Star"
              control={<Radio />}
              label="3 Star"
              labelPlacement="start"
            />
            <FormControlLabel
              value="4Star"
              control={<Radio />}
              label="4 Star"
              labelPlacement="start"
            />
            <FormControlLabel
              value="5Star"
              control={<Radio />}
              label="5 Star"
              labelPlacement="start"
            />
          </RadioGroup>
          <div className={classes.container}>
            <LocalMallIcon className={classes.ProductIcon}/>
            <Typography>Products -</Typography>
          </div>
          <RadioGroup
            aria-label="products"
            name="products"
            value={ProductValue}
            onChange={handleProductChange}
          >
            <FormControlLabel
              value="Shoes"
              control={<Radio />}
              label="Shoes"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Watches"
              control={<Radio />}
              label="Watches"
              labelPlacement="start"
            />
            <FormControlLabel
              value="Shirt"
              control={<Radio />}
              label="Shirt"
              labelPlacement="start"
            />
          </RadioGroup>
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
