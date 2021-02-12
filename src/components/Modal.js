import React from 'react';
import { Modal, Button, Row, Col, Nav, Tab } from 'react-bootstrap';

export default function ModalFoundations({show, handleClose, name, data}) {
  console.log(data.description)
  return (
    <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
 