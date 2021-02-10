import React from 'react';
import styles from './Foundation.module.css';
import foundations from '../assets/images/API/data';


export default function Foundation( { name }) {

const foundation = Object.values(foundations)

  return (
    <>
      <h3 className={styles.foundation__title}>Fundación Beneficiada</h3>
      <div className={styles.foundation__grid}>
        {foundation[0].map((name, idx)=>(
          <div onClick={() => console.log((name))} className={styles.item} key={`${idx}foundation`}><p>{name}</p></div>
        ))}
      </div>
    </>
  )
}