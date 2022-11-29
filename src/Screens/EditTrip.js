import React from 'react';
import { Col, Row, Button, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from "../Components/Sidebar";
import '../EditTrip.css'

function EditTrip(){
    return (
        <div className="MainScreen">
            <Row >
                <Col xs={4} md="auto"><Sidebar />
                </Col>
                <Col className='box'>
                    <h1 align="center">What is your travel vibe?</h1>
                    <br />
                    
                    <Row className='EditElement'>
                        <Col className='EditElement'>
                            Current Schedule
                        </Col>
                        <Col className='EditElement'>
                            Add Activity
                        </Col>
                        <Col className='EditElement'>
                            CurrentInfo
                        </Col>
                    </Row>
                </Col>
                <br />
                <Row>
                    <Col>
                        <Link to="/createtrip/vibes">
                            <Button variant="outline-secondary" className='MainButton' id="back_activities">Back</Button>{' '}
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/createtrip/budget">
                            <Button variant="outline-secondary" className='MainButton' id="to_invite">Next</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}
    
export default EditTrip;