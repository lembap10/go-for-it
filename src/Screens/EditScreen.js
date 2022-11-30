import * as React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Sidebar from '../Components/Sidebar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { getMap, getTrips, getDays } from '../trips/trips.js';
import PropTypes from 'prop-types';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

class Card extends React.Component {
  render() {
    return <div className='card'>{this.props.children}</div>;
  }
}

class SelectableCard extends React.Component {
  render() {
    var isSelected = this.props.selected ? 'selected' : '';
    var className = 'selectable ' + isSelected;
    return (
      <Card>
        <div className={className} onClick={this.props.onClick}>
          {this.props.children}
          <div className='check'>
            <span className='checkmark'>✔</span>
          </div>
        </div>
      </Card>
    );
  }
}

class SelectableTitleCard extends React.Component {
  render() {
    var { title, description, selected } = this.props;
    return (
      <SelectableCard onClick={this.props.onClick} selected={selected}>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <p className='description'>{description}</p>
        </div>
      </SelectableCard>
    );
  }
}

class SelectableCardList extends React.Component {
  constructor(props) {
    super(props);
    var selected = props.multiple ? [] : -1;
    var initialState = {
      selected: selected,
    };
    this.state = initialState;
  }

  onItemSelected(index) {
    this.setState((prevState, props) => {
      if (props.multiple) {
        var selectedIndexes = prevState.selected;
        var selectedIndex = selectedIndexes.indexOf(index);
        if (selectedIndex > -1) {
          selectedIndexes.splice(selectedIndex, 1);
          props.onChange(selectedIndexes);
        } else {
          if (!(selectedIndexes.length >= props.maxSelectable)) {
            selectedIndexes.push(index);
            props.onChange(selectedIndexes);
          }
        }
        return {
          selected: selectedIndexes,
        };
      } else {
        props.onChange(index);
        return {
          selected: index,
        };
      }
    });
  }

  render() {
    var { contents, multiple } = this.props;

    var content = contents.map((cardContent, i) => {
      var { title, description, selected } = cardContent;
      var selected = multiple
        ? this.state.selected.indexOf(i) > -1
        : this.state.selected == i;
      return (
        <SelectableTitleCard
          key={i}
          title={title}
          description={description}
          selected={selected}
          onClick={(e) => this.onItemSelected(i)}
        />
      );
    });
    return <div className='cardlist'>{content}</div>;
  }
}

class Example extends React.Component {
  onListChanged(selected) {
    this.setState({
      selected: selected,
    });
  }
  submit() {
    window.alert('Selected: ' + this.state.selected);
  }
  render() {
    return (
      <div className='column'>
        <h1 className='title'>{this.props.title}</h1>
        <SelectableCardList
          multiple={this.props.multiple}
          maxSelectable={this.props.maxSelectable}
          contents={this.props.cardContents}
          onChange={this.onListChanged.bind(this)}
        />
        <button className='card' onClick={(e) => this.submit()}>
          Get selected
        </button>
      </div>
    );
  }
}

var teams = [
  {
    title: 'November 25',
    description: 'Minneapolis',
  },
  {
    title: 'November 26',
    description: 'Duluth',
  },
  {
    title: 'November 27',
    description: 'Duluth',
  },
];

var genres = [
  {
    title: 'Aerial Lift Bridge',
    description: 'Hiking',
  },
  {
    title: 'Canal Park',
    description: 'Hiking',
  },
  {
    title: 'Spirit Mountain',
    description: 'Nature',
  },
  {
    title: 'Great Lakes Aquarium',
    description: 'Nature',
  },
];

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
  const trips = getTrips();
  const [tabvalue, setTabValue] = React.useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setTabValue(newValue);
  // };

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
                      getDays
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

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Children'
                  />
                  <FormControlLabel control={<Checkbox />} label='Elderly' />
                  <FormControlLabel control={<Checkbox />} label='Disabled' />
                  <FormControlLabel control={<Checkbox />} label='Pets' />
                </FormGroup>
              </Col>

              <Col>
                <h4>Activities</h4>
                {/* <div>
                  <Example title='Date' cardContents={teams} />
                  <Example
                    title='Choose activities (3 max)'
                    cardContents={genres}
                    multiple
                    maxSelectable={3}
                  />
                </div> */}
                <ImageList sx={{ width: 500, height: 450 }}>
                  <ImageListItem key='Subheader' cols={2}>
                    <ListSubheader component='div'>November 26 - 28</ListSubheader>
                  </ImageListItem>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading='lazy'
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                          >
                            <Icon>add_circle</Icon>
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>

                {/* <Box
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
                    <Tab label='One' {...a11yProps(0)} />
                    <Tab label='Two    ' {...a11yProps(1)} />
                    <Tab label='Three  ' {...a11yProps(2)} />
                  </Tabs>
                  <TabPanel value={tabvalue} index={0}>
                    1. Lost Creek Adventures<br></br>
                    Rafting/KayakingPaddleboardingVacation RentalsCornucopia
                    Open until 6:00 PM “a reservation online. On their website
                    it says if your 12 years old and 100lbs you are able to do
                    the half” more
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
                </Box> */}
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

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];
