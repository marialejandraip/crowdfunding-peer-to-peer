import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserEmailAndPassword } from '../firebaseFunctions';
import { Button } from 'react-bootstrap';

import top from '../assets/images/mascaras/Group 34.svg'
import topDesktop from '../assets/images/mascaras/Group 35.svg';
import bottom from '../assets/images/mascaras/XMLID 9.svg';
import bottomDesktop from '../assets/images/mascaras/XMLID 10.svg';

import Child from '../assets/images/Chil.png';
import lock from '../assets/images/icons/lock.svg';
import mail from '../assets/images/icons/mail.svg';
import user from '../assets/images/icons/user.svg';
import styles from './signup.module.css';
import '../components.css';

export default function Signup() {
  const [em, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await createUserEmailAndPassword(em, password, name);
  }
  return (
    <>
    <div className={styles.signup}> 
      <img className = {styles['img-top']} src = {top} alt="" />
      <img className = "top-desktop" src = {topDesktop} alt="" />
      <img className = {styles.child} src = {Child} alt="" />

      <div className={styles.titleAndForm}>
        <h1 className = {styles['title-signup']}>Crear Cuenta</h1>
        <div className = {styles['container-signup']}> 
          <form >
            <div className={styles['form-group']}>
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
    <img className = {styles['image-bottom']} src = {bottom} alt="" />
    <div className = {styles.arrowSign}>
      <Link to="/"><button className = {styles.arrow}/></Link>
    </div>
    <img className = {styles['bottom-desktop']} src = {bottomDesktop} alt="" />
  </div>
  </>
  )
}
