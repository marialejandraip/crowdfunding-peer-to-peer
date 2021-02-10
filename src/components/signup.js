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
import '../components.css';

export default function Signup() {
  const [em, setEmail] = useState('');
  const [password, setPassword] = useState('');

const sendEmail = () => {
  console.log('entra aqui x2')
     const user = firebase.auth().currentUser;
     console.log(user)
     /* user
       .sendEmailVerification()
       .then(() => {
         console.log('email')
         //sendEmailMessage();
         // Email sent.
       })
       .catch((error) => {
         alert(error);// An error happened.
       }); */
   };
   

   const handleSubmit = () => {
    console.log('entra aqui')
    createUserEmailAndPassword(em, password)
    sendEmail()
    
    /* const config = {
      url: 'http://localhost:3000/links',
      iOS: {
        bundleId: 'com.example.ios'
      },
      handleCodeInApp: false,
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      },
    
    };
    firebase.auth().sendSignInLinkToEmail(em, config)
    .then(() => {
      console.log('se supone que link ajá'+ em, config);
      window.localStorage.setItem('emailForSignIn', em);
      // ...
    })
    .catch((error) => {
      console.log(error.message);
      // ...
    }); */

    //sendEmailSignIn(em);
    //createUserEmailAndPassword(em,password);

 /*    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      var email = window.localStorage.getItem('emailForSignIn');
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      firebase.auth().signInWithEmailLink(email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem('emailForSignIn');
        })
        .catch((error) => {});
    } */
  }
  return (
    <div className = "signup"> 

      <img className = "img-top" src = {top} alt="" />
      
      <img className = "top-desktop" src = {topDesktop} alt="" />
      <img className = "child" src = {Child} alt="" />

      <div>
        <h1 className = "tittle-signup">Crear Cuenta</h1>
        <div className = "container"> 
          <form >
            <div className="form-group">
            <label>
              <img src = {user} alt="" className="mail" />
              Nombre:
              <input type='text' /> 
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
    </div>
  )
}