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
    width: 300,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    borderRadius: "5px",
    p: 4,
};

const bookingBtn = {
    background: "#22ebe1f3"
}

export default function BookingModal({ handleOpen, open, handleClose, name, price, space, time, date }) {



    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log("click me") 
        handleClose()
        


    }
 


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} width={{ xs: 250 }}  >
                    <Box >
                        <Box sx={{ my: 3 }}  >

                            <Typography variant='h5' sx={{ textAlign: "center" }}>{name}</Typography>

                        </Box>
                        <Box  >
                            <form onSubmit={handleSubmit} >
                                <TextField
                                    disabled
                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    defaultValue={time}
                                />
                                <TextField

                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    placeholder="Enter You Name"
                                />

                                <TextField

                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    placeholder="Enter You Email"
                                />
                                <TextField
                                    type="number"
                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    placeholder="Enter You Phone Number"
                                />
                                <TextField
                                    disabled
                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    defaultValue={date.toDateString()}
                                />
                                <Button type="submit" variant="contained" style={bookingBtn} sx={{ mt: 2, width: "100%" }}>Booked</Button>
                            </form>


                        </Box>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
