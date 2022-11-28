import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from '../Components/Sidebar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { getMap } from '../trips/trips.js';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function valueLabelFormat(value) {
  //value for slider bar

  const units = ['Hours'];

  let unitIndex = 0;
  let scaledValue = value;

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return value;
}

function EditScreen() {
  let trip = [{}];
  const [tabvalue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [hourvalue, setHourValue] = React.useState(2);

  const handleHourChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setHourValue(newValue);
    }
  };

  const [value1, setValue1] = React.useState('Gas stops');

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const [value2, setValue2] = React.useState('Pets');

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  return (
    <div className='InviteScreen'>
      <Row>
        <Col xs={4} md='auto'>
          <Sidebar />
        </Col>

        <Col>
          <h1>GoForIt</h1>
          <Row>
            <h4>Eidt Your Trip Here!</h4>
          </Row>

          <Row>
            <Col>
              <FloatingLabel controlId='floatingInput' label='Start Time'>
                <Form.Control type='Start Time' placeholder='11 AM' />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInput' label='current location'>
                <Form.Control
                  type='Current Loaction'
                  placeholder='Current Loaction'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInput' label='Destination'>
                <Form.Control type='Destination' placeholder='Destination' />
              </FloatingLabel>
            </Col>
            <Row>
              <Col>
                <FormControl>
                  <FormLabel id='demo-controlled-radio-buttons-group'>
                    Stops
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby='demo-controlled-radio-buttons-group'
                    name='controlled-radio-buttons-group'
                    value={value1}
                    onChange={handleChange1}
                  >
                    <FormControlLabel
                      value='Gas stops'
                      control={<Radio />}
                      label='Gas stops'
                    />
                    <FormControlLabel
                      value='Rest stops'
                      control={<Radio />}
                      label='Rest stops'
                    />
                    <FormControlLabel
                      value='Attractions'
                      control={<Radio />}
                      label='Attractions'
                    />
                    <FormControlLabel
                      value='Hotels'
                      control={<Radio />}
                      label='Hotels'
                    />
                  </RadioGroup>
                </FormControl>
                <Box sx={{ width: 250 }}>
                  <Typography id='non-linear-slider' gutterBottom>
                    Hours: {valueLabelFormat(hourvalue)}
                  </Typography>
                  <Slider
                    value={hourvalue}
                    min={0}
                    step={0.1}
                    max={24}
                    scale={calculateValue}
                    getAriaValueText={valueLabelFormat}
                    valueLabelFormat={valueLabelFormat}
                    onChange={handleHourChange}
                    valueLabelDisplay='auto'
                    aria-labelledby='non-linear-slider'
                  />
                </Box>
                <FormControl>
                  <FormLabel id='demo-controlled-radio-buttons-group'>
                    Accomodation
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby='demo-controlled-radio-buttons-group'
                    name='controlled-radio-buttons-group'
                    value={value2}
                    onChange={handleChange2}
                  >
                    <FormControlLabel
                      value='Children'
                      control={<Radio />}
                      label='Children'
                    />
                    <FormControlLabel
                      value='Elderly'
                      control={<Radio />}
                      label='Elderly'
                    />
                    <FormControlLabel
                      value='Disabled'
                      control={<Radio />}
                      label='Disabled'
                    />
                    <FormControlLabel
                      value='Pets'
                      control={<Radio />}
                      label='Pets'
                    />
                  </RadioGroup>
                </FormControl>
              </Col>

              <Col>
                <h4>Activities</h4>
                <Box
                  sx={{
                    flexGrow: 2,
                    bgcolor: 'background.paper',
                    display: 'flex',
                    height: 350,
                  }}
                >
                  <Tabs
                    orientation='vertical'
                    variant='scrollable'
                    value={tabvalue}
                    onChange={handleTabChange}
                    aria-label='Vertical tabs example'
                    sx={{ borderRight: 2, borderColor: 'divider' }}
                    flexContainerVertical
                  >
                    <Tab label='One    ' {...a11yProps(0)} />
                    <Tab label='Two    ' {...a11yProps(1)} />
                    <Tab label='Three  ' {...a11yProps(2)} />
                    <Tab label='Four   ' {...a11yProps(3)} />
                    <Tab label='Five   ' {...a11yProps(4)} />
                    <Tab label='Six    ' {...a11yProps(5)} />
                    <Tab label='Seven  ' {...a11yProps(6)} />
                  </Tabs>
                  <TabPanel value={tabvalue} index={0}>
                    1. Lost Creek Adventures
                    Rafting/KayakingPaddleboardingVacation RentalsCornucopia
                    Open until 6:00 PM “a reservation online. On their website
                    it says if your 12 years old and 100lbs you are able to do
                    the half” more ★★★★★
                  </TabPanel>
                  <TabPanel value={tabvalue} index={1}>
                    2. Amnicon Falls State Park<br></br>Parks “or so at the area
                    and it is worth it. There are other things to do up there
                    too especially since” more
                  </TabPanel>
                  <TabPanel value={tabvalue} index={2}>
                    3. Great Lakes Aquarium <br></br> Aquariums Closes in 58 min
                    “things. Highlights were petting the turtles and the Great
                    Lakes boats! Pro tip: pack snacks!!” more
                  </TabPanel>
                  <TabPanel value={tabvalue} index={3}>
                    4. Canal Park 4.5 <br></br> Parks “the beautiful things it
                    has to offer. Canal Park is very clean, safe, and also
                    somewhat easy to miss” more
                  </TabPanel>
                  <TabPanel value={tabvalue} index={4}>
                    5. North Shore Scenic Railroad <br></br>Historical Tours
                    Closes in 58 min “vivacious and sweet. The ride itself was
                    cool and I learned a couple things. The cabin was kinda”
                    more
                  </TabPanel>
                  <TabPanel value={tabvalue} index={5}>
                    6. Glensheen Mansion <br></br>Landmarks & Historical
                    BuildingsVenues & Event SpacesHistorical Tours Closed until
                    9:00 AM tomorrow “A lot of things go into visiting
                    Glensheen. First of all only a set number of people can be
                    up in” more
                  </TabPanel>
                  <TabPanel value={tabvalue} index={6}>
                    7. Jay Cooke State Park <br></br>CampgroundsHiking “to do
                    here--so many hiking trails and sightseeing around the St
                    Louis River. One must-stop part” more
                  </TabPanel>
                </Box>
              </Col>

              <Col>
                <div className='map'>
                  <iframe
                    src={getMap()}
                    width='600'
                    height='450'
                    style='border:0;'
                    allowfullscreen=''
                    loading='lazy'
                    referrerpolicy='no-referrer-when-downgrade'
                    style={{ border: 0 }}
                    title='map'
                  ></iframe>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <Link to='/createtrip/vibes'>
                  <Button
                    variant='outline-secondary'
                    className='MainButton'
                    id='back_vibes'
                  >
                    Back
                  </Button>{' '}
                </Link>
              </Col>
              <Col>
                <Link to={'/createtrip/invite'}>
                  <Button variant='outline-secondary'> Next </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default EditScreen;
