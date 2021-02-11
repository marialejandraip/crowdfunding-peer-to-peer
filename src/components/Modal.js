import React from 'react';
import { Modal, Button, Row, Col, Nav, Tab } from 'react-bootstrap';

export default function ModalFoundations({show, handleClose, name, info, setData, data}) {
  const initialStateValues = {
    foundation:'',
    mision: '',
    misiondesc:'',
  }

  const handleInputchange = (event, idx) => {
    //console.log(event.target.value)
    setData({
      ...data,
      [event.target.name] : data.misions[idx]})
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
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {info.misions.map((mision, idx)=>(
                  <Nav.Item key={`${idx}mision`}>
                    <Nav.Link eventKey={idx}
                    name="mision"
                    >{mision}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
          <Tab.Content>
          {info.description.map((description, idx)=>(
            <Tab.Pane eventKey={idx}>
              {description}
            </Tab.Pane> 
          ))}
          </Tab.Content>
          </Col>
          </Row>
        </Tab.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleInputchange}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
