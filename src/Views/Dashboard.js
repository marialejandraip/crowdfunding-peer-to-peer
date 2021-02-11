import React,{ useState } from 'react';

import Header from '../components/Header';
//import Footer from '../components/Footer';
import Foundation from '../components/Foundation';
import Forms from '../components/Forms';
import Forms2 from '../components/Forms2';

import styles from './Dashboard.module.css';
import { useParams } from "react-router-dom";
import { signOut } from '../firebaseFunctions';
import {newCampaign} from '../firebaseFunctions';

import foundations from '../assets/images/API/data';
import Waiting from '../Views/Waiting';

import '../components.css';

export default function Dashboard({ isUserLoggedIn }) {
  const initialStateValues = {
    foundation:'',
    mision: '',
    misiondesc:'',
    type: '',
    campaignName: '' , 
    description: '',   
    url: '', 
    recaudo: '',
    date: '',
    campaignVideo: '',
    campaignPodcast: '',
    campaignImage: null,
    visibleDonors:'', 
  }
  
  const [data, setData] =useState(initialStateValues);
  console.log(data)

  let { id } = useParams();
  console.log(id);

  const foundation = Object.values(foundations);
  console.log(foundation)

  const handleSubmit = (e) => {
    e.preventDefault();
    newCampaign(data);
  }

  return (
    <>
    {isUserLoggedIn ? 
      <div className={styles.container}>
      <button onClick={()=>signOut()}>Logout</button>
      <Header />
      <Foundation
        setData={setData}
        data={data}
        info={foundations}/>
      <Forms 
      data={data}
      setData={setData} />
      <Forms2 data={data}
      setData={setData} />
      <div id="afrus-container-form" data-form="Zm9ybS0xNTU0LW9yZ2FuaXphdGlvbi04Nw=="></div>
      
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

