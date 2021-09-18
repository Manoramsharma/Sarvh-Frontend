import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { patchDataAPI } from "../utils/fetchData";
import {
  Avatar,
  makeStyles,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
} from "@material-ui/core";
import image from "../images/editProfile.svg";
import { Dropdown, Form } from "react-bootstrap";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import { Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import imageCompression from "browser-image-compression";
import Swal from "sweetalert2";
import { editProfile } from "../redux/actions/authAction";
const useStyles = makeStyles(theme => ({
  left: {
    backgroundColor: "#00BFA6",
    width: "40%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  heading: {
    marginTop: 150,
    color: "white",
  },
  image: {
    width: "80%",
  },
  mainContainer: {
    display: "flex",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  rightAvatarEdit: {
    display: "flex",
    alignItems: "center",
    width: "70%",
  },
  marginLeft: {
    marginLeft: "6%",
  },
  inputField: {
    width: "45%",
  },
  marginTop: {
    marginTop: "6%",
  },
  inputFields: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    width: "50%",
    marginTop: "4%",
  },
}));
const EditProfilePage = () => {
  const { auth } = useSelector(state => state);

  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 300,
    useWebWorker: true,
  };
  const [value, setValue] = useState({
    fullname: userData.fullName,
    username: userData.username,
    mobile: userData.mobile,
    address: userData.address,
    gender: userData.gender,
    bio: "Hello World",
    pincode: 34342,
    file: "",
  });
  useEffect(() => {
    setUserData(auth.user);
    try {
      setValue({
        ...value,
        fullname: auth.user.fullname,
        username: auth.user.username,
        mobile: auth.user.mobile,
        gender: auth.user.gender,
        address: auth.user.address,
        bio: auth.user.bio,
        pincode: auth.user.pincode,
      });
    } catch (error) {
      console.log(error);
    }
  }, [auth.user]);
  const handleFileInput = async e => {
    const compressedFile = await imageCompression(e.target.files[0], options);
    const reader = new FileReader();
    reader.readAsDataURL(compressedFile);
    reader.onloadend = () => {
      setValue({ ...value, file: reader.result });
    };
  };
  async function handleFormSubmit(e) {
    e.preventDefault();
    dispatch(editProfile({ value, token: auth.token }));
    // const res = await patchDataAPI("user", value, auth.token);
    // console.log(res);
    // if (res.data.msg === "Update Success!") {
    //   window.location.href = "/";
    // } else if (res.data.msg === "This user name already exists.")
    //   Swal.fire({
    //     icon: "error",
    //     text: res.data.msg,
    //   });
  }

  return (
    <div>
      {userData && (
        <>
          <div>
            <Navbar />
            <div className={classes.mainContainer}>
              <div className={classes.left}>
                <Typography variant="h3" className={classes.heading}>
                  Edit Your Profile
                </Typography>
                {/* {value.file ? (<img src={value.file} className={classes.image} alt="chosen" />) : (<img src={image} className={classes.image} />)} */}
                <img src={image} className={classes.image} />
              </div>
              <div className={classes.right}>
                <form onSubmit={handleFormSubmit}>
                  <div className={classes.rightAvatarEdit}>
                    {value.file ? (
                      <Avatar src={value.file} className={classes.large} />
                    ) : (
                      <Avatar src={userData.avatar} className={classes.large} />
                    )}
                    <div className={classes.marginLeft}>
                      <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Change Profile Picture</Form.Label>
                        <input
                          type="file"
                          name="image"
                          onChange={handleFileInput}
                          id="raised-button-file"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className={`${classes.inputFields} ${classes.marginTop}`}>
                    <TextField
                      onChange={e =>
                        setValue({ ...value, fullname: e.target.value })
                      }
                      className={classes.inputField}
                      placeholder={userData.fullname}
                      id="full-name"
                      label="Full Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      className={classes.inputField}
                      placeholder={userData.username}
                      onChange={e =>
                        setValue({ ...value, username: e.target.value })
                      }
                      id="username"
                      label="User Name"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AssignmentIndIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className={`${classes.inputFields} ${classes.marginTop}`}>
                    <TextField
                      className={classes.inputField}
                      placeholder={userData.mobile}
                      id="mobile-number"
                      onChange={e =>
                        setValue({ ...value, mobile: e.target.value })
                      }
                      type="number"
                      label="Phone Number"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      className={classes.inputField}
                      placeholder={userData.address}
                      id="address"
                      onChange={e =>
                        setValue({ ...value, address: e.target.value })
                      }
                      label="Address"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <BusinessIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className={`${classes.inputFields} ${classes.marginTop}`}>
                    <TextField
                      id="bio"
                      label="Your Bio"
                      placeholder={userData.bio}
                      onChange={e =>
                        setValue({ ...value, bio: e.target.value })
                      }
                      multiline
                      rows={4}
                      fullWidth
                      placeholder={value.bio}
                      variant="filled"
                    />
                  </div>
                  <div className={`${classes.inputFields} ${classes.marginTop}`}>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      select
                      halfWidth
                      label="Gender"
                      value={auth.user.gender}
                      onChange={e =>
                        setValue({ ...value, gender: e.target.value })
                      }
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                      <MenuItem value="others">Others</MenuItem>
                    </Select>
                    <TextField
                      className={classes.inputField}
                      placeholder={value.pincode}
                      onChange={e =>
                        setValue({ ...value, pincode: e.target.value })
                      }
                      id="pincode"
                      label="Pincode"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <RoomIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <Button
                    type="submit"
                    className={classes.button}
                    color="secondary"
                    variant="contained"
                  >
                    Save Changes
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EditProfilePage;
