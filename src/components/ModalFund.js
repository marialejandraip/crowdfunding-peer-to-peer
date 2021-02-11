import React, {useState} from 'react';

import Modal from './Modal';
import styles from './ModalFund.module.css';

export default function ModalFund({name, idx, data}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div key={`${idx}foundation`} 
      onClick={handleShow} 
      className={styles.item}>
        <p>{name}</p>
      </div>
      
      <Modal 
      handleClose={handleClose}
      show={show}
      name={name}
      data={data}
      />
    </>
  )
}
