import React from 'react';
import styles from './Foundation.module.css';
import ModalFund from '../components/ModalFund';

export default function Foundation({ setData, data, info}) {
  const foundation = Object.keys(info.foundations)
  return (
    <>
      <h3 className={styles.foundation__title}>Fundación Beneficiada</h3>
      <div className={styles.foundation__grid}>
        {foundation.map((name, idx)=>(
          <ModalFund 
          key={`${idx}found`}
          name={name}
          image={info.foundations[name].image}
          info={info.foundations[name]}
          idx={idx}
          data={data}
          setData={setData}/>
        ))}
      </div>
    </>
  )
}
