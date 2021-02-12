import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Waiting() {

  return (
    <div>
      <h1>¡Te hemos enviado un correo!</h1>
      Confirma el link que hemos enviado a tu correo después puedes volver Ingresar
      <Link to={'/dashboard'}><button onClick={()=>window.location.reload()} >Ingresa</button></Link>
    </div>
  )
}
