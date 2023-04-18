import React from "react";

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NavLink ,Link } from "react-router-dom";

const baseURL = "http://10.0.0.13:5000/api/v1.0/podved/";

function DepartmentPage(props) {
  const [podveds, setPodveds] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      console.log(res.data.data)
      setPodveds(res.data.data);
    });
  }, []);

  if (!podveds) return null;

  function handleRowClick(podvedcode) {
    navigate(`/cardhouse/${podvedcode}`);
    console.log('sdvs')
  }

  return (
   <>




<ul className="list-group list-group-flush box overflow-auto my-1">

   
    <table className="table table-hover">

        <thead>
        <tr>
            <th scope="col-12">Наименование подведомственной организации</th>
        </tr>
        </thead>
        <tbody>
        {podveds.map(podved => (
          // <Link to={`/cardhouse/${podved.code}`}  >
             <tr key={podved.code} onClick={() => handleRowClick(podved.code)} >
               <td className="noselect">{podved.name}</td>
          <td className="text-secondary">&gt;&gt;&gt;</td>
          </tr>
          // </Link>
         
       
            // <TableRow
            //   key={podved.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            // >
            //   <TableCell component="th" scope="row">
            //     {podved.name}
            //   </TableCell>
            // </TableRow>
          ))}
        </tbody>
    </table>

</ul>

</>
  );
  }

  export default DepartmentPage