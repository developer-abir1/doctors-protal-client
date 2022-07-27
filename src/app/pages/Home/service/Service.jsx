import React from 'react'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';

import { CardMedia, Grid } from '@mui/material';
const Service = ({ service }) => {
    const {name , _id , img} = service
  
    return (
        <Grid item xs={12} sm={12} md={4} key={service._id}>
            <Card className='serviceCard' sx={{ p:2, minWidth: 275  , textAlign:'center' , boxShadow:"0" ,  }}>
                <CardMedia component="img"
                className='serviceImg'
                style={{width:'auto' , height:"80px" , margin: "0 auto"}}
                image={img}
                alt="green"
              
                />
               
                <CardContent>
                     
                    <Typography  variant='h4' sx={{mb:3 }} color="text.secondary">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{textAlign:"justify"}} color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatum optio beatae a est earum atque adipisci? Inventore tempora at ea magni? Rem ullam deleniti ad incidunt vitae nihil perferendis.
                    </Typography>
                </CardContent>
              
            </Card>
        </Grid>
    );
};

export default Service;