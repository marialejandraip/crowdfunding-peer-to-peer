import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


import bottomMobile from '../assets/images/mascaras/XMLID 2.png';

export default function Footer({ruta, setRuta, id}) {
  const fixedId = ruta ? ruta : setRuta(0);

  return (
    <>
      <img src={bottomMobile} alt="" className={styles.item} />
      <div className={styles.nav} >
        <Link to={`/dashboard/${ruta}`}><button onClick={() => setRuta(ruta-1)} className={styles.arrow}/></Link>
        <Link to={`/dashboard/${ruta}`}><button onClick={() => setRuta(ruta+1)} className={styles.arrowR}/></Link>
      </div>
    </>
  )
}
