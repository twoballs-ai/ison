import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

function DepartmentsList(props) {
  const baseURL = `http://10.0.0.13:5000/api/v1.0/departent_list/`;
  const [departlists, setDepartList] = React.useState(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      console.log(res.data.data)
      console.log('привет))')
      setDepartList(res.data.data);
    });
  }, []);

  if (!departlists) return null;

  const handleRowClick = (name) => {
    console.log(name)
    navigate('/department/1/', { state: { depart: name } })
    console.log('sdvs')
  }
  return (
    <>
      <li className="list-group-item border-0 ">
        <Dropdown as={NavItem} className="btn border-0  ">
          <Dropdown.Toggle className="dropdown-toggle border-0 btn-outline-light col-12 text-start shadow-none fw-semibold text-secondary " as={NavLink} > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            className="bi bi-receipt-cutoff" viewBox="0 0 16 16">
            <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zM11.5 4a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
            <path d="M2.354.646a.5.5 0 0 0-.801.13l-.5 1A.5.5 0 0 0 1 2v13H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H15V2a.5.5 0 0 0-.053-.224l-.5-1a.5.5 0 0 0-.8-.13L13 1.293l-.646-.647a.5.5 0 0 0-.708 0L11 1.293l-.646-.647a.5.5 0 0 0-.708 0L9 1.293 8.354.646a.5.5 0 0 0-.708 0L7 1.293 6.354.646a.5.5 0 0 0-.708 0L5 1.293 4.354.646a.5.5 0 0 0-.708 0L3 1.293 2.354.646zm-.217 1.198.51.51a.5.5 0 0 0 .707 0L4 1.707l.646.647a.5.5 0 0 0 .708 0L6 1.707l.646.647a.5.5 0 0 0 .708 0L8 1.707l.646.647a.5.5 0 0 0 .708 0L10 1.707l.646.647a.5.5 0 0 0 .708 0L12 1.707l.646.647a.5.5 0 0 0 .708 0l.509-.51.137.274V15H2V2.118l.137-.274z" />
          </svg>
            Департамент</Dropdown.Toggle>
          <Dropdown.Menu  >
            {departlists.map((departlist) => {
              return (
                <Dropdown.Item key={departlist.id} variant="light" onClick={() => { handleRowClick(departlist.id) }}>{departlist.value}</Dropdown.Item>
              )
            })}
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </>
  );
}

export default DepartmentsList