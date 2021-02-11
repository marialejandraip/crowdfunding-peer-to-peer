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
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {data.misions.map((mision, idx)=>(
                  <Nav.Item key={`${idx}mision`}>
                  <Nav.Link eventKey={idx}>{mision}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
          <Tab.Content>
          {data.description.map((description, idx)=>(
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
        <Button variant="primary" onClick={handleClose}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
