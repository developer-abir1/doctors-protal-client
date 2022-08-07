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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Users() {


const [users , setUsers] = React.useState([])
React.useEffect(() =>{

  fetch(`http://localhost:4500/user`)
  .then(res => res.json())
  .then(data => setUsers(data))
},[])


  return (
    <TableContainer component={Paper}>
      <h2>all user {users.length}</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sl</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
           
            <StyledTableCell align="left" sx={{textAlign:'center'}}>Role</StyledTableCell>
            <StyledTableCell align="right" sx={{textAlign:'center'}}>Action</StyledTableCell>
             
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row , index) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="th">{index +1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
              <StyledTableCell align="right" sx={{textAlign:"center"}}><Button variant='outlined'> Make Admin</Button></StyledTableCell>
              <StyledTableCell align="right" sx={{textAlign:'center'}}><Button variant='outlined'> Delete</Button></StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}