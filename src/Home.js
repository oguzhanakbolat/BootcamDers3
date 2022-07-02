import React from 'react'
import './css/home.css';

const Home = (props) => {
  return (
    <div className='Home'>
        <div>Hoş Geldin {props.user}</div>
    </div>
  )
}

export default Home