// import React from "react";
// import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableHead from '@mui/material/TableHead';
// import TableContainer from '@mui/material/TableContainer';
// import TableFooter from '@mui/material/TableFooter';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import axios from 'axios';
// import { useParams } from "react-router-dom";
// import Cookies from 'js-cookie';



// function CardhouseDetailPage(props) {
//   const {id} = useParams();
//   const baseURL = `http://10.0.0.13:5000/api/v1.0/cardhousedetail/${id}/`;
//   const [cardhousedetails, setCardhouseDetails] = React.useState(null);

//   React.useEffect(() => {
//     const accesscookie = Cookies.get('access')
//     axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
//       // console.log(res.data)
//       setCardhouseDetails(res.data);
//     });
//   }, [id]);

//   if (!cardhousedetails) return null;

//   // Avoid a layout jump when reaching the last page with empty rows.

//   return (
//     <div>


//       <TableContainer component={Paper}>
//       <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image={`${cardhousedetails.url}${cardhousedetails.data.foto_main.fotoAdr}`}
//         title="green iguana"
//       />
//     </Card>
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
//           <TableHead>

//           </TableHead>
//           <TableBody>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {cardhousedetails.data.name}
//               </TableCell>
//               <TableCell></TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Описание:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.description}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Вид объекта:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.object_type}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Категория объекта историко-культурного значения:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.historical_Category}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Номер ЕГРОКН:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.UGROKN_number}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Регион:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.region}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Адрес:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.address}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Площадь объекта:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.area}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Состояние объекта:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.Condition}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Технический этаж:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.technicalFloor}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Лифт:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.Lift}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Дата проведения последнего капитального ремонта, реставрационных работ,
//                                 реконструкции:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.remontDate}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Охранное обязательство:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.SecurityObligation}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Правообладатель:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.TypeofRightOwner}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Кадастровый номер/дата:
//               </TableCell>
//               <TableCell>{cardhousedetails.data.CadastralNumber}/ {cardhousedetails.Date_of_assignment_cadastral}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Вид обременения:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.KindEncumbrances}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Площадь обременения:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.encumbrance_area}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Лицо в пользу которого установлено обременение:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.person_encumbrance}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Срок обременения:
//               </TableCell>
//               <TableCell>{cardhousedetails.data.start_encumbrance }/{cardhousedetails.data.end_encumbrance}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Срок пользования:
//               </TableCell>
//               <TableCell>{cardhousedetails.data.start_use}/{cardhousedetails.data.end_use}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Стоимость аренды:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.encumbrance_cost}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Прочие платежы:
//               </TableCell>
//               <TableCell> {cardhousedetails.data.Other_payments}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//     </div>
//   );
// }

// export default CardhouseDetailPage