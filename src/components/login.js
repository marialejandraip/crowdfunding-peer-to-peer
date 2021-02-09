import React, { useState} from 'react'
import {signIn }from '../firebaseFunctions';
import { Button } from 'react-bootstrap';
import top from '../assets/images/Group 34.svg'
import bottom from '../assets/images/XMLID 9.svg'
import arrow from '../assets/images/Arrow.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (e) => {
    e.preventDefault();

    return signIn(email, password)
      .then((res) => {
        localStorage.setItem('user', email);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className = "login"> 
      <img className = "image-top" src = {top}/>
      <div className = "container">
        <h1 className = "tittle">Ingresar</h1>
        <form onSubmit={(e)=>login(e)} className = "form">
          <label>
            Email:
            <input type='text'
            onChange={(e) => setEmail(e.target.value)} /> 
          </label>
          <label>
            Contraseña:
            <input type='password' 
            onChange={(e) => setPassword(e.target.value)}/> 
          </label>
          <Button className = "col-6 button">Entrar</Button>
        </form>
      </div>
      <img className = "image-bottom" src = {bottom}/>
      <Button className = "arrow"></Button>
      
      
    </div>
  )
}
