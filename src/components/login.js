import React, { useState} from 'react'
import {signIn }from '../firebaseFunctions';
import { Button, Row, Col, Container } from 'react-bootstrap';
import top from '../assets/images/Group 34.svg'
import bottom from '../assets/images/XMLID 9.svg'
import lock from '../assets/images/icons/lock.svg';
import mail from '../assets/images/icons/mail.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className = "login"> 
      <img className = "img-top" src = {top}/>
      {/*<container>
        <Row className = "rows">
          <col className = "columns">
          </col>
        </Row>
        <Row className = "rows">
          <col className = "columns"></col>
        </Row>
      </container>*/}
      <h1 className = "tittle">Ingresar</h1>
      <div className = "container">
        <form className = "form">

          THIS IS A deploy TEST!
          <label>
          <img src = {mail} alt=""/>
            Email:
            <input className = "input" type='text'
            onChange={(e) => setEmail(e.target.value)} /> 
          </label>
          <label>
          <img src = {lock} alt=""/>
            Contraseña:
            <input type='password' 
            onChange={(e) => setPassword(e.target.value)}/> 
          </label>
          <Button 
          className = "button col-7" 
          onClick={(e)=>login(e)}>Entrar</Button>
        </form>
      </div>
      <img className = "image-bottom" src = {bottom}/>
      <Button className = "arrow"></Button>
      
      
    </div>
  )
}
