import React from 'react';
import {  Row, Col, Container} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function FrogressBar({now}) {
    return(
      <Container fluid>
        <Row>
          <Col>
            <ProgressBar variant = "info" animated now={now} />
          </Col>
        </Row>  
      </Container>
    )
};
