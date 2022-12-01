import React from "react"
import Sidebar from "../Components/Sidebar"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { DateRangePicker } from "rsuite"
import "rsuite/dist/rsuite.min.css"
import { addDates } from "../trips/trips.js"

const DateScreen = () => {
  const clickHandler = () => {
    let date = document.getElementById("date").value
    console.log(date)
    if (date != null){
      let from = date.substring(0, 10)
      let to = date.substring(13, 23)
      let fromMonth = from.substring(5, 7)
      let fromDay = from.substring(8, 10)
      let toMonth = to.substring(5, 7)
      let toDay = to.substring(8, 10)
      addDates(fromMonth, fromDay, toMonth, toDay)
    }
  }
  return (
    <div>
      <Row>
        <Col
          xs={4}
          md='auto'
        >
          <Sidebar />
        </Col>
        <Col>
          <h1>GoForIt</h1>
          <br></br>
          <Row>
            <h4>When would you like to travel?</h4>
          </Row>
          <Row>
            <Col>
              <DateRangePicker
                block
                id='date'
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to='/createtrip/begintrip'>
                <Button
                  variant='outline-secondary'
                  className='MainButton'
                  id='back_begin'
                >
                  Back
                </Button>{" "}
              </Link>
            </Col>
            <Col>
              <Link to='/createtrip/travelers'>
                <Button
                  variant='outline-secondary'
                  className='MainButton'
                  id='to_travelers'
                  onClick={clickHandler}
                >
                  Next
                </Button>{" "}
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default DateScreen
