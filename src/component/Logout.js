import React  from 'react'
import Name from './Name';
import {  useAuth } from '../context/AuthContext';


const Logout = () => {
    const { logout, user } = useAuth();
  return (
    <span>
        <Name user={user} />
        <button className='cikis' onClick={logout}>Çıkış</button>
    </span>
  )
}

export default Logout