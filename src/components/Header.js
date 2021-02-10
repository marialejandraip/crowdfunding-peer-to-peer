import React from 'react'
import User from '../assets/images/user.png';
import dashboard from '../assets/images/mascaras/dashboard.svg';

import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <img src={dashboard} className={styles.mask} alt=''/>
      <div className={styles.header}>
        <img src={User} alt=""/>
        <h4>Pepita Pérez</h4>
      </div>
    </>
  )
}
