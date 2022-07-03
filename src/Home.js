import React from 'react'
import Name from './component/Name';
import { useAuth } from './context/AuthContext';
import './css/home.css';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className='Home'>
        <div>Hoş Geldin <Name user={user} /></div>
    </div>
  )
}

export default Home