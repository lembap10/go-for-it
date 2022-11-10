import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function VibesScreen(){
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <h1 align="center">What is your travel vibe?</h1>
                    <br />
                    
                    <Row>
                        <ToggleButtonGroup type="checkbox" className="mb-2">
                            <ToggleButton variant = "outline-primary" id="Romantic" value={"Romantic"}>Romantic</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Family-Friendly" value={"Family-Friendly"}>Family-Friendly</ToggleButton>
                            <ToggleButton variant = "outline-primary" id = "Chill" value={"Chill"}>Chill</ToggleButton>
                        </ToggleButtonGroup>
                        <br/>
                        
                        <ToggleButtonGroup type="checkbox" className="mb-2">
                            <ToggleButton variant = "outline-primary" id="Adventurous" value={"Adventurous"}>Adventurous</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Fast-Paced" value={"Fact-Paced"}>Fact-Paced</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Wanderlust" value={"Wanderlust"}>Wanderlust</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br />
                    
                    <Row>
                        <Link to="/createtrip/invite">
                            <Button variant="outline-secondary" className='MainButton' id="to_invite">Next</Button>{' '}
                        </Link>
                    </Row>
                </Col>
            </Row>   
        </div>
    )
}

export default VibesScreen;