import React, { useState } from 'react';
import firebase from 'firebase/app';
import {  createUserEmailAndPassword } from '../firebaseFunctions';

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
    <div>
      <form>
        <label>
          Nombre:
          <input type='text' 
          /> 
        </label>
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
        <button onClick={() => handleSubmit()}>Registrar</button>
      </form>

    </div>
  )
}