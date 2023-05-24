import axios from 'axios';
import Cookies from 'js-cookie';
import React from "react";

const addNewObjectURL = "http://10.0.0.13:5000/api/v1.0/customers/post/";
function ModalsManager({onePageInfo}) {
    
    const accesscookie = Cookies.get('access')
    const userData = {...onePageInfo}
      console.log(userData)

    console.log(accesscookie)
   axios
      .post(addNewObjectURL, userData,{ headers: { access: accesscookie } })
      .then(response => {
        console.log(response)

        // Handle response
 
      });

}
export default ModalsManager