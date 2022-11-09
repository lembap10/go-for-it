import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function ActivitiesScreen(){
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <h1 align="center">What do you want to do there?</h1>
                    <Row>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={"Attractions"}>Attractions</ToggleButton>
                            <ToggleButton value={"Shopping"}>Shopping</ToggleButton>
                            <ToggleButton value={"Outdoors"}>Outdoors</ToggleButton>
                        </ToggleButtonGroup>
                        <br></br>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={"Cuisine"}>Cuisine</ToggleButton>
                            <ToggleButton value={"History"}>History</ToggleButton>
                            <ToggleButton value={"Arts"}>Arts</ToggleButton>
                        </ToggleButtonGroup>
                        <br></br>
                        <ToggleButtonGroup type="checkbox">
                            <ToggleButton value={"Theatre"}>Theatre</ToggleButton>
                            <ToggleButton value={"Culture"}>Culture</ToggleButton>
                            <ToggleButton value={"Wine"}>Wine</ToggleButton>
                        </ToggleButtonGroup>
                        <br></br>
                    </Row>
                    <Row>
                        <Link to="/createtrip/vibes">
                            <Button variant="outline-secondary" className='MainButton' id="Vibes">Next</Button>{' '}
                        </Link>
                    </Row>
                </Col>
            </Row>   
        </div>
    )
}

export default ActivitiesScreen;