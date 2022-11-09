import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button, ButtonToolbar } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import "../styles.css"

function ActivitiesScreen(){
    return (
        <div className="MainScreen">
            <Row>
                <Col xs={4} md="auto"><Sidebar /></Col>
                <Col>
                    <Row>
                        <ButtonToolbar>
                            <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
                                <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
                                <ToggleButton value={2}>Checkbox 2</ToggleButton>
                                <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
                            </ToggleButtonGroup>
                        </ButtonToolbar>
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