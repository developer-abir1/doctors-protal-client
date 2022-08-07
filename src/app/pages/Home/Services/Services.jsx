import React from 'react'; 
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import Service from '../service/Service';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        _id: 1,
        name: 'Fluoride Treatment',
        description: '',
        img: fluoride
    },
    {
        _id: 2,
        name: 'Cavity Filling',
        description: '',
        img: cavity
    },
    {
        _id: 3,
        name: 'Teeth Whitening',
        description: '',
        img: whitening
    },
];

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Box  >
                    <Typography variant='h5' fontSize={{xs:"18px" , md:'24px'}}  sx={{ fontWeight: 'bold', color: "black", position: 'relative', zIndex: 1, padding: 10 }}  >Our Services</Typography>
                    <Typography variant='h2' fontSize={{xs:"30px" ,md:"60px"}}   sx={{     fontWeight: 'bold', position: "absolute", color: '#80808059', marginLeft:{xs:17 , sm:34, md:50}, marginTop: {xs:-14 ,md:-17} }}  >Our Services</Typography>
                 </Box>
                <Typography variant='h3' sx={{ mb: 8, fontWeight: "bold", color: '#0FCFEC' }}  >  Services we provide</Typography>
            </Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {services.map((service) => (

                    <Service service={service} key={service._id} />

                ))}
            </Grid>
        </Box>
    );
};

export default Services;