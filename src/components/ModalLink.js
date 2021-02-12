import React,{useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import helper from '../assets/images/helper.png';
import { useHistory } from 'react-router-dom';

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
          <Modal.Title>Modal heading</Modal.Title>
          <img src={helper} alt=""/>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
