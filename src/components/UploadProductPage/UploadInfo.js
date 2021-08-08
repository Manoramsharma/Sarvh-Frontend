import { InputLabel, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";
const useStyles = makeStyles({
  uploadInfoContainer: {
    marginLeft: "5%",
    width: "40%",
  },
  marginTop: {
    marginTop: "3%",
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  twoInputs: {
    width: "45%",
  },
  selectCategories : {
    width : "45%"
  },
  choosePhotos : {
    width : "50%",
  },
  choosingContainer : {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton : {
    width : "30%"
  }
});

const UploadInfoComponent = () => {
  const [age, setAge] = useState("men");
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Loading Button
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  const handleClick = () => setLoading(true);


  return (
    <div className={classes.uploadInfoContainer}>
      <Form>
        <TextField variant="filled" fullWidth label="Product Name" />
        <Typography className={classes.marginTop} variant="h6">
          Pricing
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            className={clsx(classes.marginTop, classes.twoInputs)}
            variant="filled"
            halfWidth
            label="Your Price"
          />
          <TextField
            className={clsx(classes.marginTop, classes.twoInputs)}
            variant="filled"
            halfWidth
            label="MRP of the Product"
          />
        </div>
        <Typography className={classes.marginTop} variant="h6">
          Product Information
        </Typography>
        <TextField
          label="Product Description"
          multiline
          className={classes.marginTop}
          fullWidth
          rows={4}
          variant="filled"
        />
        <TextField
          label="Product Features"
          multiline
          className={classes.marginTop}
          fullWidth
          rows={3}
          variant="filled"
        />
        <InputLabel className={classes.marginTop} id="categories">
          Category
        </InputLabel>
        <div className={classes.choosingContainer}>
        <Select
        halfWidth
          onChange={handleChange}
          labelId="categories"
          id="categories"
          value={age}
          className={clsx(classes.selectCategories, classes.marginTop)}
        >
          <MenuItem value="men">Men</MenuItem>
          <MenuItem value="women">Women</MenuItem>
          <MenuItem value="accessories">Accessories</MenuItem>
        </Select>
        <Form.Group className={clsx(classes.choosePhotos, classes.marginTop)} controlId="formFileMultiple">
          <Form.Label>Choose Photos</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>
        </div>
      </Form>
      <Button
      className={clsx(classes.marginTop, classes.saveButton)}
      variant="secondary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Loading…' : 'SAVE'}
      </Button>
    </div>
  );
};

export default UploadInfoComponent;
