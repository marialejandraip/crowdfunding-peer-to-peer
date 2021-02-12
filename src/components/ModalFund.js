import React, {useState} from 'react';
import Modal from './Modal';
import styles from './ModalFund.module.css';

export default function ModalFund({name, idx, data, info, setData, image, setRuta, ruta}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (event) => {
    console.log(name, event.target.value, event.target.name)
    /* setData({
      ...data,
      [event.target.name] : name}) */
    setShow(true);
  }

  return (
    <>
      <div key={`${idx}foundation`} 
      onClick={handleShow}
      name={name}
      className={styles.item}>
        {/* <p>{name}</p> */}
        <img src={process.env.PUBLIC_URL + `${image}`} alt={name}/>
      </div>
      
      <Modal 
      handleClose={handleClose}
      show={show}
      name={name}
      info={info}
      data={data}
      setData={setData}
      setRuta={setRuta}
      ruta={ruta}
      />
    </>
  )
}
