import React, {useState} from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

export default function Forms_2() {
    const initialStateData = {
        campaignVideo: '',
        campaignPodcast: '',
        campaignImage: '',
        visibleDonors:'', 
      }
    const [data, setData] = useState (initialStateData)
    
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
                <label htmlFor="basic-url">Video de campaña</label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    </InputGroup.Prepend>
                    <FormControl id="basic-url" aria-describedby="basic-addon3" name= "campaignVideo" onChange = {handleInputchange} />
                </InputGroup>

                  <Form.Group>
                    <Form.Control 
                      type="text" 
                      placeholder="Podcast de campaña"
                      name= "campaignPodcast" 
                      onChange = {handleInputchange}>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.File 
                    
                    name="campaignImage"
                    label="Impulsa con una foto de campaña"
                    onChange={handleInputchange}/>
                  </Form.Group>
                  
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Tener visibles los donantes"
                    name="visibleDonors"
                    onChange={handleInputchange}/>

                  <Button className="btn btn-bg-ligh text-dark" onClick = {handleSubmit}> Lanzar Campaña 
                  </Button>
                </form>
              </Col>
            </Row>      
        </Container>
      )
    
}