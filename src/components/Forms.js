import React, {useState} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import './Forms.css';


export default function Forms({data,setData, setRuta, ruta}) {
  
const handleInputchange = event => {
  setData({
    ...data,
    [event.target.name] : event.target.value})
}

const handleSubmit = event => {
  event.preventDefault()
  console.log(data)  
}

  return (
    <Container fluid className = "container">
        <Row className = "rows">
          <Col className = "columns">
            <form className="card card-body input-group" onSubmit = {handleSubmit} > 
              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    as="select"
                    column sm={10}
                    custom 
                    type="text" 
                    name= "type"
                    defaultValue={'DEFAULT'} 
                    onChange = {handleInputchange}>
                    <option value="DEFAULT" disabled>Tipo de campaña</option>
                    <option>CUMPLEAÑOS</option>
                    <option>MATRIMONIO</option>
                    <option>BAUTIZO</option>
                    <option>NAVIDAD</option>
                    <option>CONDOLENCIAS</option>
                  </Form.Control>
                </Form.Group>
                <Button 
                  as = {Col} 
                  column sm={2} 
                  className = "questionButton"> ?
                </Button>
              </Form.Row>

              <Form.Row> 
                <Form.Group as = {Col}>
                  <Form.Control
                    column sm={10} 
                    type="text" 
                    placeholder="Nombre de campaña"
                    name= "campaignName" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group>
                <Button 
                  as = {Col} 
                  column sm={2} 
                  className = "questionButton"> ?
                </Button> 
              </Form.Row>

             

              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    column sm={10} 
                    as="textarea" 
                    rows = {4}
                    name ="description"
                    placeholder ="Describe tu campaña" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group>
                <Button 
                  as = {Col} 
                  column sm={2} 
                  className = "questionButton"> ?
                </Button>
              </Form.Row>  

              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    column sm={5} 
                    type="number" 
                    placeholder="Valor $"
                    name= "recaudo" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group> 
                <Button 
                  as = {Col} 
                  column sm={1} 
                  className = "questionButton"> ?
                </Button>
                <Form.Group as = {Col}>
                  <Form.Control
                    id = "inputDate" 
                    column sm={3} 
                    type="date" 
                    placeholder="Fecha límite"
                    name= "date" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group >
                <Button 
                  as = {Col} 
                  column sm={1} 
                  className = "questionButton"> ?
                </Button>            
              </Form.Row>
            </form>
          </Col>
        </Row>     
    </Container>
  )
}
