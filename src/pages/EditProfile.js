import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import NavbarLoggedIn from "../components/homePage/Navbar2";
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
import clsx from "clsx";
import { Dropdown, Form } from "react-bootstrap";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PhoneIcon from "@material-ui/icons/Phone";
import BusinessIcon from "@material-ui/icons/Business";
import RoomIcon from "@material-ui/icons/Room";
import { Button } from "@material-ui/core";
const profileImage =
  "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528";
const useStyles = makeStyles((theme) => ({
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
  const { auth } = useSelector((state) => state);

  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setUserData(auth.user);
  }, [auth.user]);
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(value);
  };
  const [value, setValue] = useState({
    fullName: userData.fullName,
    userName: userData.username,
    phoneNumber: userData.mobile,
    address: userData.address,
    gender: userData.gender,
    bio: "Hello World",
    pincode: 34342,
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("ada");
    console.log(value);
    patchDataAPI("user", value, auth.token);
  };

  if (userData) {
    console.log(userData);
    return (
      <div>
        <NavbarLoggedIn />
        <div className={classes.mainContainer}>
          <div className={clsx(classes.left)}>
            <Typography variant="h3" className={clsx(classes.heading)}>
              Edit Your Profile
            </Typography>
            <img src={image} className={classes.image} />
          </div>
          <div className={clsx(classes.right)}>
            <form onSubmit={handleFormSubmit}>
              <div className={classes.rightAvatarEdit}>
                <Avatar
                  alt="Remy Sharp"
                  src={userData.avatar}
                  className={classes.large}
                />
                <div className={classes.marginLeft}>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Change Profile Picture</Form.Label>
                    <Form.Control type="file" />
                  </Form.Group>
                </div>
              </div>
              <div className={clsx(classes.inputFields, classes.marginTop)}>
                <TextField
                  onChange={(e) =>
                    setValue({ ...value, fullName: e.target.value })
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
                  onChange={(e) =>
                    setValue({ ...value, userName: e.target.value })
                  }
                  id="username"
                  label="UserName"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AssignmentIndIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div className={clsx(classes.inputFields, classes.marginTop)}>
                <TextField
                  className={classes.inputField}
                  placeholder={userData.mobile}
                  id="mobile-number"
                  onChange={(e) =>
                    setValue({ ...value, phoneNumber: e.target.value })
                  }
                  type="tel"
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
                  onChange={(e) =>
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
              <div className={clsx(classes.inputFields, classes.marginTop)}>
                <TextField
                  id="bio"
                  label="Your Bio"
                  onChange={(e) => setValue({ ...value, bio: e.target.value })}
                  multiline
                  rows={4}
                  fullWidth
                  value={value.bio}
                  variant="filled"
                />
              </div>
              <div className={clsx(classes.inputFields, classes.marginTop)}>
                <TextField
                  select
                  halfWidth
                  label="Gender"
                  onChange={(e) =>
                    setValue({ ...value, gender: e.target.value })
                  }
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="others">Others</MenuItem>
                </TextField>
                <TextField
                  className={classes.inputField}
                  placeholder={value.pincode}
                  onChange={(e) =>
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
                className={clsx(classes.button)}
                color="secondary"
                variant="contained"
              >
                Save Changes
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default EditProfilePage;
