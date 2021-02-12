import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ModalFoundations({show, handleClose, name, info, setData, data}) {
  const initialStateValues = {
    foundation:'',
    mision: '',
    misiondesc:'',
  }

  const handleInputchange = (event, idx) => {
    //console.log(event.target.value)
    const totalData = { ...data, foundation: name};
    setData(totalData)
      handleClose()
    //funcion quee maneja info de los inputs actualizando el estado de estos
  }
  
  console.log(data)

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
        <Button variant="primary" onClick={handleInputchange}>
          Donar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
