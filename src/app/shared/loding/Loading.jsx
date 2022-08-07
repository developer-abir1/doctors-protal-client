import { Box } from '@mui/system';
import React from 'react';
import { MoonLoader } from 'react-spinners'; 

const Loading = () => {
    return (
     
             <Box sx={{ display: "flex", justifyContent: "center"  , alignItems:"center" , height:500}}>
                <MoonLoader
                    color="#2efaf0"
                    cssOverride={null}
                    loading
                    size={59}
                    speedMultiplier={1}
                />
            </Box>
       
    );
};

export default Loading;