import React from 'react';
import { Button } from 'react-bootstrap';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tripImg from '../Images/trip-planning.png';

function MainScreen(){
    return (
        <Container>
            <div className='MainScreen'>
                <Row>
                    <h1>
                        Go For It
                    </h1>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Link to="/createtrip">
                            <Button variant="outline-secondary" className='MainButton' id="CreateTrip">Create Trip</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/savedtrips">
                            <Button variant="outline-secondary" className='MainButton' id="SavedTrips">Saved Trip</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Image src={tripImg} alt="trip planning" fluid />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default MainScreen;