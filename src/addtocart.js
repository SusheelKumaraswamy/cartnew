import {useLocation,useNavigate} from 'react-router-dom';
import './index.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

export default function Addtocart(){
  const location=useLocation();
  const navigate=useNavigate();
  var items=location.state.cartItems;
  console.log(items);
  var a=0;

  var total=items.map((ite)=>{
    a+= +(ite[0].price);
  });

  console.log(a);

    return (
      <>  
        <button onClick={()=>navigate(-1)}>back</button>
        <br/>
        <br/>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Prod ID</StyledTableCell>
                  <StyledTableCell align="right">Prod Name</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">price</StyledTableCell>
                </TableRow>
              </TableHead>
              
              {items.map((ele)=>{
                return(
                  <TableBody>
                    <StyledTableCell align="right">{ele[0].id}</StyledTableCell>
                    <StyledTableCell align="right">{ele[0].name}</StyledTableCell>
                    <StyledTableCell align="right">{ele[0].price}</StyledTableCell>
                    <StyledTableCell align="right">{ele[0].price}</StyledTableCell>
                  </TableBody>
                );
                })}
                 <TableBody>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right">Total Price:</StyledTableCell>
                    <StyledTableCell align="right">{a}</StyledTableCell>
                    <StyledTableCell align="right">Thanks for Shopping</StyledTableCell>

                </TableBody>
            </Table>
          </TableContainer>    
          </>
      );
}


