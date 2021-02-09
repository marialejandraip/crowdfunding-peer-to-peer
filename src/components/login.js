import React, { useState} from 'react'
import {signIn }from '../firebaseFunctions';
import { Button } from 'react-bootstrap';
import top from '../assets/images/Group 34.svg';
import bottom from '../assets/images/XMLID 9.svg';
import lock from '../assets/images/icons/lock.svg';
import mail from '../assets/images/icons/mail.svg';
import '../components.css';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn(email, password);
      localStorage.setItem('user', email);
      console.log(res);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div className = "signup"> 
      <img src = {top} alt="" className="img-top" />
      <div className = "container">
        <h1>Ingresar</h1>
        <form  
        className = "form"
        >
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
          <Button 
          className = "col-6 button" 
          onClick={(e)=>login(e)} 
          >Entrar</Button>
        </form>
      </div>
      <img src = {bottom} alt="" />
    </div>
  )
}
