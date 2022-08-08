import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';  
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material'; 
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import { signOut } from 'firebase/auth';


export  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
 export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
   

const Mybooking = () => {
 const navigete =  useNavigate()

 const [appoinment , setAppoinment] = useState([])
 
 
 const [user ] = useAuthState(auth );
     
     
   
     useEffect(() => {
        
            if(user){
              fetch(`https://glacial-headland-03252.herokuapp.com/booking?patient=${user?.email}` ,{
              method:"GET",
              headers: {
                'authorization' :`Bearer ${localStorage.getItem("accessToken")}`
              }
            })
            .then(res => {
              if(res.status === 401 || res.status === 403)
              {
                signOut(auth)
                localStorage.removeItem('accessToken')
                navigete("/")
              }
              return res.json()
            })
            .then(data => setAppoinment(data))
            }
       
     } ,[user ])
    

     if(appoinment.length === 0 && appoinment ){
      return <Box sx={{display:"flex" , justifyContent:'center' , alignItems:'center' , height:"100vh"}}><Typography variant='h6'>You have no appoinmnet plase <Link to="/appoinment" style={{textDecoration:"none" , }}><Button variant='outlined' >Appoinment</Button></Link></Typography></Box>
     }
  
    return (
        <Box>
            this is my booking    {appoinment.length}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Appoimnet  </StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Appoiment Slot</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
           <StyledTableCell align="right">Update</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            <StyledTableCell align="right">Stutus</StyledTableCell>
          </TableRow>
        </TableHead>
      
        <TableBody>
            
       {appoinment.map((row , index) => (
      
            <StyledTableRow key={row.patientName}>
            <StyledTableCell component="th" scope="row">
              {index +1}
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {row.patientName}
            </StyledTableCell>
            <StyledTableCell align="right">{row.treatment}</StyledTableCell>
            <StyledTableCell align="right">{row.date}</StyledTableCell>
            <StyledTableCell align="right">{row.slot}</StyledTableCell>
            <StyledTableCell align="right">{row.phone}</StyledTableCell>
           
            <StyledTableCell align="right" sx={{color:'green' ,  textAlign:'center'  }}>Update</StyledTableCell>
            <StyledTableCell align="right" sx={{color:'red' , textAlign:'center'  }}>Delete</StyledTableCell>
            <StyledTableCell align="right" sx={{color:'red' ,   textAlign:'center'  }}>Pandding</StyledTableCell>
          </StyledTableRow>
            
          ))}
        </TableBody>
         
      </Table>
    </TableContainer>
        </Box>
    );
};

export default Mybooking;