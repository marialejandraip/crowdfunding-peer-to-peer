import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../assets/images/icons/givingAgency.svg';
import Collage from '../assets/images/Collage.png';
import styles from './Star.module.css';

export default function Start() {
  let history = useHistory();
  return (
    <div className={styles.home}>
      <div className={styles.home__welcome}>
        <img src={logo} className={styles.home__logo} alt="Giving Agency" />
        <div>
          <h1>BIENVENIDO</h1>
          <p>Ayudemos a miles de familias damnificadas, ofreciendo tu <strong>razón</strong> como un momento para apoyar a quien más lo necesita.</p>
        </div>
        <div className={styles['home__button-container']}>
          <button className={styles.home__button} onClick= {() => { history.push('/login') }}>Ingreso</button>
          <button className={styles.home__button} onClick= {() => { history.push('/signup') }}>Registro</button>
        </div>
      </div>
      <img src={Collage} className={styles.home__collage} alt="Personas felices" />
    </div>
  )
}
