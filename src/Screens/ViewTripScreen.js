import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Dropdown from '../Components/Dropdown.js'
import './../ViewTripScreen.css'
import {getTrips, getCurScreen, changeCurScreen} from '../trips/trips.js'



function ViewTripScreen(){
    console.log(getTrips())
    const location = useLocation();
    const props = location.state;
    console.log(props)
    let name = props.name;
    let trips = getTrips();
    let trip = "";
    let index = 0;
    for (let i = 0; i < trips.length; i++){
        console.log ("!!!!", trips[i]);
        if (trips[i].name === name){
            index = i
            trip = trips[i];
            console.log(trip);
        }
    }
    console.log(trip);
    let days = trip.days;
    console.log(days);

    let line = <hr  style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: .5,
        borderColor : '#000000'
    }}/>

    return (
        <Container>
            <div className='ViewTripScreen'>
                <Row>
                    <h1 className="titleheader">
                        Saved Trip - {props.name}
                    </h1>
                </Row>
                
                <div className='tripInfo'>
                    <div className='tripOverview'>
                        <div className="costOverview">
                            <p>Cost</p>
                            <p>${trip.cost}</p>
                        </div>
                        {line}
                        <div className="attendeesOverview">
                            <p>Attendees</p>
                            {trip.attendees.map( att => {
                                return (<span classname="attendee">{att}</span>)
                            })}
                        </div>
                        {line}
                        <div className="datesOverview">
                            <p>Dates</p>
                            <span className='dates'>
                                {trip.dates[0]} - {trip.dates[1]}
                            </span>
                        </div>
                        {line}
                        <div className="activityOverview">
                            <p>Activity Types</p>
                            {trip.activityTypes.map( act => {
                                return (<span classname="attendee">{act}</span>)
                            })}
                        </div>
                    </div>
                    <div className="dailyBreakdowns">
                        {days.map(day => {
                            return(
                                <Dropdown name={day.day} activities={day.activities}/>
                            )
                        })}

                    </div>
                    <div className="map">
                        <iframe src={trip.src} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:0}} title="map"></iframe>
                    </div>
                </div>
            </div>
            <Link to="/">
                <Button variant="outline-secondary"> Back to Home </Button>
            </Link>
            <Link to="/createtrip/date">
                <Button variant="outline-secondary" onClick="changeCurScreen(index)"> Edit this Trip </Button>
            </Link>
        </Container>
    )
}

export default ViewTripScreen;