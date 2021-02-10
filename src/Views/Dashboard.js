import React from 'react';
import { signOut } from '../firebaseFunctions';
import Header from '../components/Header';

import '../components.css';

export default function Dashboard() {
  return (
    <div>
      <Header />
      Aqui

      <div id="afrus-container-form" data-form="Zm9ybS0xNTU0LW9yZ2FuaXphdGlvbi04Nw=="></div>
      <script src="https://my.afrus.app/template/index.js"></script>
      
      <button onClick={()=>signOut()}>Logout</button>
    </div>
  )
}
