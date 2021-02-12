import React,{ useState } from 'react';
import MediaQuery from 'react-responsive';
import {useHistory} from 'react-router-dom';
import foundations from '../assets/API/data';
import firebase from 'firebase/app';

import Header from '../components/Header';
import Foundation from '../components/Foundation';
import Forms from '../components/Forms';
import Forms2 from '../components/Forms2';
import Footer from '../components/Footer';
import ProgressBar from '../components/ProgressBar';
import Waiting from './Waiting';
import styles from './Dashboard.module.css';
import { useParams } from "react-router-dom";
import { signOut } from '../firebaseFunctions';
import { newCampaign } from '../firebaseFunctions';

import '../components.css';
import { render } from '@testing-library/react';
import ModalLink from '../components/ModalLink';


export default function Dashboard() {
  let history = useHistory()
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
    image: '',
    visibleDonors: false, 
  }

  let { id } = useParams();
  console.log(id);

  const [data, setData] = useState(initialStateValues);
  const [ruta, setRuta] = useState(id);
  const [now, setNow] =useState(0);
  const [campaingId, setCampaingId] = useState('')

  const user = firebase.auth().currentUser;
  const userEmailVerified = user.emailVerified
  console.log(user)

  const foundation = Object.values(foundations);
  console.log(foundation)

  const handleSubmit = (e) => {
    e.preventDefault();
    newCampaign(data).then((camp)=>{
      let campaing = camp.id
      setCampaingId(campaing)
    })
  }

  const handleSignOut = () => {
    history.push('/login');
    signOut();
  }

  return (
    <>
    {userEmailVerified ?
      <div className={styles.container}>
      <button onClick={()=>{handleSignOut()}}>Logout</button>
      <Header user={user.displayName} img={user}/>
      <MediaQuery minDeviceWidth={720}>
        <Foundation
        setData={setData}
        data={data}
        info={foundations}
        ruta={ruta}
        setRuta={setRuta}
        setNow={setNow}
        />
        <Forms 
        data={data}
        setData={setData}
        ruta={ruta} 
        setRuta={setRuta}
        setNow={setNow}
        />
        <Forms2 data={data}
        setData={setData}
        ruta={ruta}
        setRuta={setRuta}
        handleSubmit ={handleSubmit}
        setNow={setNow}/>
        
      </MediaQuery>
      <MediaQuery maxDeviceWidth={720}>
      {!ruta &&
        
        <Foundation
        setData={setData}
        data={data}
        info={foundations}
        ruta={ruta}
        setRuta={setRuta}
        setNow={setNow}
        />
      }
        {ruta === 1 &&
        <Forms 
        data={data}
        setData={setData}
        ruta={ruta} 
        setRuta={setRuta}
        setNow={setNow}
        />}

        {ruta === 2 &&
          <Forms2 data={data}
          setData={setData}
          ruta={ruta}
          setRuta={setRuta}
          handleSubmit ={handleSubmit}
          setNow={setNow}
          campaingId={campaingId}/>
        }
        <ProgressBar now={now}/>
        <Footer ruta={ruta} setRuta={setRuta} id={id}/>
      </MediaQuery>
    </div>
    : <Waiting /> }
    </>
    
  )
}
