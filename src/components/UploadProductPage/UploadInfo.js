import { InputLabel, MenuItem, TextField } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Form, Button } from "react-bootstrap";
import imageCompression from "browser-image-compression";
import { API } from "../../Backend";
import Swal from "sweetalert2";
import { uploadProduct } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";

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
  const {auth, product } = useSelector(state => state);
  const dispatch = useDispatch();
  const options = {
    maxSizeMB: 1,
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
    file: [],
  });
  const [previewSource, setPreviewSource] = useState("");
  const [fileInputState, setFileInputState] = useState("");
  const classes = useStyles();

  const handleFileInput = async e => {
    const file = e.target.files[0];
    var images = [];
    for (var i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files[i]);
      const compressedFile = await imageCompression(e.target.files[i], options);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onloadend = () => {
        images.push(reader.result);
      };
    }
    setValues({ ...values, file: images });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    console.log("handle form submit");
    console.log(values);
    console.log(values.file.length);
    if (values.file.length === 0) {
      Swal.fire({
        icon: "error",
        // title: "Image",
        text: "Please select a file...",
      });
    } else if (values.file.length > 4) {
      Swal.fire({
        icon: "error",
        // title: "Image",
        text: "You can select upto 4 files only...",
      });
    } else {
      dispatch(uploadProduct(auth,values));
      // await fetch(`${API}/api/uploadfile`, {
      //   method: "POST",
      //   body: values,
      //   body: JSON.stringify({ values }),
      //   headers: { "Content-type": "application/json" },
      // });
    }
  };
  return (
    <div className={classes.uploadInfoContainer}>
      <form onSubmit={handleFormSubmit}>
        <TextField
          variant="filled"
          fullWidth
          label="Product Name"
          onChange={e => setValues({ ...values, productName: e.target.value })}
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
            onChange={e => setValues({ ...values, price: e.target.value })}
          />
          <TextField
            className={clsx(classes.marginTop, classes.twoInputs)}
            variant="filled"
            halfWidth
            type="number"
            label="MRP of the Product"
            onChange={e => setValues({ ...values, mrp: e.target.value })}
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
          onChange={e =>
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
          onChange={e =>
            setValues({ ...values, productFeatures: e.target.value })
          }
        />
        <div className={classes.choosingContainer}>
          <TextField
            halfWidth
            onChange={e => setValues({ ...values, category: e.target.value })}
            value={values.category}
            select
            label="Category"
            className={clsx(classes.selectCategories, classes.marginTop)}
          >
            <MenuItem value="men">Men</MenuItem>
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="accessories">Accessories</MenuItem>
          </TextField>
          <Form.Group
            className={clsx(classes.choosePhotos, classes.marginTop)}
            controlId="formFileMultiple"
          >
            <Form.Label>Choose Photos</Form.Label>
            <input
              type="file"
              name="image"
              multiple="multiple"
              onChange={handleFileInput}
              id="raised-button-file"
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
