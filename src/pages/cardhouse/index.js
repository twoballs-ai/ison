import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


function CardhousePage(props) {
  const {id} = useParams();
  const baseURL = `http://10.0.0.13:5000/api/v1.0/cardhouse/${id}/`;
  const [cardhouse, setCardhouse] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      console.log(res.data.data)
      setCardhouse(res.data.data);
    });
  }, [id]);

  if (!cardhouse) return null;


  function handleRowClick(podvedcode) {
    navigate(`/cardhousedetail/${podvedcode}`);
    console.log('sdvs')
  }
  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <>
     <div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">
        <h3 className="mx-2 text-center">{cardhouse.podved_info.name}</h3>
        <div className="container-fluid rounded px-0 mx-0 bg-white border border-grey">
            <table className="table">

                <tbody>
                <tr>
                    <td className="text-end">Фотография учреждения:</td>
                    <td><img src="../../static/1cintegr/img/1с/no_image.png" className="img-thumbnail" alt="..." width="150"
                             height="150"/></td>
                    <td className="text-end">Официальное наименование:</td>
                    <td>{cardhouse.podved_info.fullname}</td>

                </tr>
                <tr>
                    <td className="text-end">Категория учреждения:</td>
                    <td>{cardhouse.podved_info.category}</td>
                    <td className="text-end">Департамент:</td>
                    <td>{cardhouse.podved_info.department}</td>
                </tr>
                <tr>
                    <td className="text-end">ИНН:</td>
                    <td>{cardhouse.podved_info.INN}</td>
                    <td className="text-end">КПП:</td>
                    <td>{cardhouse.podved_info.KPP}</td>
                </tr>
                <tr>
                    <td className="text-end">ОГРН:</td>
                    <td>{cardhouse.podved_info.OGRN}</td>
                    <td className="text-end">КОПУК:</td>
                    <td>{cardhouse.podved_info.KOPUK}</td>
                </tr>
                
                <tr>
                    <td className="text-end">Юридический адрес:</td>
                    <td>{cardhouse.podved_info.legal_address}</td>
                    <td className="text-end">Фактический адрес:</td>
                    <td>{cardhouse.podved_info.fact_address}</td>
                </tr>
                <tr>
                    <td className="text-end">Адрес сайта:</td>
                    <td><a href="{{ url_for('redirect_to', link=data.podved_info.sait) }}" className="link-primary"
                           target="_blank">{cardhouse.podved_info.fullname}</a></td>
                    <td className="text-end">Номер телефона:</td>
                    <td>{cardhouse.podved_info.phone_number}</td>
                </tr>
                <tr>
                    <td className="text-end">Электронная почта:</td>
                    <td>{cardhouse.podved_info.email}</td>
                    <td className="text-end">ФИО Руководителя:</td>
                    <td>{cardhouse.podved_info.boss}</td>
                </tr>
                <tr>
                    <td className="text-end">Ответственное лицо:</td>
                    <td>{cardhouse.podved_info.contact_name}</td>
                    <td className="text-end">Телефон ответственного лица:</td>
                    <td>{cardhouse.podved_info.contact_phone}</td>
                </tr>
                <tr>
                    <td className="text-end">Руководитель ответственного лица:</td>
                    <td>{cardhouse.podved_info.supervisor_name}</td>
                    <td className="text-end">Телефон руководителя ответственного лица:</td>
                    <td>{cardhouse.podved_info.supervisor_phone}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <h3 className="mx-2 text-center">Объекты недвижимости</h3>
        <div className="container-fluid rounded px-0 mx-0 bg-white border border-grey">
            <table className="table table-hover table-bordered text-center">
                <thead>
                <tr className="align-middle" style={{fontSize: "0.8rem"}}>
                    <th scope="col">Вид объекта</th>
                    <th scope="col">Наименование объекта недвижимого имущества</th>
                    <th scope="col">Кадастровый номер</th>
                    <th scope="col">Адрес местонахождения объекта недвижимого имущества</th>
                    <th scope="col">Протяженность (м), глубина (м),
                        глубина залегания (м), площадь (кв. м),
                        объем (куб. м),
                        высота (м),
                        площадь застройки (кв. м) объекта недвижимого имущества
                    </th>
                    <th scope="col">Номер записи государственной регистрации права собственности Российской Федерации
                    </th>
                    <th scope="col">Дата государственной регистрации права собственности Российской Федерации</th>
                    <th scope="col">Номер записи государственной регистрации вещного права</th>
                    <th scope="col">Дата государственной регистрации вещного права</th>
                    <th scope="col">Текущее положение учета объекта недвижимого имущества</th>

                </tr>
                </thead>
                <tbody>
                {cardhouse.list_OC.map(object => (
                        <tr onClick={() => handleRowClick(object.code)} style={{fontSize: "0.8rem"}}>
                            <td>{object.type_object}</td>
                            <td className="col-3"><img src=""
                                                   width="40"
                                                   height="40" className="rounded-circle" /><span
                                    className="ms-1"></span>{object.name}</td>
                            <td></td>
                            <td></td>
                           
                            <td className="col-3"></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                           
                        </tr>
                   ))}
                </tbody>
            </table>
  
        </div>

        </div>
    </>
  );
}

export default CardhousePage