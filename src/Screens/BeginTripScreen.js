import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BeginTripScreen(){
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <h1>Let's Begin Our Adventure Here</h1>
                    <br></br>
                    <Row>
                        <h4>Share your preferences and let us plan your next getaway!</h4>
                    </Row>
                    <Row>
                        <Col>
                            <Link to="/createtrip">
                                <Button variant="outline-secondary" className='MainButton' id="back_create">Back</Button>{' '}
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/createtrip/date">
                                <Button variant="outline-secondary" className='MainButton' id="to_dates">Next</Button>{' '}
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>   
        </div>
    )
}

export default BeginTripScreen;
