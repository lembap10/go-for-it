import React from 'react';
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';

function MainScreen(){
    return (
        <div className='MainScreen'>
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

            <Row>
                <Col>
                    <Button variant="outline-secondary" className='MainButton' id="SavedTrips">Saved Trips</Button>{' '}
                </Col>
                <Col>
                    <Button variant="outline-secondary" className='MainButton' id="CreateTrip">Create Trip</Button>{' '}
                </Col>
            </Row>
        </div>
    )
}

export default MainScreen;