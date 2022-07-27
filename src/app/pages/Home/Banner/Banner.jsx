import React from 'react';
import char from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png' 
import { Box, Button, Grid, Typography } from '@mui/material';
const Banner = () => {

    const buttonColor = {
        background: "#0FCFEC",
        color:'white'
    }
    return (
        <Box sx={{flexGrow:1}}  sx={{height:"500px" ,display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <Grid container spacing={2} sx={{}}>
                <Grid item xs={12} sm={12} md={5} xl={5}> 
              <Typography variant='h3'  > Your New Smile  <br />  Starts   Hear</Typography>
              <Typography variant="caption" color="slateblue" > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus ex, corporis laudantium itaque qui magnam molestias quos minus dolores!</Typography>
              <Button variant="contained"  style={buttonColor}>Get Appoinment</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={7} xl={7} sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}> 
                <img width={400} src={char} alt="" srcset="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;