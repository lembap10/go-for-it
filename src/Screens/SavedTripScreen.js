import React from 'react';
import { Col, Row, Button, ProgressBar, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";


function SavedTripScreen(){
    return (
        <div className='MainScreen'>
            <Row>
                <h1>
                    Saved Trips
                </h1>
            </Row>
            <Row>
                <ProgressBar striped variant="info" now={20}/>
            </Row>
            <br></br>
            <Row>
                <Col>
                    <Card className='my-3 p-3 rounded'>
                        <Card.Body>
                            <Link to="/">
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
                            <Link to="/createtrip">
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
    )
}

export default SavedTripScreen;