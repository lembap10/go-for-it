import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addEmails, getEmails, getTripNames, getTrips } from '../trips/trips.js';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from '../Components/Sidebar';

function InviteScreen() {
  const [emails, setEmails] = React.useState(() => []);

  const handleEmails = (newEmails) => {
    setEmails(newEmails);
};

  const handleSend = () => {
    let emailOne = document.getElementById("emailOne").value
    let emailTwo = document.getElementById("emailTwo").value
    let emailThree = document.getElementById("emailThree").value

    let emailList = [emailOne, emailTwo, emailThree]

    console.log(emailOne, emailTwo, emailThree)
    console.log(emailList)
    addEmails(emailList)
    
    console.log(getEmails())
    //console.log(Object.values(emails));
    
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
            <h4>Send your invitation to your fellow adventurers!</h4>
          </Row>

          <Row>
            <Col>
              <FloatingLabel label='Email' value ={emails} onChange={handleEmails}>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  id ='emailOne'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Email' value ={emails} onChange={handleEmails}>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  id ='emailTwo'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Email' value ={emails} onChange={handleEmails}>
                <Form.Control
                  type='text'
                  placeholder='Email'
                  id = 'emailThree'
                />
              </FloatingLabel>
            </Col>
            <Row>
              <Col>
                <Link to='/createtrip/edit'>
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
                <Link to={'/createtrip/costsharing'}>
                  <Button variant='outline-secondary' className="toEdit" onClick={handleSend} > Next </Button>
                </Link>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default InviteScreen;
