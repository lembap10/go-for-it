import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


function SavedTripScreen(){
    return (
        <Container>
            <div className='MainScreen'>
                <Row>
                    <h1>
                        Saved Trips
                    </h1>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card className='my-3 p-3 rounded'>
                            <Card.Body>
                                <Link to="/viewtrip" state={{name: "Duluth Trip", fileName:"Duluth.json"}}>
                                    <Card.Title>Duluth Trip</Card.Title>
                                </Link>
                                <Card.Text as='div'>
                                    Trip from Minneapolis to Duluth
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='my-3 p-3 rounded'>
                            <Card.Body>
                                <Link to="/viewtrip" state={{name: "Wisconsin Trip", fileName:"Wisconsin.json"}}>
                                    <Card.Title>Wisconsin Trip</Card.Title>
                                </Link>
                                <Card.Text as='div'>
                                    Trip from Minneapolis to Wisconsin
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link  to={"/"}>
                            <Button variant="outline-secondary" className='MainButton' id="back">Back</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default SavedTripScreen;