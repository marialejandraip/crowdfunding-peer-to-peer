import React from 'react';
import {  Row, Col, Container} from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './progressBar.module.css';

export default function FrogressBar({now}) {
    return(
      <Container fluid>
        <Row>
          <Col>
            <ProgressBar className={styles.progressBar}  animated now={now} />
          </Col>
        </Row>  
      </Container>
    )
};
