import React from 'react'
import { makeStyles, Container, Typography } from "@material-ui/core";

const useStyles=makeStyles(() => ({  
    banner: {
        backgroundImage: "url(./banner2.jpg)",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "colum",
        padingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyDirection: "center",
        textAlign: "center",
    },
    
}));
 
const Banner = () => {
  const classes = useStyles();
    return <div className = {classes.banner}>
        <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
            <Typography 
            variant="h2"
            style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "Montserrat",
            }}
            >
                Crypto Hunter
            </Typography>
            <Typography 
            variant="subtitle2"
            style={{
                fontWeight: "darkgrey",
                marginBottom: "capitalize",
                fontFamily: "Montserrat",
            }}
            >
                Get All Info Regarding Your Favourite Crypto Currency
            </Typography>
            </div>
        </Container>


    </div>
};

export default Banner;