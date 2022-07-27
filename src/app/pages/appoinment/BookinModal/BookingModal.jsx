import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius:"5px",
    p: 4,
};

const bookingBtn ={
    background:"#22ebe1f3"
}

export default function BookingModal({ handleOpen, open, handleClose, name  , price ,space , time} ) {


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}   >
                    <Box >
                      <Box sx={{my:3}}>
                      <Typography variant='h5' sx={{ color: "#5fe6dfe0"  , textAlign:"center"}}>  {name}  </Typography>
                      <Box sx={{display:"flex" , justifyContent:'space-between', my:2}}>
                     <Typography variant='caption' sx={{ color: "5fe6dfe0" }}> Price:  ${price}  </Typography>
                     <Typography variant='caption' sx={{ color: "5fe6dfe0" }}>    {time}  </Typography>
                        <Typography variant="caption" sx={{ color: "5fe6dfe0" }}>   {space} space Available  now  </Typography>
                      </Box>
                      </Box>
                       <Box sx={{display:'flex' , flexDirection:"column" , alignItems:"center" , justifyContent:"space-between" , height:"200px"}}>
                       <TextField placeholder='Enter Eamil Address' name="email" type="email"/> 
                        <TextField placeholder='Enter Eamil Address' name="email" type="email"/> 
                        <Button variant="contained" style={bookingBtn}>Booked</Button>
                       </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
