 import React from "react";
import { Button, makeStyles, Typography } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { WrapText } from "@material-ui/icons";

const useStyles = makeStyles( (theme)=> ( {
    footer : {
        
        height : "30vh",
        backgroundColor : "rgba(196, 196, 196, 0.19)",
        display : "flex",
       justifyContent : "space-evenly", 
       [theme.breakpoints.down("lg")]:
       { justifyContent : "",
    },
       [theme.breakpoints.down("md")]:
       { justifyContent : "center",
   },
   [theme.breakpoints.down("sm")]:
       { justifyContent : "space-around",
       
   },
   [theme.breakpoints.down("xs")]:
   { justifyContent : "center",
   
},


        alignItems : "center",
    },
    edit :{
        [theme.breakpoints.down("lg")]:
        { fontSize : 30
     },
     [theme.breakpoints.down("md")]:
     { fontSize : 25,
        
  },
  [theme.breakpoints.down("sm")]:
  { fontSize : 15
},
[theme.breakpoints.down("xs")]:
{ fontSize : 10
},
    },
    edit1 :{
        [theme.breakpoints.down("md")]:
     { fontSize : 30,
        
  },
  [theme.breakpoints.down("sm")]:
  { fontSize : 20
},
[theme.breakpoints.down("xs")]:
{ fontSize : 10
},
    },
    footerInside : {
        display : "flex",
        flexDirection : "column",
        width : "20%",
        alignItems : "center",
        justifyContent : "flex-start",
        height : "60%"
    },
    btn : {
        width : "60%",
        fontSize : 18,
        margin : 0,
        [theme.breakpoints.down("sm")]:
  { fontSize : 10,
    width : "10%"
},
        color : "#C4C4C4"
    },
    socialLinks : {
        
        display : "flex",

        marginTop : "3%",
        [theme.breakpoints.down("sm")]:
        { flexWrap : "wrap" ,
             width : "35vw"
      },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer} style={{ zIndex: 1251 }}>
            <div className={classes.footerInside}>
                <Typography gutterBottom className={classes.edit} variant="h5">SHOP</Typography>
                <Button className={classes.btn}>Men</Button>
                <Button className={classes.btn}>Women</Button>
                <Button className={classes.btn}>Accessories</Button>
                <Button className={classes.btn}>Home & Decor</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom className={classes.edit} variant="h5">SELL WITH US</Typography>
                <Button className={classes.btn}>Sell On Sarvh</Button>
                <Button className={classes.btn}>Registration</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom className={classes.edit} variant="h5">OTHER LINKS</Typography>
                <Button className={classes.btn}>Contact Us</Button>
                <Button className={classes.btn}>Blog</Button>
                <Button className={classes.btn}>T & C</Button>
            </div>
            <div className={classes.footerInside}>
                <Typography gutterBottom className={classes.edit} variant="h5">CONNECT WITH US</Typography>
                <div className={classes.socialLinks}>
                <Button  className={classes.edit1} className={classes.btn}><InstagramIcon  className={classes.edit1}  /></Button>
                <Button   className={classes.edit1} className={classes.btn}><LinkedInIcon  className={classes.edit1}   /></Button>
                <Button  className={classes.edit1} className={classes.btn}><FacebookIcon  className={classes.edit1} /></Button>
                <Button  className={classes.edit1} className={classes.btn}><TwitterIcon   className={classes.edit1} /></Button>

                </div>
            </div>
        </div>
    );
}
 
export default Footer; 