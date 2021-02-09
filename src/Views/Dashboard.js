import React from 'react';
import { signOut } from '../firebaseFunctions';
import Header from '../components/Header';

import '../components.css';

export default function Dashboard() {
  return (
    <div>
      <Header />
      Aqui
      <button onClick={()=>signOut()}>Logout</button>
    </div>
  )
}
