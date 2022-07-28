import { Box, Button, Card, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookinModal/BookingModal';

const Booking = ({booked , date}) => {
    const {id , name, time , price ,  space} = booked ;
    
const buttonColor = {
    background: "#19D3AE",
    color: 'white'
}


const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
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
                    <Button  variant="contained" style={buttonColor} onClick={handleOpen} >BOOK APPOINTMENT</Button>
                </Paper>
                <BookingModal date={date} handleOpen={handleOpen} handleClose={handleClose} open={open} name={name} price={price} space={space} time={time} />
             </Grid>
        
    );
};

export default Booking;