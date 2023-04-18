// import React, {  useState } from 'react';

// import axios from 'axios';
// import Cookies from 'js-cookie';

// const loginURL = "http://10.0.0.13:5000/api/v1.0/login/";
// const accessUrl = "http://10.0.0.13:5000/api/v1.0/access/";
// const validUrl = "http://10.0.0.13:5000/api/v1.0/valid/";

// function LoginPage() {
//   const handleSubmit = e => {
//     // Prevent the default submit and page reload
//     e.preventDefault()

//     // Handle validations
//     axios
//       .post(loginURL, { login, password })
//       .then(response => {
//         console.log(response.data.RefreshToken)
//         // Handle response
//         const SetCookie = () => {
//           Cookies.set("refresh", response.data.RefreshToken, {
//             expires: 7, sameSite: 'strict' ,
//           });
//         };
//         SetCookie();
//         getAccess()
//       });
//   };

//   const [login, setLogin] = useState('')
//   const [password, setPassword] = useState('')

//   function getAccess() {
//     const refresh = Cookies.get('refresh') 
//     axios
//       .post(accessUrl, {RefreshToken: refresh})
//       .then(response => {
//         console.log(response.data.AccessToken)
  
//         const SetAccessCookie = () => {
//           Cookies.set("access", response.data.AccessToken, {
//             expires: 7, sameSite: 'strict' ,
//           });
//         };
//         SetAccessCookie();
//         getValid()
//       });
      
//   }

//   function getValid()  {
//     const access = Cookies.get('access') 
//     axios
//       .post(validUrl, {AccessToken: access})
//       .then(response => {
//         console.log(response.data)

//       });
      
//   }

//   return (
//     <div>
//       <form action="" id="loginform" method="post" onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <p className="item">
//           <label htmlFor="login"> login </label>
//           <input
//             type="text"
//             name="login"
//             id="login"
//             value={login}
//             onChange={e => setLogin(e.target.value)}
//           />
//         </p>
//         <p className="item">
//           <label htmlFor="password"> Password </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//           />
//         </p>
//         <p className="item">
//           <input type="submit" value="Login" />
//         </p>
//       </form>
//     </div>
//   )
// }


// export default LoginPage