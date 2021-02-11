import React,{ useState } from 'react';

import Header from '../components/Header';
//import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
import Forms from '../components/Forms';
import Forms_2 from '../components/Forms_2';
import styles from './Dashboard.module.css';
import { useParams } from "react-router-dom";
import { signOut } from '../firebaseFunctions';

import foundations from '../assets/images/API/data';

import '../components.css';

export default function Dashboard() {
  const [found, setFound] = useState('');
  console.log(found)
  let { id } = useParams();
  console.log(id);

  const isDesktop = window.matchMedia("(max-width: 720px)");

  // switch(id){
  //   case 0:
  //   case 1:
  //     return:  
     // case 2:
       // return: >form
     // case 3:
        //reutr 
  // }
  // en la parte de escritorio
  
  const foundation = Object.values(foundations);
  console.log(foundation[0])
  return (
    <div className={styles.container}>
      <button onClick={()=>signOut()}>Logout</button>
      <Header />
      <Foundation 
        setFound={setFound}
        data={foundations}/>
      <Forms />
      <Forms_2 />
      {/* <div id="afrus-container-form" data-form="Zm9ybS0xNTU0LW9yZ2FuaXphdGlvbi04Nw=="></div> */}
      
      {/*<Footer />*/}
    </div>
  )
}

