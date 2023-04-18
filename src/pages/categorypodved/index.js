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
// import IconButton from '@mui/material/IconButton';
// import FirstPageIcon from '@mui/icons-material/FirstPage';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import LastPageIcon from '@mui/icons-material/LastPage';
// import axios from 'axios';


//   const baseURL = "http://10.0.0.13:5000/api/v1.0/category/";

// function CategoryPage(props) {

//   const [categories, setCategories] = React.useState([]);

//   React.useEffect(() => {
//     axios.get(baseURL).then((res) => {
//       // console.log(res.data.data)
//       setCategories(res.data.data);
//     });
//   }, []);

//   if (!categories) return null;

//   // Avoid a layout jump when reaching the last page with empty rows.

//   return (
//     <div>


//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Категории</TableCell>

//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {categories.map(category => (
//             <TableRow
//               key={category.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {category.name}
//               </TableCell>

//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//     </div>
//   );
//   }

//   export default CategoryPage