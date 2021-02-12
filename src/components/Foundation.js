import React from 'react';
import styles from './Foundation.module.css';
import ModalFund from '../components/ModalFund';

export default function Foundation({ setData, data, info, setNow, setRuta, ruta}) {
  const foundation = Object.keys(info.foundations);
  setNow(100/3)
  return (
    <>
      <p className={styles.foundation__title}>Conoce nuestras fundaciones y apoya con la causa con la que más te identifiques</p>
      <div className={styles.foundation__grid}>
        {foundation.map((name, idx)=>(
          <ModalFund 
          key={`${idx}found`}
          name={name}
          image={info.foundations[name].image}
          info={info.foundations[name]}
          idx={idx}
          data={data}
          setData={setData}
          setRuta={setRuta}
          ruta={ruta}/>
        ))}
      </div>
      
    </>
  )
}
