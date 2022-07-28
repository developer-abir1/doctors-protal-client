import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';

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

export default function BookingModal({ booked, open, handleClose, date, treatment }) {

    const { _id, name, slots } = treatment;
    
    const [time, setTime] = React.useState([]);


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(_id, name, time)
        handleClose()



    }

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} width={{ xs: 250 }}  >
                    <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <Close onClick={handleClose} sx={{ backgroundColor: "#706d6d9a", width: 40, height: 40, borderRadius: 50, fontSize: "14px", cursor: "pointer", }} />
                    </Box>
                    <Box >
                        <Box sx={{ my: 3 }}  >

                            <Typography variant='h5' sx={{ textAlign: "center", color: "#2efaf0f5", textTransform: "capitalize" }}>{name}</Typography>

                        </Box>
                        <Box  >
                            <form onSubmit={handleSubmit} >
                                <TextField

                                    disabled
                                    size='small'
                                    sx={{ width: "95%", m: 1, background: "#dddddddc", borderRadius: "5px" }}
                                    defaultValue={date.toDateString()}
                                />

                            

                                    <Box sx={{ display:'flex' , justifyContent:'center' }} >
                                        <FormControl  sx={{ width: "95%" }}>

                                            <Select


                                                value={time}

                                                onChange={handleChange}

                                            >
                                                {slots.map(solt => (<MenuItem value={solt}>{solt}</MenuItem>))}

                                            </Select>
                                        </FormControl>
                                    </Box>
                              
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
