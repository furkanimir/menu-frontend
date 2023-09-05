import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='mx-3 my-2'>
      <Row className='mt-4'>
        <Col>
          <Card>
            <Card.Header>Deneme</Card.Header>
            <Card.Body>Deneme2 2</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Deneme</Card.Header>
            <Card.Body>Deneme 2</Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Contact