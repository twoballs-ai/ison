import React from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import axios from 'axios';


  const baseURL = "http://10.0.0.13:5000/api/v1.0/cardhousedetail/000000103/";

function CardhouseDetailPage(props) {

  const [cardhousedetails, setCardhouseDetails] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      console.log(res.data)
    //   setCardhouseDetails(res.data.data);
    });
  }, []);

  if (!cardhousedetails) return null;

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <div>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Категории</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {cardhousedetails.map(cardhousedetail => (
            <TableRow
              key={cardhousedetail.CadastralNumber}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {cardhousedetail.CadastralNumber}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
  }

  export default CardhouseDetailPage