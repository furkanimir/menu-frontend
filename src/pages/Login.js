import { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';


function Login() {
    const [username, setUsername] = useState('selam');
    const [password, setPassword] = useState('parolayidegistirmeyin');
    const [isLogin, setIsLogin] = useState(false);



    const handleSubmit = (event) => {


        if (username === 'selam' && password === 'parolayidegistirmeyin') {
            setIsLogin(true); // Giriş başarılı ise logini türü yapüyürüz
            console.log(isLogin);
        } else {
            setIsLogin(false);
        }
    };

    return (
        <Container>
            <Form >
                <Form.Group className="d-flex justify-content-center" controlId="formGroupEmail">
                    <div className='align-items-center' style={{ width: '80%' }}>
                        <Row className='d-flex justify-content-center mt-5' >
                            <Col className='' xs={3} sm={4} md={4}>
                                <Form.Label >Kullanıcı adı</Form.Label>
                            </Col>
                            <Col xs={6} sm={8} md={8}>
                                <Form.Control
                                    type="text"
                                    placeholder="username"
                                    aria-label="Disabled input example"
                                    readOnly
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </Col>
                        </Row>

                        <Row className='d-flex justify-content-center my-2' >
                            <Col xs={3} sm={4} md={4}>
                                <Form.Label>Şifre  </Form.Label>
                            </Col>
                            <Col xs={6} sm={8} md={8}>
                                <Form.Control
                                    placeholder="username"
                                    aria-label="Disabled input example"
                                    type="password"
                                    disabled
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>

                        </Row>
                        <Row className='align-items-center'>
                            <Button className='d-flex justify-content-center  mt-5' variant="success" style={{ width: '80%' }}
                                onClick={() => { handleSubmit() }}>Giriş</Button>
                        </Row>
                    </div>
                </Form.Group>

            </Form>

        </Container>
    );
}

export default Login;