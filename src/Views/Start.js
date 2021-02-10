import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Start() {
  let history = useHistory();

  return (
    <div>
      <button className='Home-btn' onClick= {() => { history.push('/login') }}>Ingreso</button>
      <button className='Home-btn' onClick= {() => { history.push('/signup') }}>Registro</button>
    </div>
  )
}
