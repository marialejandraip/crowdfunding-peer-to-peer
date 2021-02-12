import React, {useState} from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import styles from './Forms.module.css';
import InputGroup from 'react-bootstrap/InputGroup';


  
export default function Forms({data,setData, setNow}) {
setNow(100/3*2)

const handleInputchange = event => {
  setData({
    ...data,
    [event.target.name] : event.target.value})
}

  return (
    <Container fluid className = {styles.container}>
        <Row className = "rows">
          <Col sm={1} md ={2}></Col>
          <Col sm={10} md ={8} className = "columns">
            <form className="card card-body input-group" id = {styles.form}>
              <Form.Row >

                <Form.Group as = {Col}>
                  <Form.Control 
                    as="select"
                    column sm={11} md={11}
                    custom 
                    className = {styles.input} 
                    type="text" 
                    name= "type"
                    defaultValue={'DEFAULT'} 
                    onChange = {handleInputchange}>
                    <option value="DEFAULT" disabled>Tipo de campaña</option>
                    <option>CUMPLEAÑOS</option>
                    <option>MATRIMONIO</option>
                    <option>BAUTIZO</option>
                    <option>NAVIDAD</option>
                  </Form.Control>
                </Form.Group>
                <Button 
                  data-tip
                  data-for = "input1"
                  as = {Col} 
                  column sm={1} md={1} 
                  className = {styles.questionButton}> ?
                </Button>
                <ReactTooltip
                  id = "input1"
                  place = "top"                  
                  type = "info"
                  effect = "solid">
                    "Elige cuál es el motivo por el cual haces esta campaña"
                </ReactTooltip>
              </Form.Row>

              <Form.Row> 
                <Form.Group as = {Col}>
                  <Form.Control
                    column sm={11} md={11}
                    className = {styles.input}  
                    type="text" 
                    placeholder="Nombre de campaña"
                    name= "campaignName" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group>
                <Button 
                  data-tip
                  data-for = "input2"
                  as = {Col} 
                  column sm={1} md={1}
                  className = {styles.questionButton}> ?
                </Button> 
                <ReactTooltip
                  id = "input2"
                  place = "top"                  
                  type = "info"
                  effect = "solid">
                    "Escribe un nombre llamativo que creas ayude a impulsar tu campaña"
                </ReactTooltip>
              </Form.Row>
              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    column sm={11} md={11}
                    as="textarea" 
                    rows = {4}
                    className = {styles.input} 
                    name ="description"
                    placeholder ="Describe tu campaña" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group>
                <Button
                  data-tip
                  data-for = "input3" 
                  as = {Col} 
                  column sm={1} md={1}
                  className = {styles.questionButton}> ?
                </Button>
                <ReactTooltip
                  id = "input3"
                  place = "top"                  
                  type = "info"
                  effect = "solid">
                    "Deja una breve y clara descripción que cuente un poco más sobre lo que deseas lograr con esta campaña"
                </ReactTooltip>
              </Form.Row>  

              <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    column sm={5} 
                    type="number" 
                    className = {styles.input} 
                    placeholder="Meta"
                    name= "recaudo" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group> 
                <Button 
                  data-tip
                  data-for = "input4"
                  as = {Col} 
                  column sm={1} 
                  className = {styles.questionButton}> ?
                </Button>
                <ReactTooltip
                  id = "input4"
                  place = "top"                  
                  type = "info"
                  effect = "solid">
                    "Ingresa el valor que esperas lograr recaudar"
                </ReactTooltip>
                <Form.Group as = {Col}>
                  <Form.Control
                    className = {styles.input} 
                    id = {styles.inputDate}
                    column sm={3} 
                    type="date" 
                    placeholder="Fecha límite"
                    name= "date" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group >
                <Button
                data-tip
                data-for = "input5" 
                  as = {Col} 
                  column sm={1} 
                  className = {styles.questionButton}> ?
                </Button> 
                <ReactTooltip
                  id = "input5"
                  place = "top"                  
                  type = "info"
                  effect = "solid">
                    "Elige la fecha en la que terminará tu campaña"
                </ReactTooltip>           
              </Form.Row>
            </form>
          </Col>
          <Col sm={1} md ={2}></Col>
        </Row>     
    </Container>
  )
}
