import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styles from './Footer.module.css';
import bottomMobile from '../assets/images/mascaras/XMLID 2.png';

export default function Footer({ruta, setRuta, id}) {
  const fixedId = ruta ? setRuta(ruta) : setRuta(0);

  return (
    <>
      <div className={styles.item}>
        <div className={styles.nav} >
          { ruta === 0 && 
            <Link to={`/dashboard/${ruta+1}`}><button onClick={() => setRuta(ruta+1)} className={styles.arrowR}/></Link>
          }

          { ruta === 1 && 
            <>
              <Link to={`/dashboard`}><button onClick={() => setRuta(ruta-1)} className={styles.arrow}/></Link>
              <Link to={`/dashboard/${ruta+1}`}><button onClick={() => setRuta(ruta+1)} className={styles.arrowR}/></Link>
            </>
          }

          {ruta === 2 &&
            <Link to={`/dashboard/${ruta-1}`}><button onClick={() => setRuta(ruta-1)} className={styles.arrow}/></Link>
          }
        </div>

        <img className={styles.bottomMobile} src={bottomMobile} alt="" />
      </div>
    </>
  )
}
