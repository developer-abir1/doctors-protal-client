import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Container,  } from '@mui/material';
import { Link } from "react-router-dom"

const Navbar = ({bgNav , navText }) => {

    const [scroll , setScroll] = React.useState(false)

    window.addEventListener("scroll" ,() =>{
       const scrolled = window.scrollY;
       if(scrolled > 90){
        setScroll(true)
       }
       else{
        setScroll(false)
       }
     }) 
    return (
        <Box sx={{ flexGrow: 1 }}> 
            <AppBar position="fixed" sx={{ background:scroll ? "#ffffffde" : bgNav  , color: navText , boxShadow:scroll ?"5px 5px 10px gary " :"none"   }}  >
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, display: { md: "none", xs: 'block', sm: "block" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, boxShadow:''}}>
                            News
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'none', md: "block flex" } }}>
                            <Link to="/" style={{ textDecoration: "none", color: navText,  }}>     <Button variant='black'>Home</Button></Link>
                            <Link to="/appoinment" style={{ textDecoration: "none", color: navText,  }}>   <Button variant='black'>Appoinment</Button> </Link>
                            <Button variant='black'>Home</Button>
                            <Button variant='black'>Home</Button>
                        </Box>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </Container>
            </AppBar> 
        </Box>
    );
};

export default Navbar;
 