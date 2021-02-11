import React, {useState} from 'react';

import Modal from './Modal';
import styles from './ModalFund.module.css';

export default function ModalFund({name, idx, image}) {
  console.log(image)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    {/* <img src={image} alt=""/> */}
    {/* style={{ 
      backgroundImage:`url(${image})` }} */}
      <div onClick={handleShow} className={styles.item} key={`${idx}foundation`}>
        <p>{name}</p>
        <img src={image} alt=""/>
      </div>
      
      <Modal 
          style={{display:'none'}}
          handleClose={handleClose}
          show={show}
          name={name}
        />
      
    </>
  )
}
