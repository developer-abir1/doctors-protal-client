import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Close } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { format } from 'date-fns';
import axios from 'axios';


import { toast } from 'react-toastify'; 


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


 


export default function BookingModal({refetch , open, handleClose, date, treatment, setTreatment }) {

    const { _id, name, slots } = treatment;

    const [slot, setSlots] = React.useState([]);

    const [user, loading, error] = useAuthState(auth)
    
    








    const formateDate = format(date,"PP");

   
    const handleSubmit = (event) => {
        event.preventDefault()
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formateDate,
            patient: user.email,
            patientName: user.displayName,
            slot,
            phone: event.target.phone.value
        }

        axios({
            method: 'post',
            url: 'http://localhost:4500/booking',
            data: { ...booking },


        }) 
         .then(res => {
               
                if (res.data.success)
                {

                    toast.success(`  Appoinment is set ${ date} at ${ slot}` ) 
                 

                    
                }
                else
                {
                   toast.error(`Alrady have a Appoinment is set ${ res.data.booking.date} at ${ res.data.booking.slot}`) 
                     
                    
                }
                refetch()
                setTreatment(null)

            })






    }

    const handleChange = (event) => {
        setSlots(event.target.value);
    };


    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <Box sx={style} width={{ xs: 250, }}  >
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
                                    defaultValue={formateDate}
                                />




                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                                    <FormControl sx={{ width: "95%" }}>

                                        <InputLabel id="demo-simple-select-label">Set Time </InputLabel>

                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Set Time  "
                                            required
                                            value={slot}
                                            onChange={handleChange}

                                        >
                                            {slots.map((solt, index) => (<MenuItem key={index} value={solt} >{solt}</MenuItem>))}

                                        </Select>
                                    </FormControl>
                                </Box>
                                <TextField
                                    disabled

                                    size='small'
                                    sx={{ width: "95%", m: 1, background: "#dddddddc" }}
                                    defaultValue={user?.displayName}
                                />

                                <TextField

                                    defaultValue={user?.email}
                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    placeholder="Enter You Email"
                                />
                                <TextField
                                     
                                    name="phone"
                                    type="number"
                                    size='small'
                                    sx={{ width: "95%", m: 1 }}
                                    placeholder="Enter You Phone Number"
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
