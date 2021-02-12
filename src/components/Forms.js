import React from 'react';
import { Form, Row, Col, Container } from 'react-bootstrap';

export default function Forms({data,setData, setNow}) {
setNow(100/3*2)

const handleInputchange = event => {
  setData({
    ...data,
    [event.target.name] : event.target.value})
}

  return (
    <Container fluid>
        <Row className = "rows">
          <Col className = "columns">
            <form className="card card-body input-group" > 
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
             {/*  <Button className="btn btn-bg-ligh text-dark" onClick = {handleSubmit}> Enviar 
              </Button> */}
            </form>
          </Col>
        </Row>     
    </Container>
  )
}
