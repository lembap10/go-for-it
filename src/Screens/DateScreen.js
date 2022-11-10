import React from "react";
import Sidebar from "../Components/Sidebar";
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DateRangePicker } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const DateScreen = () => {
  return (
    <div>
        <Row>
            <Col xs={4} md="auto"><Sidebar /></Col>
            <Col>
                <h1>GoForIt</h1>
                <br></br>
                <Row>
                    <h4>When would you like to travel?</h4>
                </Row>
                <Row>
                    <Col><DateRangePicker block/></Col>
                </Row>
                <Row>
                    <Col>
                        <Link to="/createtrip/travelers">
                            <Button variant="outline-secondary" className='MainButton' id="to_travelers">Next</Button>{' '}
                        </Link>
                    </Col>
                </Row>
            </Col>
        </Row>      
    </div>
  );
};

export default DateScreen;
