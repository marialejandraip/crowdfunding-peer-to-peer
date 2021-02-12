import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {signIn }from '../firebaseFunctions';
import { Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

import top from '../assets/images/mascaras/Group 34.svg';
import topDesktop from '../assets/images/mascaras/group36.svg';
import bottom from '../assets/images/mascaras/XMLID 9.svg';
import bottomDesktop from '../assets/images/mascaras/XMLID 11.svg';

import Grandma from '../assets/images/Abuela.png';
import lock from '../assets/images/icons/lock.svg';
import mail from '../assets/images/icons/mail.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components.css';
import styles from './login.module.css';

export default function Login() {
  let history= useHistory()
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
  
  const handleLogIn = (e) => {
    history.push('/dashboard');
    login(e);
  }

  return (
    <div className = {styles.login}> 
      <img className = {styles['img-top']} src = {top} alt=""/>
      <img className = {styles['top-desktopL']} src = {topDesktop} alt=""/>
      <img className = {styles.Grandma} src = {Grandma} alt=""/>

      <div className = {styles.titleAndForm}>
        <h1 className = {styles.title}>Ingresar</h1>
        <div className = {styles.container}>
          <form >
          <div className={styles['form-group']}>
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
            onClick={(e)=>handleLogIn(e)} 
            >Entrar</Button>
          </div>
          <p><span>¿Olvidaste tu contraseña?</span></p>
          </form>
        </div>
      </div>
      <img className = {styles['image-bottom']} src = {bottom} alt=""/>
      <div className = {styles.arrowSign}>
        <Link to="/"><button className = {styles.arrow} /></Link>
      </div>
      

      <img className = "bottom-desktopL" src = {bottomDesktop} alt=""/>
    </div>
  )
}
