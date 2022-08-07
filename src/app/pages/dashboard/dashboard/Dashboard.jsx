import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';  
import ListItem from '@mui/material/ListItem'; 
 import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {   NavLink, Outlet } from 'react-router-dom';  
import { List } from '@mui/material';
const drawerWidth = 240;

 
export default function Dashboard(props ) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const activeStyle= {
      color:'white',
      textDecoration:'none',
      fontWeight:"bold",
      background:'black',
      borderTopRightRadius: '10px',
      borderBottomRightRadius:"10px",
      marginTop:"10px"
  }
 
const defaultStyle ={
  color:'black',
  textDecoration:'none',
  fontSize:"20px",
  marginTop:"10px"

}
  const drawer = (
    <div style={{background:"#2efaf0" , height:'100vh' ,  }}>
   <Box sx={{display:"flex" , justifyContent:'center' , }}>
   <NavLink  style={  defaultStyle  } to="/">     <ListItem     >Home</ListItem> </NavLink>
   </Box>
      <Divider sx={{mt:6}} />
      
     
      <List sx={{display:"flex" ,flexDirection:"column"}}>
     <NavLink  style={(navinfo) => navinfo.isActive ? activeStyle: defaultStyle}      to="/dashboard">     <ListItem     >Dashboard</ListItem> </NavLink>
     
        <NavLink  style={(navinfo) => navinfo.isActive ? activeStyle: defaultStyle}   to="/dashboard/mybooking"><ListItem className='navLink'     variant='contained' >MY Booking</ListItem></NavLink>
        <NavLink  style={(navinfo) => navinfo.isActive ? activeStyle: defaultStyle}   to="/dashboard/users"><ListItem className='navLink'     variant='contained' >All  Users  </ListItem></NavLink>
        <NavLink  style={(navinfo) => navinfo.isActive ? activeStyle: defaultStyle}   to="/dashboard/review">     <ListItem     >Review</ListItem> </NavLink>
        
         
       
        
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background:"#F0F8FF"
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:'black'}}>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
     <Outlet/>
      </Box>
    </Box>
  );
}
