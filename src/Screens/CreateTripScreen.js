import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateTripScreen(){
    return (
        <Container>
            <div className='MainScreen'>
                <Row>
                    <h1>
                        Creating Trip
                    </h1>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Current Location">
                            <Form.Control type="Current Location" placeholder="Current Location" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Destination">
                            <Form.Control type="Destination" placeholder="Destination" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Link  to={"/"}>
                            <Button variant="outline-secondary" className='MainButton' id="back">Back</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Link  to={"/createtrip/begintrip"}>
                            <Button variant="outline-secondary" className='MainButton' id="next">Next</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default CreateTripScreen;