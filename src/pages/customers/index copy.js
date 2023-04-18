import React from "react";
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form from "../../components/addnewcustomer/forms/form";
import Forms from "../../components/addnewcustomer/forms/forms";

  const baseURL = "http://10.0.0.13:5000/api/v1.0/customers/1/";
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



function ObjectsPage(props) {
// stepper start

// stepper end

  const [objects, setObjects] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      // console.log(res.data.data)
      setObjects(res.data.data);
    });
  }, []);

  if (!objects) return null;

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <div>
<Button variant="contained" onClick={handleOpen}>Добавить объект недвижимости</Button>
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form />
        </Box>
      </Modal>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Наименование ОН</TableCell>
            <TableCell align="right">Адрес</TableCell>
            <TableCell align="right">Вид объекта</TableCell>
            <TableCell align="right">Вид собственности</TableCell>
            <TableCell align="right">Обременение</TableCell>
            <TableCell align="right">ОКН</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {objects.map(object => (
            
            <TableRow component={Link} to={`/cardhousedetail/${object.code}`}
            style={{ textDecoration: 'none', color: 'black' }}
              key={object.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell component="th" scope="row">
                {object.name}
              </TableCell>
              <TableCell align="right">{object.full_adress}</TableCell>
              <TableCell align="right">{object.type_object}</TableCell>
              <TableCell align="right">{object.owner}</TableCell>
              <TableCell align="right">{object.encumbrance}</TableCell>
              <TableCell align="right">{object.okn}</TableCell>
              
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
  }

  export default ObjectsPage