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


 /* "Asociación bancos de alimentos":{
  "misiones":[ALIMENTACIÓN PARA UN NIÑO 
ALIMENTACIÓN PARA UN ADULTO MAYOR 
ALIMENTACIÓN PARA UNA FAMILIA EN CONDICIÓN DE VULNERABILIDAD 
CONSTRUCCIÓN BANCO DE ALIMENTOS ],
  "Descripion": "400 millones de niños en todo el mundo se van a la cama todas las noches con hambre. Crea tu campaña y dona lo que recaudes para apadrinar la alimentación de un grupo de niños y niñas en condición de vulnerabilidad."
},  */ 