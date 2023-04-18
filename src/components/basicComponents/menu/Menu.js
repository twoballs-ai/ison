// import React from "react";
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import MailIcon from '@mui/icons-material/Mail';
// import './menu.css'
// import { Container } from "@mui/material";

// const drawerWidth = 290;

// function Menu(props) {
//     const [selectedIndex, setSelectedIndex] = React.useState(0);

//     const handleListItemClick = (event, index) => {
//         setSelectedIndex(index);
//     };

//     return (
     
//             <Drawer
//                 variant="permanent"
//                 sx={{
//                     width: drawerWidth,
//                     flexShrink: 0,
//                     [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//                 }}
//                 anchor="left"
//             >
//                 <Toolbar />
//                 <Box sx={{ overflow: 'auto' }} className={"menu"}>
//                     <nav aria-label="main mailbox folders">
//                         <List>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     to="/"
//                                     selected={selectedIndex === 0}
//                                     onClick={(event) => handleListItemClick(event, 0)}
//                                 >
//                                     <ListItemIcon>
//                                         <InboxIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Подведомственные организации" />
//                                 </ListItemButton>
//                             </ListItem>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     selected={selectedIndex === 1}
//                                     onClick={(event) => handleListItemClick(event, 1)}
//                                 >
//                                     <ListItemIcon>
//                                         <DraftsIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Департамент" />
//                                 </ListItemButton>
//                             </ListItem>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     to="/category"
//                                     selected={selectedIndex === 2}
//                                     onClick={(event) => handleListItemClick(event, 2)}
//                                 >
//                                     <ListItemIcon>
//                                         <DraftsIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Категории подведомственной организации" />
//                                 </ListItemButton>
//                             </ListItem>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     to="/customers"
//                                     selected={selectedIndex === 3}
//                                     onClick={(event) => handleListItemClick(event, 3)}
//                                 >
//                                     <ListItemIcon>
//                                         <DraftsIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Объекты недвижимости" />
//                                 </ListItemButton>
//                             </ListItem>
//                         </List>
//                     </nav>
//                     <Divider />
//                     <nav aria-label="secondary mailbox folders">
//                         <List>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     selected={selectedIndex === 4}
//                                     onClick={(event) => handleListItemClick(event, 4)}
//                                 >
//                                     <ListItemIcon>
//                                         <InboxIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Поиск" />
//                                 </ListItemButton>
//                             </ListItem>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     selected={selectedIndex === 5}
//                                     onClick={(event) => handleListItemClick(event, 5)}
//                                 >
//                                     <ListItemIcon>
//                                         <DraftsIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Отчеты" />
//                                 </ListItemButton>
//                             </ListItem>
//                         </List>
//                     </nav>
//                     <Divider />
//                     <nav aria-label="main mailbox folders">
//                         <List>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     to="/about"
//                                     selected={selectedIndex === 6}
//                                     onClick={(event) => handleListItemClick(event, 6)}
//                                 >
//                                     <ListItemIcon>
//                                         <InboxIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="О проекте" />
//                                 </ListItemButton>
//                             </ListItem>
//                             <ListItem disablePadding>
//                                 <ListItemButton
//                                     to="/contacts"
//                                     selected={selectedIndex === 7}
//                                     onClick={(event) => handleListItemClick(event, 7)}
//                                 >
//                                     <ListItemIcon>
//                                         <DraftsIcon />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Контакты" />
//                                 </ListItemButton>
//                             </ListItem>
//                         </List>
//                     </nav>
//                 </Box>
//             </Drawer>
    

//     )
// }

// export default Menu
