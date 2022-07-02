import React from 'react'
import Login from './component/Login';
import './css/home.css';

const LoginPage = (props) => {
  return (
    <div className='Home'>
        <Login login={props.login}  />
    </div>
  )
}

export default LoginPage