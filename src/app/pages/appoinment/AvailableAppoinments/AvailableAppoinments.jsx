import {  Container, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import React, {   useState } from 'react';
import { useQuery } from 'react-query'; 
import Loading from '../../../shared/loding/Loading';
import Booking from '../Booking/Booking';
import BookingModal from '../BookinModal/BookingModal'; 
 
const AvailableAppoinments = ({ date   }) => {

    // const [services, setServices] = useState([]);  
    const [treatment , setTreatment] = useState(null)
     
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const formentDate = format(date ,"PP")

    const handleModalOpen = (service  ) =>{
        handleOpen()
        setTreatment(service)
    }
 
 const {data:services , isLodding , refetch} = 
      useQuery(['available' , formentDate] , () => fetch(`https://glacial-headland-03252.herokuapp.com/available?date=${formentDate}`)
 
         .then(res => res.json()))
       


 


 if(isLodding){
    return <Loading/>
 }






    return (
        <Container>
            <Typography variant='h4' sx={{ textAlign: "center", fontWeight: "bold", color: "#5fe6dfe0" }} >Available Appoinments on <span style={{ fontWeight: "bold" }}>  {formentDate}</span></Typography>

            <Grid container spacing={2} sx={{ my: 3 }}>

                { 
                    services?.map((booked, index) => <Booking handleModalOpen={handleModalOpen} handleOpen={handleOpen} booked={booked} key={index} date={date}    />)
                }
            </Grid>

       { treatment && <BookingModal refetch={refetch}  treatment={treatment}  date={date} handleOpen={handleOpen} handleClose={handleClose} open={open} setTreatment={setTreatment} />  }
        </Container>
    );
};

export default AvailableAppoinments;
