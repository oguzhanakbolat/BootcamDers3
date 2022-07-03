import React from 'react';
import { useSetting } from '../context/SettingContext';

const ChangeTemplate = () => {
    const { changeTemplate } = useSetting();

  return (
    <div className='changeTemplate'>
        <b className='yellow' onClick={() => changeTemplate('yellow')}/>
        <b className='red' onClick={() => changeTemplate('red')}/>
        <b className='black' onClick={() => changeTemplate('black')}/>
        <b className='blue' onClick={() => changeTemplate('blue')}/>
    </div>
  )
}

export default ChangeTemplate