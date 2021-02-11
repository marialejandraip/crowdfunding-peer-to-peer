import React from 'react';
//import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Waiting() {
  //let history = useHistory();
  return (
    <div>
      <h1>¡Te hemos enviado un correo!</h1>
      Confirma el link que hemos enviado a tu correo después puedes volver Ingresar
      <Link to={'/dashboard'}><button >Ingresa</button></Link>
    </div>
  )
}
