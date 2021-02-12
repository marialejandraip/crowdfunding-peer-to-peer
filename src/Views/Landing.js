import React from 'react'
import helper from '../assets/images/helper.png';
import {useParams} from 'react-router-dom';


export default function Landing() {  
  let { slug } = useParams();

  return (
    <div>
      <img src={helper} alt=""/>
    </div>
  )
}
