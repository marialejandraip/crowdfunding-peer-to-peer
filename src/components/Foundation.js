import React from 'react';
import styles from './Foundation.module.css';
import foundations from '../assets/images/API/data';

import ModalFund from '../components/ModalFund';
import { NavItem } from 'react-bootstrap';

export default function Foundation( { name }) {

const foundation = Object.keys(foundations.foundations)
//console.log(foundations.foundations[found].image)

  return (
    <>
      <h3 className={styles.foundation__title}>Fundación Beneficiada</h3>
      <div className={styles.foundation__grid}>
        {foundation.map((name, idx)=>(
          <ModalFund 
          key={`${idx}found`}
          name={name}
          image={foundations.foundations[name].image} 
          idx={idx}/>
        ))}
      </div>
    </>
  )
}