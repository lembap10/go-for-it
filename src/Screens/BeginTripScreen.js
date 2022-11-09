import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
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
                            <Link to="/createtrip/begintrip/date">
                                <Button variant="outline-secondary" className='MainButton' id="Dates">Next</Button>{' '}
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>   
        </div>
    )
=======
function BeginTripScreen() {
  return (
    <div className='MainScreen'>
      <Row>
        <Col xs={4} md='auto'>
          <Sidebar />
        </Col>
        <Col>
          <h1>Let's Begin Our Adventure Here</h1>
          <br></br>
          <Row>
            <h4>Share your preferences and let us plan your next getaway!</h4>
          </Row>
          <Row>
            <Link to='/'>
              <Button
                variant='outline-secondary'
                className='MainButton'
                id='Dates'
              >
                Next
              </Button>{' '}
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
>>>>>>> 9e86efed58578a9c0ce5d4534000da666a78c68f
}

export default BeginTripScreen;
