import errorImage from '../images/404.png'
import {makeStyles} from "@material-ui/core";
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    imageContainer: {
        width : "70%",
        height : "auto",
        marginTop : "-5%"

    },
    errorImage : {
        width  : "100%",
        height : "100%"
    },
    mainContainer : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        height : "100vh",
        backgroundColor : "#ffde59",
        flexDirection : "column",
    },
    btn : {
        width : "40%",
        fontSize : "1.5rem"
    }
})

const ErrorPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.imageContainer}>
            <img className={classes.errorImage} src={errorImage} alt="404 Error"></img>
            </div>
            <Button 
                className={classes.btn}
                variant="contained"
                size="large"
                color="primary"

            >Continue Shopping
            </Button> 
        </div>
    );
}
 
export default ErrorPage;