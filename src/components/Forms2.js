import React, {useState} from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {storage} from '../firebaseConfig.js';
import './Forms.css';


export default function Forms_2({data, setData, handleSubmit}) {
    
      const handleImageSubmit = event => {  
      const storageRef = storage.ref();
      const campaignImageRef = storageRef.child(event.target.files[0].name);
      console.log(campaignImageRef.fullPath)
      const file = event.target.files[0];  
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
    }
    return (
        <Container fluid className = "container">
            <Row className = "rows">
              <Col className = "columns">
                <form className="card card-body input-group" > 
                <Form.Row>
                <Form.Group as = {Col}>
                  <Form.Control 
                    column sm={10}
                    type="text" 
                    name ="url"
                    placeholder ="Url de campaña" 
                    onChange = {handleInputchange}>
                  </Form.Control>
                </Form.Group>
                <Button 
                  as = {Col} 
                  column sm={1} 
                  className = "questionButton"> ?
                </Button>
              </Form.Row> 
                  <Form.Row>
                    <Form.Group as = {Col}>
                        <Form.Control 
                          type="text" 
                          placeholder="Url Video de campaña"
                          name= "campaignVideo" 
                          column sm={10}>
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
                        type="text" 
                        placeholder="Url Podcast de campaña"
                        name= "campaignPodcast" 
                        column sm={10}
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
                        type="file"
                        name="image"
                        column sm={10}
                        label="Impulsa con una foto de campaña"
                        onChange={handleImageSubmit}>
                      </Form.Control>
                    </Form.Group>
                    <Button 
                      as = {Col}
                      column sm={2} 
                      className = "questionButton"> ?
                    </Button>
                  </Form.Row>

                  <Form.Check 
                    type="switch"
                    label="Donantes Visibles"
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