import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Travelers() {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(0);
  let [count3, setCount3] = useState(0);

  function incrementCount1() {
    count1 = count1 + 1;
    setCount1(count1);
  }
  function decrementCount1() {
    if (count1 > 0) {
      count1 = count1 - 1; //can't go below 0
    }
    setCount1(count1);
  }
  function incrementCount2() {
    count2 = count2 + 1;
    setCount2(count2);
  }
  function decrementCount2() {
    if (count2 > 0) {
      count2 = count2 - 1; //can't go below 0
    }
    setCount2(count2);
  }

  function incrementCount3() {
    count3 = count3 + 1;
    setCount3(count3);
  }
  function decrementCount3() {
    if (count3 > 0) {
      count3 = count3 - 1; //can't go below 0
    }
    setCount3(count1);
  }

  return (
    <div className='TravelersScreen'>
      <Row>
        <Col xs={4} md='auto'>
          <Sidebar />
        </Col>
        <Col>
          <h1>Go For It</h1>
          <br></br>
          <Row>
            <h4>How many people are you traveling with?</h4>
          </Row>{' '}
          <h1>Adults: {count1}</h1>
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={incrementCount1}
          >
            {' '}
            +{' '}
          </Button>{' '}
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={decrementCount1}
          >
            {' '}
            -{' '}
          </Button>{' '}
          <h1>Children: {count2}</h1>
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={incrementCount2}
          >
            {' '}
            +{' '}
          </Button>{' '}
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={decrementCount2}
          >
            {' '}
            -{' '}
          </Button>{' '}
          <h1>Pets: {count3}</h1>
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={incrementCount3}
          >
            {' '}
            +{' '}
          </Button>{' '}
          <Button
            variant='outline-secondary'
            className='MainButton'
            id='incrementCount'
            onClick={decrementCount3}
          >
            {' '}
            -{' '}
          </Button>{' '}
          <Row>
            <Col>
              <Link to="/createtrip/date">
                  <Button variant="outline-secondary" className='MainButton' id="back_dates">Back</Button>{' '}
              </Link>
            </Col>
            <Col>
              <Link to='/createtrip/budget'>
                <Button
                  variant='outline-secondary'
                  className='MainButton'
                  id='to_budget'
                >
                  Next
                </Button>{' '}
              </Link>
            </Col>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
}
