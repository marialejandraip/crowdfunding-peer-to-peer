import React from 'react';
import { Link } from 'react-router-dom';
import helper from '../assets/images/helper.png';

import '../App.css';

export default function Waiting({userEmailVerified}) {

  return (
    <>
    <div className="waiting">
      <h1>¡Te hemos enviado un correo!</h1>
      
      Confirma el link que hemos enviado a tu correo <strong>{userEmailVerified}</strong> después puedes volver Ingresar
    </div>
    <Link to={'/dashboard'}><button className="waiting-btn" onClick={()=>window.location.reload()} >Ingresa</button></Link>
    <img className="helper-img" src={helper} alt=""/>
    </>
  )
}
