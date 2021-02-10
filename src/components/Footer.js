import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';


import bottomMobile from '../assets/images/mascaras/XMLID 2.png';

export default function Footer() {
  return (
    <>
    
      <img src={bottomMobile} alt="" className={styles.item} />
      <div className={styles.nav} >
        <button className={styles.arrow}/>
        <Link to={'/dashboard/2'}><button className={styles.arrowR}/></Link>
      </div>
      
    </>
  )
}
