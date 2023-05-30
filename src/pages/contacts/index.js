import React from "react";


function ContactsPage(props) {
    return (
<>
<div id="container" className="container-fluid rounded px-0 bg-white border border-grey ">
        <ul className="list-group list-group-flush box overflow-auto my-1">
            <li className="list-group-item">Контакты</li>
            <h4 className="ms-3 mt-2">Федеральное государственное бюджетное учреждение культуры «Агентство по управлению и
                использованию памятников истории и культуры»</h4>
            <p className="ms-3">125375, г. Москва, Дегтярный пер., д.8, стр.3</p>
            <p className="ms-3">Для приема корреспонденции +7 (499) 705 20 00</p>
            <p className="ms-3">info@auipik.ru</p>
            <p className="ms-3">По вопросам СМИ +7 (499) 705 20 00 press@auipik.ru</p>
        </ul>
        </div>
</>
       

    );
  }

  export default ContactsPage