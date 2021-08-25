import NavbarLoggedIn from "../components/homePage/Navbar2"
import {makeStyles, Typography} from '@material-ui/core';
import image from "../images/editProfile.svg"
import clsx from "clsx";

const useStyles = makeStyles({
    left : {
        backgroundColor : "#00BFA6",
        width:  "40%",
        height : "100vh",
        display : "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent : "space-evenly"
    },
    heading : {
        marginTop : 150,
        color : "white"
    },
    image : {
        width : "80%",
    }
})
const EditProfilePage = () => {
    const classes = useStyles();
    return (
        <div>
            <NavbarLoggedIn />
            <div className={clsx(classes.left)}>
                <Typography variant="h3" className={clsx(classes.heading)}>Edit Your Profile</Typography>
                <img src={image} className={classes.image}/>
            </div>
        </div>
    );
}
 
export default EditProfilePage;