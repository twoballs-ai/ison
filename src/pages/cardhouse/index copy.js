import React from "react";
import PropTypes from 'prop-types';

import axios from 'axios';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


function CardhousePage(props) {
  const {id} = useParams();
  const baseURL = `http://10.0.0.13:5000/api/v1.0/cardhouse/${id}/`;
  const [cardhouse, setCardhouse] = React.useState(null);

  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      // console.log(res.data)
      setCardhouse(res.data.data);
    });
  }, [id]);

  if (!cardhouse) return null;

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <p></p>
//     <div>
// <h3 class="mx-2 text-center">{cardhouse.podved_info.name}</h3>

//       <TableContainer component={Paper}>
      
//         <Table sx={{ minWidth: 650 }} aria-label="simple table">
          
//           <TableHead>

//           </TableHead>
//           <TableBody>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 Фотография учреждения:
//               </TableCell>
//               <TableCell>фото</TableCell>
//               <TableCell>Официальное наименование:</TableCell>
//               <TableCell>{cardhouse.podved_info.fullname}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Категория учреждения:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.category}</TableCell>
//               <TableCell>Департамент:</TableCell>
//               <TableCell>{cardhouse.podved_info.department}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               ИНН:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.INN}</TableCell>
//               <TableCell>КПП:</TableCell>
//               <TableCell>{cardhouse.podved_info.KPP}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               ОГРН:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.OGRN}</TableCell>
//               <TableCell>КОПУК:</TableCell>
//               <TableCell>{cardhouse.podved_info.KOPUK}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Юридический адрес:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.legal_address}</TableCell>
//               <TableCell>Фактический адрес:</TableCell>
//               <TableCell>{cardhouse.podved_info.fact_address}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Адрес сайта:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.sait}</TableCell>
//               <TableCell>Номер телефона:</TableCell>
//               <TableCell>{cardhouse.podved_info.phone_number}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Электронная почта:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.email}</TableCell>
//               <TableCell>ФИО Руководителя:</TableCell>
//               <TableCell>{cardhouse.podved_info.boss}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Ответственное лицо:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.contact_name}</TableCell>
//               <TableCell>Телефон ответственного лица:</TableCell>
//               <TableCell>{cardhouse.podved_info.contact_phone}</TableCell>
//             </TableRow>
//             <TableRow
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//               Руководитель ответственного лица:
//               </TableCell>
//               <TableCell>{cardhouse.podved_info.supervisor_name}</TableCell>
//               <TableCell>Телефон руководителя ответственного лица:</TableCell>
//               <TableCell>{cardhouse.podved_info.supervisor_phone}</TableCell>
//             </TableRow>
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Наименование ОН</TableCell>
//             <TableCell align="right">Адрес</TableCell>
//             <TableCell align="right">Вид объекта</TableCell>
//             <TableCell align="right">Вид собственности</TableCell>
//             <TableCell align="right">Обременение</TableCell>
//             <TableCell align="right">ОКН</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {cardhouse.list_OC.map(object => (
            
//             <TableRow component={Link} to={`/cardhousedetail/${object.code}`}
//               key={object.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
              
//               <TableCell component="th" scope="row">
//                 {object.name}
//               </TableCell>
//               <TableCell align="right">{object.full_adress}</TableCell>
//               <TableCell align="right">{object.type_object}</TableCell>
//               <TableCell align="right">{object.owner}</TableCell>
//               <TableCell align="right">{object.encumbrance}</TableCell>
//               <TableCell align="right">{object.okn}</TableCell>
              
//             </TableRow>
            
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
  );
}

export default CardhousePage