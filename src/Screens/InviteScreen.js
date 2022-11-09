import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {useLocation} from 'react-router-dom';
import Dropdown from '../Components/Dropdown.js'
import './../InviteScreen.css'
import {getTrips} from '../trips/trips.js'



function InviteScreen(){
    return (
        <Container>
            <div className='InviteScreen'>
            <Row>
                    <h1>
                        Go For It
                    </h1>
                </Row>
                <Row>
                    <s1>
                      Send your invitation to your fellow adventurers!  
                    </s1>
                </Row>
                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Email">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Email">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Email">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                </Row>
                <br></br>
            </div>
            <Link to="/">
                <Button variant="outline-secondary"> Back to Home </Button>
            </Link>
            <Link to={"/createtrip/costsharing"}>
                <Button variant="outline-secondary"> Next </Button>
            </Link>
        </Container>
    )
}

export default InviteScreen;