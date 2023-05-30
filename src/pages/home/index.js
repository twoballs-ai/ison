import React from "react";
import { Navigate } from "react-router-dom";
// import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { NavLink ,Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Pagination from "../../components/adittional/pagination";
import { useEffect, useState } from "react";


function HomePage(props) {
  const {page} = useParams();
  const [podveds, setPodveds] = React.useState([]);
  // const [authenticated, setauthenticated] = useState(null);
  const baseURL = `http://10.0.0.13:5000/api/v1.0/podved/${page}/`;
  const navigate = useNavigate();
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      console.log(res.data.data)
      setPodveds(res.data.data);
//       const loggedInUser = localStorage.getItem("authenticated");
// if (loggedInUser) {
// setauthenticated(loggedInUser);
// }
    });
  }, []);

  if (!podveds) return null;

  function handleRowClick(podvedcode) {
    navigate(`/cardhouse/${podvedcode}`);
    console.log('sdvs')
    
  }
  // if (!authenticated) {
  //   // Redirect
  //   console.log('1111')
  //   return <Navigate replace to="/login" />;
  //   } else {
  return (
   <>


<div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">

<ul className="list-group list-group-flush box overflow-auto my-1">

   
    <table className="table table-hover">

        <thead>
        <tr>
            <th scope="col-12">Наименование подведомственной организации</th>
        </tr>
        </thead>
        <tbody>
        {podveds.map(podved => (
             <tr key={podved.code} onClick={() => handleRowClick(podved.code)} >
               <td className="noselect">{podved.name}</td>
          <td className="text-secondary">&gt;&gt;&gt;</td>
          </tr>

          ))}
        </tbody>
    </table>

</ul>
<Pagination />
</div>
</>
  )
        // };
  };

  export default HomePage