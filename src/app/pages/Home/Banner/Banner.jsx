import React from 'react';
import char from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png' 
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import {Link } from 'react-router-dom'


const Banner = () => {


const bannerBg ={
    background: `url(${bg})`, 
   
}
const verticalCenter = {
    display:"flex" ,
    height:500 ,
    alignItems:"center",
  
}
    const buttonColor = {
        background: "#0FCFEC",
        color:'white'
    }
    return (
        <Container sx={{flexGrow:1 ,     display:'flex' , justifyContent:'center' , alignItems:'center' ,}} style={bannerBg}   >
            <Grid container spacing={2} >
                <Grid item xs={12} sm={12} md={5} xl={5} sx={{ ...verticalCenter ,textAlign:'left'}}> 
             <Box>
             <Typography variant='h3' sx={{fontWeight:500}}  > Your New Smile  <br />  Starts   Hear</Typography>
              <Typography variant="h6" color="gary" sx={{my:5 , fontSize:14 , fontWeight:300}} > Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo delectus ex, corporis laudantium itaque qui magnam molestias quos minus dolores!</Typography>
           <Link to="/appoinment" style={{textDecoration:"none"}}>  <Button variant="contained"  style={buttonColor} >Get Appoinment</Button></Link> 
             </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} xl={7} sx={{...verticalCenter , justifyContent:"center"}}> 
                <img width={400} src={char} alt=""  />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;