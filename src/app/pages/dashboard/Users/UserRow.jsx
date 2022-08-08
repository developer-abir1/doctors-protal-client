import { Button, TableBody } from '@mui/material'; 
import React from 'react'; 
import { StyledTableCell, StyledTableRow } from '../mybooking/Mybooking';
 
import { signOut } from 'firebase/auth';
import auth from '../../../../firebase.init';
import { toast } from 'react-toastify';

const UserRow = ({row , index}) => {
    const {email , role} = row
    
const handleMakeAdmin =()=>{
    const url = `https://glacial-headland-03252.herokuapp.com/user/admin/${email}`;
    fetch(url , {
        method:"PUT",
        headers:{
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        
    })
    .then(res =>{

        if(res.status ===403 ){
            signOut(auth)
            localStorage.removeItem('accessToken');
            toast.error("Fild to make admin")
            
          }
        return  res.json()
    })
    .then(data => 
        {
           
           
         if(data.modifiedCount > 0){
            toast.success("make admin succesfuly")
         } 

        }
        
        
        
        )
  }
  
    return (
         
               <TableBody>
              <StyledTableRow  >
              <StyledTableCell align="th">{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {email}
              </StyledTableCell>
              <StyledTableCell align="right"  >{role !== `admin` && <Button variant='outlined' onClick={handleMakeAdmin}> Make Admin</Button>}</StyledTableCell>
              <StyledTableCell align="right"  ><Button variant='outlined'> Delete</Button></StyledTableCell>

            </StyledTableRow>
           
            </TableBody>
       
    );
};

export default UserRow;