import React,{ useState } from 'react';

import Header from '../components/Header';
//import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
import Forms from '../components/Forms';
import Forms2 from '../components/Forms2';
import ProgressBar from '../components/ProgressBar';


import styles from './Dashboard.module.css';
import { useParams } from "react-router-dom";
import { signOut } from '../firebaseFunctions';

import foundations from '../assets/API/data';
import Waiting from '../Views/Waiting';

import '../components.css';

export default function Dashboard({ isUserLoggedIn }) {

  
  const [found, setFound] = useState('');

  console.log(found)
  let { id } = useParams();
  console.log(id);

  const foundation = Object.values(foundations);
  console.log(foundation)
  return (
    <>
    {isUserLoggedIn ? 
     
      <div className={styles.container}>
      <button onClick={()=>signOut()}>Logout</button>
      <Header />

      <Foundation 
        setFound={setFound}
        data={foundations}/>
      <Forms />
      <Forms2 />
      <ProgressBar />
      {/* <div id="afrus-container-form" data-form="Zm9ybS0xNTU0LW9yZ2FuaXphdGlvbi04Nw=="></div> */}
      
      {/*<Footer />*/}
    </div>
     : <Waiting />
    }
    </>
    
  )
}

 //const isDesktop = window.matchMedia("(max-width: 720px)");

  // AQUI condicional para mobile y para desktop ¿? en router o hay manera más facil
  // Si media max de 720 entonces renderizar todo 
  // si no hacer el switch de cada caso dashbord/2 dashboard/3
  // switch(id){
  //   case 0: path sea dashboard/
  //    return <foundation />
  //   case 1:
  //     return:  
     // case 2:
       // return: >form
     // case 3:
        //reutr 
  // }
  // en la parte de escritorio


