 
import { Container, Grid } from '@mui/material';
import char from "../../../assets/images/chair.png"
import React from 'react';
import Calander from '../../../shared/calander/Calander';

const AppoinmentHeader = ({date , setDate}) => {
    

    return (
        <Container>
            <Grid container spacing={2} sx={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Calander date={date} setDate={setDate}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{display:"flex" , justifyContent:"center" ,alignItems:"center" , height:400}}>
                    <img width={400} src={char} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;