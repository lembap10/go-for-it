import React from 'react';
import { Col, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import Dropdown from '../Components/Dropdown.js'
import './../ViewTripScreen.css'
import {getTrips} from '../trips/trips.js'



function ViewTripScreen(){

    const location = useLocation();
    const props = location.state;
    let trips = getTrips();
    let days = trips.Duluth.days;
    console.log(days);

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

                    </div>
                    <div className="dailyBreakdowns">
                        {days.map(day => {
                            return(
                                <Dropdown name={day.day} activities={day.activities}/>
                            )
                        })}

                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1426252.345103502!2d-93.68737600437473!3d45.718075727670964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x52b32d69f70ac7ff%3A0xe31217a152df9978!2sUniversity%20of%20Minnesota%2C%20Minneapolis%2C%20MN!3m2!1d44.97399!2d-93.2277285!4m5!1s0x52ae527e782e37ff%3A0x90fdbf76eb580c72!2sDuluth%2C%20MN!3m2!1d46.786671899999995!2d-92.1004852!5e0!3m2!1sen!2sus!4v1667681458593!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{border:0}} title="map"></iframe>
                    </div>
                </div>
            </div>
            <Link to="/">
                <Button variant="outline-secondary"> Back to Home </Button>
            </Link>
        </Container>
    )
}

export default ViewTripScreen;