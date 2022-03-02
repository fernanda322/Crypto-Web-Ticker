import React from 'react'
import { AppBar, Container, Toolbar, makeStyles, createTheme, Typography, Select, MenuItem, ThemeProvider } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { CryptoState } from '../CryptoContext';

const useStyles = makeStyles (() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontweight: "bold",
    cursor: "poinet",
  }
}))

const Header = () => {

    const clasess = useStyles();
    const history = useNavigate(); 

    const { currency, setCurrency } = CryptoState ()

    console.log(currency);

    const darkTheme = createTheme({
      pelette: {
        primary: {
          main: "#fff",
        },
        type: "dark",
      }
    });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
        <Toolbar>
            <Typography onClick={() => history.push("/")} className={clasess.title} variant='h5'>Crypto Hunter</Typography>

            <Select 
            variant="outlined"
            style={{ 
              width: '100',
              height: '40',
              marginLeft: '15',
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
            
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header