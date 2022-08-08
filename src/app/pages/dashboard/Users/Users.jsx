import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQuery } from 'react-query';
import { Button } from '@mui/material';
import UserRow from './UserRow';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
 
export default function Users() {


  const [users, setUsers] = React.useState([])
  React.useEffect(() => {

    fetch(`http://localhost:4500/user` ,{
      method:"GET",
      headers:{
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [users])







  return (
    <TableContainer component={Paper}> 
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>

            <StyledTableCell align="right"  >Role</StyledTableCell>
            <StyledTableCell align="right"  >Action</StyledTableCell>

          </TableRow>
        </TableHead>
      
          {users.map((row, index) => (
           
            <UserRow row={row} key={index} index={index}  />
            
          ))}
      
      </Table>
    </TableContainer>
  );
}