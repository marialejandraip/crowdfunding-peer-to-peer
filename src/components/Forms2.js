import React from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import ModalLink from './ModalLink';
import InputGroup from 'react-bootstrap/InputGroup';
import {storage} from '../firebaseConfig.js';
import ReactTooltip from 'react-tooltip';
import styles from './Forms.module.css';

export default function Forms_2({data, setData, setNow, handleSubmit, campaingId}) {
  setNow(100)

    const handleImageSubmit = event => {  
      const storageRef = storage.ref();
      const campaignImageRef = storageRef.child(event.target.files[0].name);
      const file = event.target.files[0];  
      campaignImageRef.put(file).then(function(snapshot) {
          campaignImageRef.getDownloadURL()
          .then((url) => setData({...data,image:url}))
        });                       
    }
    const handleInputchange = event => {
      setData( previousState => ({
        ...previousState,
          [event.target.name] : event.target.value
    }))
  }
  
    return (
        <Container fluid 
        rows sm = {20}
        className = {styles.container}>
            <Row className = "rows">
              <Col className = "columns">
                <form className="card card-body input-group" id = {styles.form} > 
                  <Form.Row>
                  <Form.Group as = {Col}>
                    <Form.Control 
                      className = {styles.input} 
                      column sm={10}
                      type="text" 
                      name ="url"
                      placeholder ="Url de campaña" 
                      onChange = {handleInputchange}>
                    </Form.Control>
                  </Form.Group>
                  <Button 
                    data-tip
                    data-for = "input6" 
                    as = {Col} 
                    column sm={1} 
                    className = {styles.questionButton}> ?
                  </Button>
                  <ReactTooltip
                    id = "input6"
                    place = "top"                  
                    type = "info"
                    effect = "solid">
                      "Éste será el identificador de la página de tu campaña, máximo tres palabras sin tildes, separadas por guion medio"
                  </ReactTooltip>  
                </Form.Row> 
                  <Form.Row>
                    <Form.Group as = {Col}>
                        <Form.Control
                          className = {styles.input} 
                          type="text" 
                          placeholder="Url Video de campaña"
                          name="campaignVideo" 
                          column sm={10}
                          onChange = {handleInputchange}>
                        </Form.Control>
                      </Form.Group> 
                      <Button
                        data-tip
                        data-for = "input7" 
                        as = {Col} 
                        column sm={2} 
                        className = {styles.questionButton}> ?
                      </Button>
                      <ReactTooltip
                        id = "input7"
                        place = "top"                  
                        type = "info"
                        effect = "solid">
                          "Impulsa tu campaña con un video que ayude a sensibilizar a los donantes, ingresa la url de tu video"
                      </ReactTooltip> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as = {Col}>
                      <Form.Control
                        className = {styles.input}  
                        type="text" 
                        placeholder="Url Podcast de campaña"
                        name= "campaignPodcast" 
                        column sm={10}
                        onChange = {handleInputchange}>
                      </Form.Control>
                    </Form.Group>
                    <Button
                      data-tip
                      data-for = "input8" 
                      as = {Col}
                      column sm={2} 
                      className = {styles.questionButton}> ?
                    </Button>
                      <ReactTooltip
                          id = "input8"
                          place = "top"                  
                          type = "info"
                          effect = "solid">
                            "Un posdcast también pude ayudar a sensibilizar, ingresa la url de tu posdcast alojado previamente en https://soundcloud.com"
                      </ReactTooltip> 
                  </Form.Row>
                  <Form.Row>
                    <Form.Group as = {Col}>
                      <Form.Control
                        className = {styles.input}
                        id = {styles.date}  
                        type="file"
                        name="image"
                        column sm={10}
                        label="Impulsa con una foto de campaña"
                        onChange={handleImageSubmit}>
                      </Form.Control>
                    </Form.Group>
                    <Button 
                      data-tip
                      data-for = "input9"
                      as = {Col}
                      column sm={2} 
                      className = {styles.questionButton}> ?
                    </Button>
                    <ReactTooltip
                      id = "input9"
                      place = "top"                  
                      type = "info"
                      effect = "solid">
                        "Sube la imágen que usarás para tu campaña"
                    </ReactTooltip> 
                  </Form.Row>
                  <Form.Check                     
                    id = {styles.switch}
                    type="switch"
                    label="Donantes Visibles"
                    name="visibleDonors"
                    onChange={handleInputchange}/>                     
                    <ModalLink handleSubmit={handleSubmit} campaingId={campaingId}/>
                </form>
              </Col>
            </Row>          
        </Container>
      )    
}