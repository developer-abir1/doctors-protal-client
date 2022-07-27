import { Box, Container } from '@mui/material';
import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Layout = ({title , children  ,navText ,bgNav}) => {
    return (
        < >
           <Box sx={{display:"flex" , flexDirection:"column" , minHeight:"100vh" , justifyContent:'space-between'}}>
             <header>
                <title>{title? title +" - Doctors Protal": "Doctors - Protal"}</title>
                <Navbar navText={navText} bgNav={bgNav} />
            </header>
         <Container>
            <main  >
             
             {children}
            
            </main>
            </Container>
            

            <footer>
                <Footer/>
            </footer>
           </Box>
        </>
    );
};

export default Layout;