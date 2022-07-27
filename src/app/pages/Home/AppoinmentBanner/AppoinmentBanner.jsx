import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import bg from '../../../assets/images/appointment.png';
import { Padding } from '@mui/icons-material';


const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 200,
 

}
const buttonColor = {
    background: "#19D3AE",
    color: 'white'
}

const AppoinmentBanner = () => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{display:'flex' , justifyContent:'flex-start' , alignItems:"center"} }   >

                <Grid item xs={12} md={6} display={{ sm: "none", md: "block", xs: 'none' }}>
                    <img style={{ width: 500, marginTop: "-110px", marginBottom:"-8px"}} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} padding={{ xs: "10px", md: "15px" }}   md={6} sx={{  display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", textAlign: 'left' }} >
                    <Box>
                        <Typography variant='h6' sx={{ color: "#0FCFEC" }} component="div"> Appointment</Typography>
                        <Typography sx={{ fontWeight: "bold", color: "white", my: 2, fontSize: { xs: "24px", sm: "40px", md: "50px" } }} variant='h3' component="div"> Make an appointment Today</Typography>
                        <Box sx={{ my: 2 }}>                        <Typography variant="caption" style={{ color: 'lightGray', }} component="div"> Consectetur adipisicing elit. Quidem provident mollitia quod incidunt repellendus aut molestiae quam modi e </Typography>
                        </Box>
                        <Button variant="contained" style={buttonColor}   >Laren More</Button>
                    </Box>


                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentBanner;