import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function ActivitiesScreen(){
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <Link to="/createtrip/vibes">
                        <Button variant="outline-secondary" className='MainButton' id="Vibes">Next</Button>{' '}
                    </Link>
                </Col>
            </Row>   
        </div>
    )
}

export default ActivitiesScreen;