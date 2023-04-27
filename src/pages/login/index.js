import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './login.module.css';
import HomePage from '../home/index'
import Layout from '../../components/layouts'
import PropTypes from 'prop-types';

const loginURL = "http://10.0.0.13:5000/api/v1.0/login/";
const accessUrl = "http://10.0.0.13:5000/api/v1.0/access/";
const validUrl = "http://10.0.0.13:5000/api/v1.0/valid/";

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}
function LoginPage({ setToken }) {
  // const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    // Prevent the default submit and page reload
    e.preventDefault()

    // Handle validations
    axios
      .post(loginURL, { login, password })
      .then(response => {
        console.log(response.data.RefreshToken)
        // Handle response
        const SetCookie = () => {
          Cookies.set("refresh", response.data.RefreshToken, {
            expires: 7, sameSite: 'strict',
          });
        };
        SetCookie();
        getAccess()
      });
  };

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function getAccess() {
    const refresh = Cookies.get('refresh')
    axios
      .post(accessUrl, { RefreshToken: refresh })
      .then(response => {
        console.log(response.data.AccessToken)

        const SetAccessCookie = () => {
          Cookies.set("access", response.data.AccessToken, {
            expires: 7, sameSite: 'strict',
          });
        };
        SetAccessCookie();
        getValid()
      });

  }

  function getValid() {
    const access = Cookies.get('access')
    axios
      .post(validUrl, { AccessToken: access })
      .then(response => {
        console.log(response.data)
        const SetUsernameCookie = () => {
          Cookies.set("username", response.data.FullUserName, {
            expires: 7, sameSite: 'strict',
          });
        };
        SetUsernameCookie();

        setToken({'token':'true'})
        navigate(`/1/`);

      });

  }

  return (
    <>
      <div className={`${styles.wrapper} ps-5`}>


        <div className={`${styles.rows1} mt-4`}>

          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/gerb.png")} className="gerb ms-1 mt-1 rounded-2" width="70"
            height="60" /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/13.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/26.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/32.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/45.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/51.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/64.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows2} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/1.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/14.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/27.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/33.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/46.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/52.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/65.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows3} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/2.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/15.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/28.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/34.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/47.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/53.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/66.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows4} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/3.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/16.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/59.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/35.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/29.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/54.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/67.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows5} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/4.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/17.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/53.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/36.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.d_step2} mt-3 mb-5`}>

            <form action="" id="loginform" method="post" onSubmit={handleSubmit}>

              <div className="row m-0">


                <div id={styles.step2_block_left} className="col-8 px-0 rounded-2 shadow-lg">

                  <div className="col-12 border-bottom">
                    <input className="input form-control col-12 border-0 " id="login" type="username" name="username" value={login} placeholder="Логин" autofocus="" onChange={e => setLogin(e.target.value)} />

                  </div>

                  <div className="col-12">
                    <input className="input form-control col-12 border-0" type="password" id="password" name="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />

                  </div>

                </div>
                <div id={styles.step2_block_right} className="col-4 text-center d-flex">
                  <button className="align-self-center button btn btn-secondary btn-lg rounded-pill col-12" type="submit" value="Login">Вход</button>
                </div>

              </div>
            </form>
          </div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/55.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/68.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows6} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/5.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/18.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/4.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/37.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5`}></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/56.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/69.png")} className={`${styles.lm} rounded-2`} /></div>

        </div>
        <div className={`${styles.rows7} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/6.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/19.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/10.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/38.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5`}></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/57.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/70.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows8} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/7.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/20.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/50.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/39.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5`}></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/58.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/71.png")} className={`${styles.lm} rounded-2`} /></div>

        </div>
        <div className={`${styles.rows9} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/8.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/21.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/46.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/40.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5`}></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/59.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/72.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows10} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/9.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/22.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/33.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/41.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/15.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/60.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/73.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows11} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/10.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/23.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/29.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/42.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/48.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/61.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/74.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows12} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/11.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/24.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/30.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/43.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/49.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/62.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/75.png")} className={`${styles.lm} rounded-2`} /></div>
        </div>
        <div className={`${styles.rows13} mt-4`}>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/12.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/25.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/31.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/44.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/50.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/63.png")} className={`${styles.lm} rounded-2`} /></div>
          <div className={`${styles.col} mt-3 mb-5 shadow rounded-2`}><img src={require("./image/auipik_1.png")} className="gerb ms-1 mt-3" width="65"
            height="40" /></div>
        </div>


      </div>
    </>
  )
}


export default LoginPage