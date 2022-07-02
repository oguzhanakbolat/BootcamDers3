import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className='head'>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/ahmet">About Us</Link>
            </li>
            <li>
                <Link to="/list">List</Link>
            </li>
        </ul>
        <span>
            {props.user}
            <button className='cikis' onClick={props.logout}>Çıkış</button>
        </span>
    </div>
  )
}

export default Header