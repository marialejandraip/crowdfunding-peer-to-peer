import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalFoundations({show, handleClose, name, info, setData, data}) {

  const handleInputchange = (event, idx) => {
    const totalData = { ...data, foundation: name, foundesc: info.description,};
    setData(totalData);
      handleClose();
  }
  
  console.log(data)

  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {info.description}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleInputchange}>
          Donar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
 