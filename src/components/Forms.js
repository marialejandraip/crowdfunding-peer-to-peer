import React, {useState} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';


export default function Forms() {
  const initialStateValues = {
    type: '',
    campaignName: '' , 
    description: '',   
    url: '', 
    recaudo: '',
    date: ''
  }
const [data, setData] = useState (initialStateValues)

const handleInputchange = event => {
  //console.log(event.target.value)
  setData({
    ...data,
    [event.target.name] : event.target.value})
  //funcion quee maneja info de los inputs actualizando el estado de estos
}

const handleSubmit = event => {
  event.preventDefault()
  console.log(data)
  
   //recibe informacion de evento, cada que se hace click para enviar info del form    
}

  return (
    <Container fluid>
        <Row className = "rows">
          <Col className = "columns">
            <form className="card card-body input-group" onSubmit = {handleSubmit} > 
              <Form.Group>
                <Form.Control 
                  as="select"
                  custom 
                  type="text" 
                  name= "type"
                  defaultValue={'DEFAULT'} 
                  onChange = {handleInputchange}>
                  <option value="DEFAULT" disabled>Tipo de campaña</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  placeholder="Nombre de campaña"
                  name= "campaignName" 
                  onChange = {handleInputchange}>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Control 
                  as="textarea" 
                  rows = {4}
                  name ="description"
                  placeholder ="Describe tu campaña" 
                  onChange = {handleInputchange}>
                </Form.Control>
              </Form.Group>
              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    type="number" 
                    placeholder="Valor a recaudar"
                    name= "recaudo" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group> 
                <Form.Group as = {Col}>
                  <Form.Control 
                    type="date" 
                    placeholder="Fecha límite"
                    name= "date" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group> 
              </Form.Row>
              <Form.Group>
                <Form.Control 
                  type="text" 
                  name ="url"
                  placeholder ="Url de campaña" 
                  onChange = {handleInputchange}>
                </Form.Control>
              </Form.Group>
              <Button className="btn btn-bg-ligh text-dark" onClick = {handleSubmit}> Enviar 
              </Button>
            </form>
          </Col>
        </Row>      
    </Container>
  )
}
