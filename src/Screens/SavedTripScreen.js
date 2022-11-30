import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { getTripNames, getTrips, getCurTrip } from "../trips/trips"


function SavedTripScreen(){
    var names = getTripNames();
    console.log(names);
    function getFromTo(name){
        let trip = getCurTrip(name);
        let from = trip.from;
        let to = trip.to;
        return `Trip from ${from} to ${to}`;
    };
    console.log(getTrips());
    return (
        <Container>
            <div className='MainScreen'>
                <Row>
                    <h1>
                        Saved Trips
                    </h1>
                </Row>
                <br></br>
                <Row md={2}>
                    {names.map((name) => (
                        <Card className='my-3 p-3 rounded'>
                            <Card.Body>
                                <Link to="/viewtrip" state={{name: name}}>
                                    <Card.Title>{name}</Card.Title>
                                </Link>
                                <Card.Text as='div'>
                                    {getFromTo(name)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
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