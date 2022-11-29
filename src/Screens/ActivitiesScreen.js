import React from 'react';
import { setActivityTypes } from '../trips/trips.js';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function ActivitiesScreen(){
    const [activities, setActivities] = React.useState(() => []);
    const handleActivities = (newActivities) => {
        setActivities(newActivities);
    };

    const handleSend = () => {
        setActivityTypes(activities);
    };
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <h1 align="center">What do you want to do there?</h1>
                    <br />

                    <Row>
                        <ToggleButtonGroup type="checkbox" className="mb-2" value={activities} onChange={handleActivities}>
                            <ToggleButton variant = "outline-primary" id="Attractions" value="Attractions">Attractions</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Shopping" value="Shopping">Shopping</ToggleButton>
                            <ToggleButton variant = "outline-primary" id = "Outdoors" value="Outdoors">Outdoors</ToggleButton>
                        </ToggleButtonGroup>
                        <br/>
                        
                        <ToggleButtonGroup type="checkbox" className="mb-2" value={activities} onChange={handleActivities}>
                            <ToggleButton variant = "outline-primary" id="Cuisine" value="Cuisine">Cuisine</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="History" value="History">History</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Arts" value="Arts">Arts</ToggleButton>
                        </ToggleButtonGroup>
                        <br />

                        <ToggleButtonGroup type="checkbox" className="mb-2" value={activities} onChange={handleActivities}>
                            <ToggleButton variant = "outline-primary" id="Theatre" value="Theatre">Theatre</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Culture" value="Culture">Culture</ToggleButton>
                            <ToggleButton variant = "outline-primary" id="Wine" value="Wine">Wine</ToggleButton>
                        </ToggleButtonGroup>
                    </Row>
                    <br />
                    
                    <Row>
                        <Col>
                            <Link to="/createtrip/budget">
                                <Button variant="outline-secondary" className='MainButton' id="back_budget">Back</Button>{' '}
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/createtrip/vibes">
                                <Button variant="outline-secondary" className='MainButton' id="to_vibes" onClick={handleSend} >Next</Button>{' '}
                            </Link>
                        </Col>
                        
                    </Row>
                </Col>
            </Row>   
        </div>
    )
}

export default ActivitiesScreen;