import React from "react";
import { Button, makeStyles, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    footer : {
        height : "30vh",
        backgroundColor : "rgba(196, 196, 196, 0.19)",
        display : "flex",
        justifyContent : "space-evenly",
        alignItems : "center",
        marginLeft : 240
    },
    footerInside : {
        display : "flex",
        flexDirection : "column",
        width : "20%",
        alignItems : "center",
        justifyContent : "flex-start",
        height : "70%"
    },
    btn : {
        width : "60%",
        fontSize : 18,
        color : "#C4C4C4"
    },
    socialLinks : {
        display : "flex",
        marginTop : "3%"
    },
})

const FooterForCategory = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer} style={{ zIndex: 1251 }}>
            <div className={classes.footerInside}>
                <Typography gutterBottom variant="h5">SHOP</Typography>
                <Button className={classes.btn}>Men</Button>
                <Button className={classes.btn}>Women</Button>
                <Button className={classes.btn}>Accessories</Button>
                <Button className={classes.btn}>Home & Decor</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom variant="h5">SELL WITH US</Typography>
                <Button className={classes.btn}>Sell On Sarvh</Button>
                <Button className={classes.btn}>Registration</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom variant="h5">OTHER LINKS</Typography>
                <Button className={classes.btn}>Contact Us</Button>
                <Button className={classes.btn}>Blog</Button>
                <Button className={classes.btn}>T & C</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom variant="h5">CONNECT WITH US</Typography>
                <div className={classes.socialLinks}>
                <Button className={classes.btn}><InstagramIcon /></Button>
                <Button className={classes.btn}><LinkedInIcon /></Button>
                <Button className={classes.btn}><FacebookIcon /></Button>
                <Button className={classes.btn}><TwitterIcon /></Button>

                </div>
            </div>
        </div>
    );
}
 
export default FooterForCategory;