import React from "react";
import "./header.css"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../../static/images/min_kult.svg'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main:  '#183B8D',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

const drawerWidth = 290;

function Header(props) {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <a href=""> <img alt="" src={Logo}></img> </a>
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>

    )
}

export default Header