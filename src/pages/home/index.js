import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar, { appBarClasses } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import { useState, useEffect } from "react";

const url = "https://localhost/copy_1/hs/HTTP_SERVER/object_card"

// const config = {
//   headers:{
//     "AccessToken": "7739739b-4644-4ddd-84f8-fdb53af124c7"
//   }
// };



function HomePage(props) {

  const config = {
    headers: {
      AccessToken: "7739739b-4644-4ddd-84f8-fdb53af124c7"
    },
  };
  
  axios
    .get("https://localhost/copy_1/hs/HTTP_SERVER/object_card",
    config,{
      params: {
        code: "000000103"
      }
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error.response));
    return (

        <div><p>{url}</p>

      </div>

    );
  }

  export default HomePage