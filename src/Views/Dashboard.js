import React,{ useState } from 'react';
import MediaQuery from 'react-responsive';
import Header from '../components/Header';
import Foundation from '../components/Foundation';
import Forms from '../components/Forms';
import Forms2 from '../components/Forms2';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';

import styles from './Dashboard.module.css';
import { useParams } from "react-router-dom";
import { signOut } from '../firebaseFunctions';
import { newCampaign } from '../firebaseFunctions';

import foundations from '../assets/API/data';
import Waiting from '../Views/Waiting';

import '../components.css';

export default function Dashboard({ isUserLoggedIn }) {
  const initialStateValues = {
    foundation:'',
    foundesc:'',
    type: '',
    campaignName: '' , 
    description: '',   
    url: '', 
    recaudo: '',
    date: '',
    campaignVideo: '',
    campaignPodcast: '',
    campaignImage: '',
    visibleDonors:'', 
  }

  let { id } = useParams();
  console.log(id);

  const [data, setData] = useState(initialStateValues);
  const [ruta, setRuta] = useState(id);


  const foundation = Object.values(foundations);
  console.log(foundation)

  const handleSubmit = (e) => {
    e.preventDefault();
    newCampaign(data);
    console.log('loading firebase')
  }

  return (
    <>
    {isUserLoggedIn ? 
    <div className={styles.container}>
      <button onClick={()=>signOut()}>Logout</button>
      <Header />
      <MediaQuery minDeviceWidth={720}>
        <Foundation
        setData={setData}
        data={data}
        info={foundations}
        ruta={ruta}
        setRuta={setRuta}
        />
        <Forms 
        data={data}
        setData={setData}
        ruta={ruta} 
        setRuta={setRuta}
        />
        <Forms2 data={data}
        setData={setData}
        ruta={ruta}
        setRuta={setRuta}
        handleSubmit ={handleSubmit}/>
        
      </MediaQuery>
      <MediaQuery maxDeviceWidth={720}>
      {!ruta &&
        <Foundation
        setData={setData}
        data={data}
        info={foundations}
        ruta={ruta}
        setRuta={setRuta}
        />
      }
        {ruta === 1 &&
        <Forms 
        data={data}
        setData={setData}
        ruta={ruta} 
        setRuta={setRuta}
        />}

        {ruta === 2 &&
          <Forms2 data={data}
          setData={setData}
          ruta={ruta}
          setRuta={setRuta}
          handleSubmit ={handleSubmit}/>
        }
        <ProgressBar />
        <Footer ruta={ruta} setRuta={setRuta} id={id}/>
      </MediaQuery>
    </div>
    : <Waiting />
    }
    </>
    
  )
}
