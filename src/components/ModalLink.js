import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import helper from '../assets/images/helper.png';
import { useHistory } from 'react-router-dom';
import styles from './ModalLink.module.css';

export default function ModalLink({handleSubmit, campaingId}) {
  let history = useHistory()
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.push(`/landing/${campaingId}`)
  }

  const handleShow = (e) => {
    setShow(true);
    handleSubmit(e);
  }
  
  return (
    <>
    <Button className="btn btn-bg-ligh text-dark" onClick = {handleShow}> Lanzar Campaña 
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Felicidades!</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          Woohooo!!
          Haz terminado tu campaña, ahora pasará a un proceso de aprobación pero por ahora puedes ver como está quedando!
          <img  className ={styles.helper}src={helper} alt=""/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Mira tu campaña
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
