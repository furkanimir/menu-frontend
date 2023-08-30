import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container>
        <Row>
        <Col>
        <Card>
                <Card.Header>Deneme</Card.Header>
                <Card.Body>Deneme 2</Card.Body>
            </Card>
        </Col>
        <Col>
        <Card>
                <Card.Header>Deneme</Card.Header>
                <Card.Body>Deneme 2</Card.Body>
            </Card>
        </Col>
        </Row>
    </Container>
  )
}

export default Contact