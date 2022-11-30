import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addEmails } from '../trips/trips.js';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Sidebar from '../Components/Sidebar';

function InviteScreen() {
  const [emails, setEmails] = React.useState(() => []);

  const handleEmails = (newEmails) => {
    setEmails(newEmails);
};

  const handleSend = () => {
    console.log(Object.values(emails))
    addEmails(Object.values(emails));
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
              <FloatingLabel controlId='floatingInput' label='Email' onChange={handleEmails}>
                <Form.Control
                  type='Email Invite'
                  placeholder='example@gmail.com'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInput' label='Email' onChange={handleEmails}>
                <Form.Control
                  type='Email Invite'
                  placeholder='example@gmail.com'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel controlId='floatingInput' label='Email' onChange={handleEmails}>
                <Form.Control
                  type='Email Invite'
                  placeholder='example@gmail.com'
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
