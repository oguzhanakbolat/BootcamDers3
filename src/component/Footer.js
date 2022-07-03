import React from 'react'
import Logout from './Logout';
import { useSetting } from '../context/SettingContext';

const Footer = () => {

  const { template } = useSetting();

  return (
    <div className='head' style={{
      background: template.bg,
      color: template.color,
      fontSize: template.size
  }}>
        <Logout />
    </div>
  )
}

export default Footer