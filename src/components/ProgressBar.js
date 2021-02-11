import React, {useState} from 'react';
import { Form, Button, Row, Col, Container, FormControl} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'

export default function FrogressBar() {
    const now = 80;
    return(
        <Container fluid>
        <Row>
            <Col>
                <ProgressBar variant = "info" animated now={now} />
            </Col>
        </Row>  
    </Container>
    )
}

