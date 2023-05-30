import React from "react";
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ModalAdd from "../../components/modals/Modal";
import Pagination from 'react-bootstrap/Pagination';
import CustomersPagination from "./customersPagination";

// import Form from "../../components/addnewcustomer/forms/form";
// import Forms from "../../components/addnewcustomer/forms/forms";
// import ModalManager from "../../components/modals/modalsManager";

const baseURL = "http://10.0.0.13:5000/api/v1.0/customers/";




function ObjectsPage(props) {
const {page} =useParams()
  const [objects, setObjects] = React.useState([]);
  const [pageInfo, setPageInfo] = React.useState([]);
  // const [open, setOpen] = React.useState(false);
  // const [currentPage, setCurrentPage] = useState(1)
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get((baseURL + page+'/'), { headers: { access: accesscookie } }).then((res) => {
      // console.log(res.data)
      setObjects(res.data.data);
      setPageInfo(res.data.page_info)
    });
  }, [page]);
  // let activePage = pageInfo['PageNumber'];
  
  const totalPage = pageInfo['NumberOfPages']
  function handleRowClick(cardhousecode) {
    navigate(`/cardhousedetail/${cardhousecode}`);
    console.log('sdvs')
  }

  // const handleChangePage = React.useCallback((activePage)=> {
  //   setCurrentPage(activePage)
  // }, [])

  if (!objects) return null;

  

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <>
    <ModalAdd />
     <div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">

      <div className="d-grid gap-2  justify-content-md-end bg-transparent">
    
      </div>
     

        <table className="table table-hover table-bordered text-center">
          <thead>
            <tr className="align-middle" style={{ fontSize: "0.8rem" }}>
              <th scope="col">Вид объекта</th>
              <th scope="col">Наименование объекта недвижимого имущества</th>
              <th scope="col">Кадастровый номер</th>
              <th scope="col">Адрес местонахождения объекта недвижимого имущества</th>

              <th scope="col">Протяженность (м), глубина (м),
                глубина залегания (м), площадь (кв. м),
                объем (куб. м),
                высота (м),
                площадь застройки (кв. м) объекта недвижимого имущества</th>
              <th scope="col">Номер записи государственной регистрации права собственности Российской Федерации</th>
              <th scope="col">Дата государственной регистрации права собственности Российской Федерации</th>
              <th scope="col">Номер записи государственной регистрации вещного права</th>
              <th scope="col">Дата государственной регистрации вещного права</th>
              <th scope="col">Текущее положение учета объекта недвижимого имущества</th>

            </tr>
          </thead>
          <tbody>

            {objects.map(object => (


              <tr onClick={() => handleRowClick(object.code)} style={{ fontSize: "0.8rem" }}>
                <td>{object.type_object}</td>
                <td className="col-3"><img src="" width="40"
                  height="40" className="rounded-circle" /><span
                    className="ms-1"></span>{object.name}</td>
                <td></td>
                <td>{object.full_adress}</td>

                <td className="col-3"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
        <CustomersPagination 
        currentPage = {page}
        totalPage = {totalPage}
        />
{/* {totalPage>1 && ( */}
  {/* <CustomersPagination 
setCurrentPage={setCurrentPage}
totalPage = {totalPage}
currentPage ={currentPage}
pageNumber={page}

/> */}
{/* <Pagination pages = {howManyPages} setCurrentPage={setCurrentPage}/> */}
{/* )} */}

        </div>
    </>
  );
}

export default ObjectsPage