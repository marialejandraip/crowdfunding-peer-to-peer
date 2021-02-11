import React from 'react';
import styles from './Foundation.module.css';
import foundations from '../assets/API/data';

import ModalFund from '../components/ModalFund';

export default function Foundation() {

const foundation = Object.keys(foundations.foundations)

  return (
    <>
      <h3 className={styles.foundation__title}>Fundación Beneficiada</h3>
      <div className={styles.foundation__grid}>
        {foundation.map((name, idx)=>(
          <ModalFund 
          key={`${idx}found`}
          name={name}
          image={foundations.foundations[name].image}
          data={foundations.foundations[name]}
          idx={idx}/>
        ))}
      </div>
    </>
  )
}