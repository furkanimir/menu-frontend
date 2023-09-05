import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='mx-3 my-2'>
      <Row className='mt-4'>
        <Col className='container' style={{backgroundColor:'red'}}>
        <p>düzenleme</p>
        </Col>
        <Col style={{backgroundColor:'blue'}}>
        <p>düzenleme</p>
        </Col>
      </Row>
    </div>
  )
}

export default Contact