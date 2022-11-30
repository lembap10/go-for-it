import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Sidebar from '../Components/Sidebar';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { addBudget, getTrips } from '../trips/trips';

function valueLabelFormat(value) {
  const units = ['USD'];

  let unitIndex = 0;
  let scaledValue = value;

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return value;
}

export default function Budget() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  const clickHandler = () => {
    console.log(getTrips())
    addBudget(value)
    console.log(getTrips())
  }

  return (
    <div className='BudgetScreen'>
      <Row>
        <Col xs={4} md='auto'>
          <Sidebar />
        </Col>
        <Col>
          <h1>Go For It</h1>
          <br></br>
          <Row>
            <h4>What is your budget?</h4>
          </Row>{' '}
          <Box sx={{ width: 250 }}>
            <Typography id='non-linear-slider' gutterBottom>
              Budget: {valueLabelFormat(value)}
            </Typography>
            <Slider
              value={value}
              min={100}
              step={100}
              max={10000}
              scale={calculateValue}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={handleChange}
              valueLabelDisplay='auto'
              aria-labelledby='non-linear-slider'
            />
          </Box>
          <Row>
            <Col>
              <Link to='/createtrip/travelers'>
                <Button
                  variant='outline-secondary'
                  className='MainButton'
                  id='back_travelers'
                >
                  Back
                </Button>{' '}
              </Link>
            </Col>
            <Col>
              <Link to='/createtrip/activities'>
                <Button
                  variant='outline-secondary'
                  className='MainButton'
                  id='to_activities'
                  onClick={clickHandler}
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
