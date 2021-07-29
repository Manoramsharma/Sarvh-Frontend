import React from "react";
import { Button, makeStyles } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    footer : {
        height : '5vh',
        backgroundColor : '#548CA8',
        position : 'fixed',
        bottom : 0,
        left : 0,
        width : '100vw',
        display : 'flex',
        alignItems : 'center',
        paddingLeft : "1%" ,
        paddingRight : "1%",
        justifyContent : "space-between",
    },
    button : {
        fontSize : "1.3rem",
        height : "70%",
        fontFamily : "SourceSansPro",
        width : "fit-content",
        marginLeft : "1%",
        color  : "white",
    },
    buttonGroup : {
        width : "60%"
    },
    socialMediaIcons : {
        width : "18%"
    }
})

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer} style={{ zIndex: 1251 }}>
            <div className={classes.buttonGroup}>
            <Button className={classes.button}>About</Button>
            <Button className={classes.button}>Blog</Button>
            <Button className={classes.button}>Sell on Sarvh</Button>
            <Button className={classes.button}>Support</Button>
            <Button className={classes.button}>Terms</Button>
            <Button className={classes.button}>Privacy</Button>
            <Button className={classes.button}>Cookies</Button>
            <Button className={classes.button}>SiteMap</Button>
            </div>
            <div className={classes.socialMediaIcons}>
                <Button className={classes.button}>
                    <InstagramIcon />
                </Button>
                <Button className={classes.button}>
                    <LinkedInIcon />
                </Button>
                <Button className={classes.button}>
                    <TwitterIcon />
                </Button>
                <Button className={classes.button}>
                    <FacebookIcon />
                </Button>
            </div>
        </div>
    );
}
 
export default Footer;