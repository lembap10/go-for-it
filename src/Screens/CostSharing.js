import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from "../Components/Sidebar";

function CostSharingScreen(){
    return (
            <div className='CostSharingScreen'>
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>

                <Col>
                <h1>
                    Go For It
                </h1>
                <Row>
                <h4>
                    Send your invitation to your fellow adventurers!  
                </h4>
                </Row>

                <Row>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Gas">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Groceries">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInput" label="Lodging">
                            <Form.Control type="Email Invite" placeholder="example@gmail.com" />
                        </FloatingLabel>
                    </Col>
                </Row>

                <Link to="/">
                    <Button variant="outline-secondary"> Back to Home </Button>
                </Link>
                <Link to="/">
                    <Button variant="outline-secondary"> Next </Button>
                </Link>
                
                </Col>
                    
                </Row>
                
            </div>
    )
}

export default CostSharingScreen;