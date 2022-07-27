import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({booked}) => {
    const {id , name, time , price ,  space} = booked ;
    
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
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        Price ${price}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button  variant="contained" style={buttonColor}>BOOK APPOINTMENT</Button>
                </Paper>
             </Grid>
        
    );
};

export default Booking;