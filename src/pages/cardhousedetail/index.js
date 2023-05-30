import React from "react";
import PropTypes from 'prop-types';

import axios from 'axios';
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import FirstTab from "./Tabs/firstTab";
import SecondTab from "./Tabs/secondTab";
import ThreeTab from "./Tabs/threeTab";
import FourTab from "./Tabs/fourTab";
import FiveTab from "./Tabs/fiveTab";
import SixTab from "./Tabs/sixtab";
import SevenTab from "./Tabs/sevenTab";
import EightTab from "./Tabs/eightTab";
import NineTab from "./Tabs/nineTab";


function CardhouseDetailPage(props) {
  const { id } = useParams();
  const baseURL = `http://10.0.0.13:5000/api/v1.0/cardhousedetail/${id}/`;
  const [cardhousedetails, setCardhouseDetails] = React.useState(null);

  React.useEffect(() => {
    const accesscookie = Cookies.get('access')
    axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
      // console.log(res.data)
      setCardhouseDetails(res.data);
    });
  }, [id]);

  if (!cardhousedetails) return null;

  // Avoid a layout jump when reaching the last page with empty rows.

  return (
    <>
<div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">
        <ul className="list-group list-group-flush box overflow-auto my-1">
          {/* <li className="list-group-item"> */}
            {/* <h1 className="display-6 text-center"></h1> */}
            {/* <a className="btn btn-light col-2 ml-5 shadow" href="https://yandex.ru/maps/?z=16"
              role="button" target="_blank"><i className="bi bi-geo-alt"></i>Найти на яндекс картах</a> */}
          {/* </li> */}


          <li className="list-group-item border-0 ">

            <div className="row m-3 shadow border border-top-0 border-start-0 border-end-0 p-3 mb-3 bg-light rounded-4">
              <div className="col-5">

                <div className="container_button">

                  {/* <img src="{{ url_for('site.static', filename = data.foto_main.fotoAdr ) }}" width="300"
                    height="300" className="border border-top-0 border-start-0 border-end-0 bg-body rounded-4" /> */}

                </div>
              </div>
              <div className="col-5"><h5>Описание:</h5> </div>

            </div>

          </li>
          <Tabs
      defaultActiveKey="nav-1-tab"
    >
      <Tab eventKey="nav-1-tab" title="Основные сведения об
                объекте недвижимого имущества">
      <FirstTab />
      </Tab>
      <Tab eventKey="nav-2-tab" title="Сведения о регистрации
                объекта недвижимого имущества">
     <SecondTab />
      </Tab>
      <Tab eventKey="nav-3-tab" title="Сведения об
                ограничениях (обременениях) на объект недвижимого имущества">
      <ThreeTab />
      </Tab>
      <Tab eventKey="nav-4-tab" title="Сведения о жилых
                помещениях">
       <FourTab />
      </Tab>
      <Tab eventKey="nav-5-tab" title="Прочие технические 
                характеристики объекта недвижимого имущества">
       <FiveTab />
       </Tab>
       <Tab eventKey="nav-6-tab" title="Финаносвые
                показатели 
                объекта недвижимого имущества">
       <SixTab />
       </Tab>
       <Tab eventKey="nav-7-tab" title="Выбытие имущетсва 
                объекта недвижимого  имущества">
       <SevenTab />
       </Tab>
       <Tab eventKey="nav-8-tab" title="Документы">
       <EightTab />
       </Tab>
       <Tab eventKey="nav-9-tab" title="Архив">
       <NineTab />
       </Tab>
    </Tabs>
      


        </ul>

        <h1 className="mt-12 mb-8 px-6 text-center text-lg md:text-2xl font-semibold">
          Галерея
        </h1>

        <div className="flex flex-wrap gap-5 justify-center max-w-5xl mx-auto px-6">

        </div>

        </div>
     
    </>
  );
}

export default CardhouseDetailPage