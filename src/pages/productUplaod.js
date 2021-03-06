import {Navbar} from "../components/Navbar";
import { makeStyles } from "@material-ui/styles";
import UploadInfoComponent from "../components/UploadProductPage/UploadInfo";
import { Typography } from "@material-ui/core";
import Footer from "../components/footer";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: "2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
  marginTop: {
    marginTop: 100,
    textAlign: "center",
  },
});
//Hello
const ProductUpload = () => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Typography variant="h4" className={classes.marginTop}>
        Upload Your Product
      </Typography>
      <div className={classes.mainContainer}>
        {/* <ImageUploadComponent /> */}
        <UploadInfoComponent className={classes.uploadInfo} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductUpload;
