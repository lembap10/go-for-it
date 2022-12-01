import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from "../Components/Sidebar";
import { getEmails, getTrips } from '../trips/trips.js';

console.log(getTrips());
console.log("This is a test");

function CostSharingScreen(){
    return (
            

            <div className='CostSharingScreen'>
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>

                <Col>
                <h1>
                    GoForIt
                </h1>
                <Row>
                <h4>
                    Break up trip cost here
                </h4>
                </Row>
                <h6>
                    Enter the cost for each category and select who should pay.
                </h6>

                <Row>
                <h9>
                    Each participant will be emailed their share of the budget at the end.
                </h9>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="Gas ($)">
                                    <Form.Control type="Email Invite" placeholder="$" />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <Row>
                                    {getEmails().map((email) => ( 
                                        <label for="checkid">
                                        <input id="checkidGas1"  type="checkbox" value="test"/> {email}
                                    </label>
                                    )
                                    
                                    )}
                    
                                </Row>
                            </Col>
                        </Row>
                        <Row><br></br></Row>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="Groceries ($)">
                                    <Form.Control type="Email Invite" placeholder="$" />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <Row>
                                {getEmails().map((email) => ( 
                                        <label for="checkid">
                                        <input id="checkidGas1"  type="checkbox" value="test"/> {email}
                                    </label>
                                    )
                                    
                                    )}
                                </Row>
                            </Col>
                        </Row>
                        <Row><br></br></Row>
                        <Row>
                            <Col>
                                <FloatingLabel controlId="floatingInput" label="Lodging ($)">
                                    <Form.Control type="Email Invite" placeholder="$" />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <Row>
                                {getEmails().map((email) => ( 
                                        <label for="checkid">
                                        <input id="checkidGas1"  type="checkbox" value="test"/> {email}
                                    </label>
                                    )
                                    
                                    )}
                                </Row>

                            </Col>
                        </Row>
                </Row>
                <Row>
                    <Col>
                        <Link to="/createtrip/invite">
                            <Button variant="outline-secondary"> Back </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/">
                            <Button variant="outline-secondary"> Next </Button>
                        </Link>
                    </Col>
                </Row>
                
                </Col>
                    
                </Row>
                
            </div>
    )
}

export default CostSharingScreen;