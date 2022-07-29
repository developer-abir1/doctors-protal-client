import {  Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import BookingModal from '../BookinModal/BookingModal';


 
const AvailableAppoinments = ({ date   }) => {

    const [services, setServices] = useState([]);  
    const [treatment , setTreatment] = useState(null)
     

    const handleModalOpen = (service  ) =>{
        handleOpen()
        setTreatment(service)
    }
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold", color: "#5fe6dfe0" }} >Available Appoinments on <span style={{ fontWeight: "bold" }}> {date.toDateString()} </span></Typography>

            <Grid container spacing={2} sx={{ my: 3 }}>

                {
                    services.map((booked, index) => <Booking handleModalOpen={handleModalOpen} handleOpen={handleOpen} booked={booked} key={index} date={date}    />)
                }
            </Grid>

       { treatment && <BookingModal  treatment={treatment}  date={date} handleOpen={handleOpen} handleClose={handleClose} open={open} />  }
        </Container>
    );
};

export default AvailableAppoinments;