import { Calculate, CalendarMonth } from '@mui/icons-material';
import { Container, Grid } from '@mui/material';
import char from "../../../assets/images/chair.png"
import React from 'react';

const AppoinmentHeader = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <CalendarMonth/>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img width={400} src={char} alt="" srcset="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;