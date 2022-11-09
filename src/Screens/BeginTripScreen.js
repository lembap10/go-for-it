import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BeginTripScreen(){
    return (
        <div className="MainScreen">
            <Container>
                <Row>
                    <Col><Sidebar /></Col>
                    <Col xs={8}>
                        <h1>Let's Begin Our Adventure Here</h1>
                        <br></br>
                        <Row>
                            <h4>Share your preferences and let us plan your next getaway!</h4>
                        </Row>
                        <Row>
                            <Link to="/">
                                <Button variant="outline-secondary" className='MainButton' id="Dates">Go!</Button>{' '}
                            </Link>
                        </Row>
                    </Col>
                </Row> 
            </Container>  
        </div>
    )
}

export default BeginTripScreen;