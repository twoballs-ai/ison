import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

// import Form from "../../components/addnewcustomer/forms/form";
// import Forms from "../../components/addnewcustomer/forms/forms";

const baseURL = "http://10.0.0.13:5000/api/v1.0/customers/1/";




function ObjectsPage(props) {
  // stepper start

  // stepper end

  const [objects, setObjects] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      // console.log(res.data.data)
      setObjects(res.data.data);
    });
  }, []);

  if (!objects) return null;
  function handleRowClick(cardhousecode) {
    navigate(`/cardhousedetail/${cardhousecode}`);
    console.log('sdvs')
  }
  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <>


      <div class="d-grid gap-2  justify-content-md-end bg-transparent">
        <button type="button" id="modalactivation" class="btn btn-primary m-2">Новое модальное окно
        </button>

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



 
    </>
  );
}

export default ObjectsPage