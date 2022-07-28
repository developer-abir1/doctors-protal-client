import {   Button,  Grid, Paper, Typography } from '@mui/material';
import React from 'react'; 

const Booking = ({booked ,  handleModalOpen } ) => {
    const {  name,  slots  } = booked ;
    
const buttonColor = {
    background: "#19D3AE",
    color: 'white'
}


    return (
        <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{ py: 5 , textAlign:'center'}}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        { 
                        slots.length ?
                        <Typography variant='h6'>{slots[0]}</Typography>
                        :
                        <Typography variant='h6' sx={{color:'red'}}> No Space Avileable </Typography>
                        }
                    </Typography>
                    
                    <Typography variant="h6" display="block" sx={{textTransform:"lowercase" , fontSize:14 , color:slots.length >1 ?"black" :"red" }} gutterBottom>
                        {slots.length} {slots.length > 1 ?"SPACES":"SPACE"} AVAILABLE
                    </Typography>
                    <Button  onClick={() => handleModalOpen(booked) } disabled={slots.length === 0}   variant="contained" style={slots.length  === 0 ?  {background:""} : buttonColor}   >BOOK APPOINTMENT</Button>
                </Paper>
            
             </Grid>
        
    );
};

export default Booking;