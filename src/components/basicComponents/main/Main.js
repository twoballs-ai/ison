import React from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import "./main.css"
import { Paper } from "@mui/material";
import { Container } from "@mui/system";


function Main(props) {
  return (
    <Paper>
      <Container>
     

          <Outlet />
        
      </Container>
    </Paper>
  );
}

export default Main