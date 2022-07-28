import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Booking from '../Booking/Booking';
import BookingModal from '../BookinModal/BookingModal';



const bookings = [
    {
        _id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price: 20,
        space: 10,
    },
    {
        _id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price: 15,
        space: 8,
    },
    {
        _id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price: 17,
        space: 9,
    },
    {
        _id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price: 19,
        space: 5,
    },
    {
        _id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price: 25,
        space: 10,
    },
    {
        _id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price: 35,
        space: 10,
    },
]
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