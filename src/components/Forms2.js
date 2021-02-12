import React, {useState} from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {storage} from '../firebaseConfig.js';


export default function Forms_2({data, setData, setRuta, ruta}) {
    const initialStateData = {
        campaignVideo: '',
        campaignPodcast: '',
        visibleDonors:'',
        image: '' 
    }
    const [data, setData] = useState (initialStateData)
    //const [image, setImage] = useState (null)

    const handleImageSubmit = event => {  
      console.log(event.target.files)
     /// Create a root reference
      const storageRef = storage.ref();
      // Create a reference to 'mountains.jpg'
      const campaignImageRef = storageRef.child(event.target.files[0].name);
      console.log(campaignImageRef.fullPath)
      // While the file names are the same, the references point to different files
         // false 
      const file = event.target.files[0];  // use the Blob or File API
      campaignImageRef.put(file).then(function(snapshot) {
          console.log('Uploaded a blob or file!');
          campaignImageRef.getDownloadURL()
          .then((url) => setData({...data,image:url}))
        });                       
    }
    const handleInputchange = event => {
      setData({
        ...data,
        [event.target.name] : event.target.value})
      //funcion quee maneja info de los inputs actualizando el estado de estos
    }
    
    const handleSubmit = event => {
      event.preventDefault()
      console.log('Soy data =>',data)
      
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
                    <Form.Control 
                    type="file"
                    name="image"
                    label="Impulsa con una foto de campaña"
                    onChange={handleImageSubmit}>
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
        </Container>
      )    
}