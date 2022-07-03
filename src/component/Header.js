import React  from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout';
import { useSetting } from '../context/SettingContext';
import ChangeTemplate from './ChangeTemplate';


const Header = () => {
    const { template } = useSetting();
  return (
    <div className='head'
        style={{
            background: template.bg,
            color: template.color,
            fontSize: template.size
        }}>
        <ul>
            <li>
                <Link to="/" style={{ color: template.color }}>Home</Link>
            </li>
            <li>
                <Link to="/ahmet" style={{ color: template.color }}>About Us</Link>
            </li>
            <li>
                <Link to="/list" style={{ color: template.color }}>List</Link>
            </li>
        </ul>
        <ChangeTemplate />
        <Logout />
    </div>
  )
}

export default Header