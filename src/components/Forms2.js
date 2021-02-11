import React, {useState} from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import storage from '../firebaseConfig.js';

export default function Forms2() {
    const initialStateData = {
        campaignVideo: '',
        campaignPodcast: '',
        visibleDonors:'', 
      }
    const [data, setData] = useState (initialStateData)
    const [image, setImage] = useState (null)
    console.log('image=>',image)

    const handleImageChange = event => {
      if (event.target.file[0]){
        setImage(event.target.file[0])
        console.log('image =>',image)
      }
    }
    
    
    const handleInputchange = event => {
      setData({
        ...data,
        [event.target.name] : event.target.value})
      //funcion quee maneja info de los inputs actualizando el estado de estos
    }
    
    const handleSubmit = event => {
      event.preventDefault()
      console.log('Hola soy data =>',data)
      console.log('image =>',image)
      
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
            <Row>
              <Col>
              <Form.Group>
                    <Form.Control 
                    type="file"
                    name="image"
                    label="Impulsa con una foto de campaña"
                    onChange={handleImageChange}>
                    </Form.Control>
                  </Form.Group>
              </Col>
            </Row>  
        </Container>
      )
    
}