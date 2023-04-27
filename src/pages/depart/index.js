import React from "react";

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { NavLink ,Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


function DepartmentPage(props) {
  const [departments, setDepartments] = React.useState([]);
  const {page} = useParams();
  const navigate = useNavigate();
  const {state} = useLocation();
  const {depart} = state;
  const baseURL = `http://10.0.0.13:5000/api/v1.0/department/${page}/`;
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie }, params: {
      department: depart
    } },
      
    ).then((res) => {
      console.log(res.data.data)
      setDepartments(res.data.data);
    });
  }, [depart]);

  if (!departments) return null;

  // function handleRowClick(departcode) {
  //   navigate(`/department/${departcode}`);
  //   console.log('sdvs')
  // }

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
        {departments.map(department => (
             <tr key={department.code} 
            //  onClick={() => handleRowClick(department.code)} 
             >
               <td className="noselect">{department.name}</td>
          <td className="text-secondary">&gt;&gt;&gt;</td>
          </tr>

          ))}
        </tbody>
    </table>

</ul>

</>
  );
  }

  export default DepartmentPage