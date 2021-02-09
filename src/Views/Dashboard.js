import React from 'react';
import { signOut} from '../firebaseFunctions';

export default function Dashboard() {
  return (
    <div>
      Aqui
      <button onClick={()=>signOut()}>Logout</button>
    </div>
  )
}
