import React from "react";
import axios from 'axios';
import Cookies from 'js-cookie';

function DepartmentsList(props) {
    const baseURL = `http://10.0.0.13:5000/redirec`;
    const [cardhouse, setCardhouse] = React.useState(null);
  
    React.useEffect(() => {
      const accesscookie = Cookies.get('access')
      axios.get(baseURL, { headers: { access: accesscookie } }).then((res) => {
        console.log(res.data.data)
        console.log('привет))')
        // setCardhouse(res.data.data);
      });
    }, []);
  
    if (!cardhouse) return null;
    return (
<>


       <p>sdvd</p>


</>
       

    );
  }

  export default DepartmentsList