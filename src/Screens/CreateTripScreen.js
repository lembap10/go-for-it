import React from "react"
import { Button } from "react-bootstrap"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import { Col, Row, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { createNewTrip, getTrips, changeCurScreen, getCurScreen } from "../trips/trips.js"


function CreateTripScreen() {
  const clickHandler = () => {
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let name = document.getElementById("tripName").value
    createNewTrip(name, to, from)
    let trips = getTrips()
    changeCurScreen((trips.length - 1))
    console.log(getTrips())
  }

  return (
    <Container>
      <div className='MainScreen'>
        <Row>
          <h1>Creating Trip</h1>
        </Row>
        <br></br>
        <Row>
          <FloatingLabel
            controlId='floatingInput'
            label='Name of the Trip'
          >
            <Form.Control
              type='text'
              placeholder='Name of the Trip'
              id='tripName'
            />
          </FloatingLabel>
        </Row>
        <br></br>
        <Row>
          <Col>
            <FloatingLabel
              controlId='floatingInput'
              label='Current Location'
            >
              <Form.Control
                type='text'
                placeholder='Current Location'
                id='from'
              />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId='floatingInputGrid'
              label='Destination'
            >
              <Form.Control
                type='text'
                placeholder='Destination'
                id='to'
              />
            </FloatingLabel>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Link to={"/"}>
              <Button
                variant='outline-secondary'
                className='MainButton'
                id='back'
              >
                Back
              </Button>{" "}
            </Link>
          </Col>
          <Col>
            <Link to={"/createtrip/begintrip"}>
              <Button
                variant='outline-secondary'
                className='MainButton'
                id='next'
                onClick={clickHandler}
              >
                Next
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default CreateTripScreen
