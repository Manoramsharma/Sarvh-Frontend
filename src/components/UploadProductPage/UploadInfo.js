import { InputLabel, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";
import imageCompression from "browser-image-compression";
import Category, { ArrayCategory } from "../../pages/Category";

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
  selectCategories: {
    width: "45%",
  },
  choosePhotos: {
    width: "50%",
  },
  choosingContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton: {
    width: "30%",
  },
});

const UploadInfoComponent = () => {
  const options = {
    maxSizeMB: 0.04,
    maxWidthOrHeight: 300,
    useWebWorker: true,
  };
  const [values, setValues] = useState({
    productName: "",
    price: "",
    mrp: "",
    productDescription: "",
    productFeatures: "",
    category: "",
    selectedFile: "",
    file: "",
  });
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const classes = useStyles();

  const handleFileInput = async (e) => {
    const file = e.target.files[0];
    console.log("originalFile instanceof Blob", file instanceof Blob); // true
    console.log(`originalFile size ${file.size / 1024 / 1024} MB`);
    console.log(file);

    try {
      const compressedFile = await imageCompression(file, options);
      console.log(
        "compressedFile instanceof Blob",
        compressedFile instanceof Blob
      ); // true
      console.log(
        `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
      ); // smaller than maxSizeMB
      console.log(compressedFile);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        setValues({ ...values, file: reader.result });
      };
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("handle form submit");
    console.log(values);
  };
  return (
    <div className={classes.uploadInfoContainer}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          variant="filled"
          fullWidth
          label="Product Name"
          onChange={(e) =>
            setValues({ ...values, productName: e.target.value })
          }
        />
        <Typography className={classes.marginTop} variant="h6">
          Pricing
        </Typography>
        <div className={classes.inputContainer}>
          <TextField
            className={clsx(classes.marginTop, classes.twoInputs)}
            variant="filled"
            halfWidth
            label="Your Price"
            onChange={(e) => setValues({ ...values, price: e.target.value })}
          />
          <TextField
            className={clsx(classes.marginTop, classes.twoInputs)}
            variant="filled"
            halfWidth
            type="number"
            label="MRP of the Product"
            onChange={(e) => setValues({ ...values, mrp: e.target.value })}
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
          onChange={(e) =>
            setValues({ ...values, productDescription: e.target.value })
          }
        />
        <TextField
          label="Product Features"
          multiline
          className={classes.marginTop}
          fullWidth
          rows={3}
          variant="filled"
          onChange={(e) =>
            setValues({ ...values, productFeatures: e.target.value })
          }
        />
        <div className={classes.choosingContainer}>
         
            <ArrayCategory onChange={(e) => setValues({ ...values, category: e.target.value })}
            value={values.category} className={clsx(classes.selectCategories, classes.marginTop)}></ArrayCategory>
            {/* <MenuItem value="women">Women</MenuItem>
            <MenuItem value="accessories">Accessories</MenuItem> */}
         
          <Form.Group
            className={clsx(classes.choosePhotos, classes.marginTop)}
            controlId="formFileMultiple"
          >
            <Form.Label>Choose Photos</Form.Label>
            <input
              type="file"
              name="image"
              onChange={handleFileInput}
              id="raised-button-file"
              // value={fileInputState}
              // onChange={e => setValues({ ...values, file: e.target.value })}
              // onChange={handleFileInput}
              // value={fileInputState}
            />
          </Form.Group>
        </div>

        <Button
          type="submit"
          className={clsx(classes.marginTop, classes.saveButton)}
          variant="secondary"
          // disabled={isLoading}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default UploadInfoComponent;
