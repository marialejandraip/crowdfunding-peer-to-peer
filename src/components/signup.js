import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createUserEmailAndPassword } from '../firebaseFunctions';
import { Button } from 'react-bootstrap';
import firebase from 'firebase/app';

import top from '../assets/images/mascaras/Group 34.svg'
import topDesktop from '../assets/images/mascaras/Group 35.svg';
import bottom from '../assets/images/mascaras/XMLID 9.svg';
import bottomDesktop from '../assets/images/mascaras/XMLID 10.svg';

import Child from '../assets/images/Chil.png';
import lock from '../assets/images/icons/lock.svg';
import mail from '../assets/images/icons/mail.svg';
import user from '../assets/images/icons/user.svg';

import Waiting from '../Views/Waiting';
import '../components.css';

export default function Signup({pending, setPending}) {
  const [em, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const handleSubmit = async () => {
    console.log('entra aqui')
    await createUserEmailAndPassword(em, password);
    //setPending(true)
  }
  return (
    <>
    {!pending ?
    <div className = "signup"> 

    <img className = "img-top" src = {top} alt="" />
    
    <img className = "top-desktop" src = {topDesktop} alt="" />
    <img className = "child" src = {Child} alt="" />

    <div>
      <h1 className = "tittle-signup">Crear Cuenta</h1>
      <div className = "container-signup"> 
        <form >
          <div className="form-group">
          <label>
            <img src = {user} alt="" className="mail" />
            Nombre:
            <input type='text' 
            onChange={(e) => setName(e.target.value)}/> 
          </label>
          <label>
            <img src = {mail} alt="" className="mail" />
            Email:
            <input type='text'
            onChange={(e) => setEmail(e.target.value)} /> 
          </label>
          <label>
            <img src = {lock} alt="" className="mail" />
            Contraseña:
            <input type='password' 
            onChange={(e) => setPassword(e.target.value)}/> 
          </label>
          <Button className = "col-6 button"
            onClick={() => handleSubmit()}
            >Registrar</Button>
          </div>
        </form>
      </div>
    </div>
    <img className = "image-bottom" src = {bottom} alt="" />
    <Link to="/"><button className = "arrow"/></Link>

    <img className = "bottom-desktop" src = {bottomDesktop} alt="" />
  </div> :
  <Waiting />
    }
    </>
    
  )
}