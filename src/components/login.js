import React, { useState} from 'react'
import {signIn }from '../firebaseFunctions';

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
    <div>
      <form onSubmit={(e)=>login(e)}>
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
        <button>Entrar</button>
      </form>
    </div>
  )
}
