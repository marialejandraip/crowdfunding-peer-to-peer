import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {signIn }from '../firebaseFunctions';
import { Button, Row, Col, Container } from 'react-bootstrap';

import top from '../assets/images/mascaras/Group 34.svg';
import topDesktop from '../assets/images/mascaras/group36.svg';
import bottom from '../assets/images/mascaras/XMLID 9.svg';
import bottomDesktop from '../assets/images/mascaras/XMLID 11.svg';

import Grandma from '../assets/images/Abuela.png';
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
      <img className = "img-top" src = {top} alt=""/>
      <img className = "top-desktopL" src = {topDesktop} alt=""/>
      <img className = "grandma" src = {Grandma} alt=""/>
      {/*<container>
        <Row className = "rows">
          <col-sm className = "columns">
          </col>
        </Row>
        <Row className = "rows">
          <col className = "columns"></col>
        </Row>
      </container>*/}
      <div>
        <h1 className = "tittle">Ingresar</h1>
        <div className = "container">
          <form >
          <div className="form-group">
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
            className = "col-7 button"
            onClick={(e)=>login(e)} 
            >Entrar</Button>
            <span>¿Olvidaste tu contraseña?</span>
          </div>
          </form>
        </div>
      </div>
      <img className = "image-bottom" src = {bottom} alt=""/>
      <Link to="/"><button className = "arrow"/></Link>

      <img className = "bottom-desktopL" src = {bottomDesktop} alt=""/>
    </div>
  )
}
