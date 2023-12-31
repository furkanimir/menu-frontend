import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import ItemModal from '../components/ItemModal';
import '../cssFiles/MenuPage.css'
import '../cssFiles/BirSaniy.css'
import ItemList from '../components/ItemList';


const MenuPage = () => {

  const [data, setData] = useState("");
  // const [loading, setLoading] = useState(false);
  // const apiUrl = 'http://localhost:8080/api/v1/menus/all';
  const apiUrl= 'https://first-render-qumf.onrender.com/api/v1/menus/all'
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loaded, setLoaded] =useState(false);


  const handleShow = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedItem(null);
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      setData(json);
      console.log(data);
      setLoaded(true);
    } catch (error) {
      console.error('Veri getirme hatasi:', error);
    }
  };

  const handleClick = () => {
    console.log(data);
  }

  //gpt 3.5
  const values = Object.keys(data).map((key) => data[key]);

  // const seenTypes = [];

  const kahvaltiItems = values.filter(item => item.type === "kahvalti");
  const salataItems = values.filter(item => item.type === "salatalar");
  const makarnaItems = values.filter(item => item.type === "makarnalar");
  const icecekItems = values.filter(item => item.type === "cay");




  return (
    <div>
      <Container>

        {/* Kahvaltılar */}
        <Card className='my-2' style={{ backgroundColor: '#453433', background: 'linear-gradient(to right, rgba(189, 155, 60, 0.9), rgba(230, 203, 129, 0.8))' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Kahvaltılar</Card.Title>
            <Card.Text>
              <div style={{alignItems:'center', justifyContent:'center'}}>
              {loaded ? "" : <p>Free host kullandığım için verilerin getirilmesi uzun sürecektir <Spinner animation="border" variant="secondary" /> </p> }
              </div>
              <ul class="kahvalti-items-list">
                {kahvaltiItems.map((item, index) => (
                  <ItemList item={item}
                  index={index} hex={'#ff0000'}
                  gradient={'linear-gradient(to right, rgba(189, 155, 60, 0.9), rgba(230, 203, 129, 0.8))'} />
                ))}
              </ul>
            </Card.Text>
            <Button variant="primary" onClick={handleClick}>Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* Salatalar */}
        <Card className='mb-2' style={{ background: 'linear-gradient(to right, rgba(58, 209, 50, 0.9), rgba(96, 209, 90, 0.8))' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Salatalar</Card.Title>
            <Card.Text>
              {salataItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      {/* tutar ve butonlar */}
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        <Row style={{ textAlign: 'justify', justifyContent: 'center' }}>
                          {item.price} ₺
                        </Row>
                        <Row>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Makarnalar */}
        <Card className='mb-2' style={{ background: 'linear-gradient(to right, rgba(173, 153, 23, 0.9), rgba(171, 154, 43, 0.6))' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Makarnalar</Card.Title>
            <Card.Text>
              {makarnaItems.map((item, index) => (
                <Card key={index} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        {item.price} ₺
                      </Col>
                    </Row>
                  </Card.Text>
                </Card>
              ))}
            </Card.Text>
          </Card.Body>
        </Card>

        {/* İçecekler */}
        <Card className='mb-2' style={{ backgroundColor: '#99aaa6' }}>
          <Card.Body>
            <Card.Title style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>İçecekler</Card.Title>
            <Card.Text>

              {icecekItems.map((item) => (
                <Card key={item.id} className='mb-3' style={{ height: '110px' }}>
                  <Card.Title className='mx-2'>{item.header}</Card.Title>
                  <Card.Text className='mx-1'>
                    <Row>
                      <Col xs="auto" md="auto" >
                        <Image src={item.img} style={{ height: '75px', width: '125px' }} />
                      </Col>
                      <Col>
                        {item.description}
                      </Col>
                      {/* tutar ve butonlar */}
                      <Col xs="auto" md="auto" className='text-center mx-4'>
                        <Row style={{ textAlign: 'justify', justifyContent: 'center' }}>
                          {item.price} ₺
                        </Row>
                        <Row>
                          {/* düzenleme */}
                          <Col>
                            {/* <Button variant="primary" onClick={handleShow}>
                              Launch demo modal
                            </Button> */}
                          </Col>
                          {/* silme */}
                          <Col>
                            <Button variant="primary" onClick={() => handleShow(item)}>
                              Düzenle
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                      {/* tutar bitti */}
                    </Row>
                  </Card.Text>
                </Card>
              ))}

            </Card.Text>
          </Card.Body>
        </Card>

      </Container>

      {selectedItem && (
        <ItemModal
          item={selectedItem}
          show={showModal}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}

export default MenuPage