import React, {useState, useEffect} from 'react'
import helper from '../assets/images/helper.png';

import { useParams} from 'react-router-dom';
import { db } from '../firebaseConfig';


export default function Landing() { 
  let {campaingId} = useParams();
  const [campaingData, setCampaingData] =useState()
  
  useEffect(()=>{
    var docRef = db.collection('campaigns').doc(campaingId);
    docRef.get().then(function(doc) {
    if (doc.exists) {
    console.log("Document data:", doc.data());
    setCampaingData(doc.data())
      } else {
    console.log("No such document!");
    }

}).catch(function(error) {
    console.log("Error getting cached document:", error);
});
  }, [campaingId])
  
  console.log(campaingData)
  return (
    <div>
      <div>Now showing post {campaingId}</div>
      <img src={helper} alt=""/>
      <p>{}</p>
    </div>
  )
}
